# Plugin Development Guide

Mivo supports a modular plugin system that allows developers to extend functionality, add themes, or integrate third-party services. This guide details the rules and structure required for your plugin to work with Mivo and appear in the Registry.

## Directory Structure

A valid Mivo plugin must have a flat structure with a `plugin.php` file in the root.

```text
plugin-name/
├── plugin.php          # (Required) Entry point & Metadata
├── composer.json       # (Optional) Dependencies
├── README.md           # (Required) Documentation for Registry
├── theme/              # (Optional) Captive Portal theme files
│   └── styles.css
└── src/                # (Optional) PHP Classes
```

## Metadata Header

Your `plugin.php` **must** start with a specific comment block. The Registry crawler uses this to categorize and display your plugin.

```php
<?php
/**
 * Plugin Name: My Awesome Plugin
 * Description: Adds a dark mode toggle to the hotspot login page.
 * Version: 1.0.0
 * Author: YourName
 * Category: Hotspot Tools
 * Scope: Global
 * Tags: theme, dark-mode, ui
 * Core Version: >=1.2.0
 */

use App\Core\Hooks;

// Plugin logic starts here...
```

### Required Fields
- **Plugin Name**: Displayed title.
- **Description**: Short summary (max 160 chars).
- **Version**: SemVer format (e.g., `1.0.0`).
- **Category**: One of: `Hotspot Tools`, `System Tools`, `Payment Gateway`, `Reports`, `Language Pack`.
- **Scope**: `Global` (available everywhere) or `Session` (specific to a router session).
- **Tags**: Comma-separated search keywords.

## Release & Registry Rules

To get your plugin listed in the [Official Registry](/plugins/):

1.  **Public Repository**: Host your code on GitHub.
2.  **Naming**: Repository name should start with `plugin-` (e.g., `plugin-advanced-login`).
3.  **Versioning**: Use **Git Tags** for releases. The Registry strictly prefers tagged releases over the main branch.
    -   Tag format: `v1.0.0`.
    -   You can use GitHub Actions to auto-generate ZIPs.
4.  **Documentation**: A comprehensive `README.md` is mandatory. It will be mirrored to the Mivo website.

## Sample GitHub Workflow

Create `.github/workflows/release.yml` to automatically package your plugin:

```yaml
name: Release Plugin
on:
  push:
    tags: ['v*']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: zip -r plugin.zip . -x "*.git*"
      - uses: softprops/action-gh-release@v1
        with:
          files: plugin.zip
```
