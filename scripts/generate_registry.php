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
        'download' => $repo['html_url'] . '/archive/refs/heads/' . $repo['default_branch'] . '.zip', 
        'readme' => '/plugins/' . $repo['name'], // Link to local mirrored doc
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

echo "Done! Generated " . count($plugins) . " plugins in JSON.\n";

// 5. Generate Documentation Pages (Mirroring)
echo "Starting Documentation Mirroring...\n";
$docsDir = __DIR__ . '/../plugins'; // Target directory

foreach ($plugins as $plugin) {
    echo "Mirroring docs for: " . $plugin['name'] . "\n";
    
    // Fetch README
    $readmeUrl = "https://raw.githubusercontent.com/$orgName/{$plugin['id']}/{$repo['default_branch']}/README.md";
    $readmeContent = fetchUrl($readmeUrl, $githubToken);
    
    if (!$readmeContent) {
        // Try master/main if default branch fetch failed
        $readmeContent = fetchUrl("https://raw.githubusercontent.com/$orgName/{$plugin['id']}/main/README.md", $githubToken);
    }

    if ($readmeContent) {
        // Sanitize & Prepend Frontmatter
        $title = $plugin['name'];
        $desc = $plugin['description'];
        
        // Remove the first # H1 if it matches the title (or any H1) to avoid duplication
        // This removes the first line if it starts with #
        $readmeContent = preg_replace('/^#\s+.+\n/', '', $readmeContent, 1);
        $readmeContent = trim($readmeContent);

        $mdContent = <<<EOT
---
layout: doc
title: "$title"
description: "$desc"
---

# $title

$readmeContent

---
*This documentation is automatically mirrored from the [source repository]({$plugin['repo']}).*
EOT;
        
        // Save to plugins/[id].md
        file_put_contents("$docsDir/{$plugin['id']}.md", $mdContent);
        echo "  + Created: plugins/{$plugin['id']}.md\n";
    } else {
        echo "  - Warning: README not found for {$plugin['id']}\n";
    }
}

