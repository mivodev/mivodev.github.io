<?php

/**
 * Mivo Plugin Registry Generator
 * 
 * This script fetches all repositories from the 'mivodev' organization,
 * looks for 'plugin-*' repositories, fetches their 'plugin.php',
 * parses the metadata header, and generates 'public/plugins.json'.
 */

// Configuration
$orgName = 'mivodev';
$outputFile = __DIR__ . '/../public/plugins.json';
$githubToken = getenv('GITHUB_TOKEN'); // Needs to be set in Action secrets

function fetchUrl($url, $token = null) {
    $opts = [
        'http' => [
            'method' => 'GET',
            'header' => [
                'User-Agent: Mivo-Registry-Bot',
                $token ? "Authorization: token $token" : ''
            ]
        ]
    ];
    $context = stream_context_create($opts);
    return file_get_contents($url, false, $context);
}

echo "Starting Registry Generation...\n";

// 1. Fetch Repositories
$reposUrl = "https://api.github.com/orgs/$orgName/repos?per_page=100";
$reposJson = fetchUrl($reposUrl, $githubToken);

if (!$reposJson) {
    die("Error: Failed to fetch repositories.\n");
}

$repos = json_decode($reposJson, true);
$plugins = [];

foreach ($repos as $repo) {
    // Only process repositories starting with 'plugin-'
    if (strpos($repo['name'], 'plugin-') !== 0) {
        continue;
    }

    echo "Processing: " . $repo['name'] . "\n";

    // 2. Fetch plugin.php
    $rawUrl = "https://raw.githubusercontent.com/$orgName/{$repo['name']}/{$repo['default_branch']}/plugin.php";
    $pluginContent = fetchUrl($rawUrl, $githubToken);

    if (!$pluginContent) {
        echo "  - Warning: plugin.php not found. Skipping.\n";
        continue;
    }

    // 3. Parse Metadata
    // Regex looking for: * Key: Value
    preg_match_all('/^\s*\*\s*([a-zA-Z0-9 ]+):\s*(.+)$/m', $pluginContent, $matches, PREG_SET_ORDER);
    
    $metadata = [];
    foreach ($matches as $match) {
        $key = strtolower(trim($match[1]));
        $value = trim($match[2]);
        $metadata[$key] = $value;
    }

    // fallback if name is missing
    if (empty($metadata['plugin name'])) {
         echo "  - Warning: 'Plugin Name' header missing. Skipping.\n";
         continue;
    }

    // Construct Plugin Object
    $plugin = [
        'id' => $repo['name'],
        'name' => $metadata['plugin name'],
        'description' => $metadata['description'] ?? $repo['description'] ?? '',
        'author' => $metadata['author'] ?? $repo['owner']['login'],
        'version' => $metadata['version'] ?? '0.0.1',
        'category' => $metadata['category'] ?? 'Uncategorized',
        'tags' => array_map('trim', explode(',', $metadata['tags'] ?? '')),
        'repo' => $repo['html_url'],
        'download' => $repo['html_url'] . '/archive/refs/heads/' . $repo['default_branch'] . '.zip', // Default to main/master zip
        'readme' => $repo['html_url'] . '#readme', // Link to GitHub readme for now
        'updated_at' => $repo['updated_at']
    ];
    
    // Clean up empty tags
    $plugin['tags'] = array_filter($plugin['tags']);

    $plugins[] = $plugin;
    echo "  + Added: " . $plugin['name'] . "\n";
}

// 4. Save to JSON
$json = json_encode($plugins, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);
file_put_contents($outputFile, $json);

echo "Done! Generated " . count($plugins) . " plugins.\n";
