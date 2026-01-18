# Plugin Manager

Mivo v1.2+ introduces a powerful **Plugin System** that allows you to extend the core functionality of the application without modifying the source code.

## Installing Plugins

### Method 1: Upload ZIP
If you have a plugin ZIP file (e.g. from a third-party developer), you can install it manually:

1. Go to **Settings > Plugins**.
2. Click the **Upload Plugin** button.
3. Select your `.zip` file.
4. Mivo will verify the structure (`plugin.php`) and install it.

### Method 2: Via Registry
You can browse the [Official Registry](/plugins/) to find community-verified plugins:

1. find the plugin you want in the **Plugins** menu.
2. Click **Download** to get the ZIP file.
3. Upload it via **Settings > Plugins**.

*(Future updates will allow one-click install directly from the dashboard)*

## Managing Plugins

In the **Settings > Plugins** table, you can see all installed extensions.

- **Status**: Shows if the plugin is active.
- **Actions**:
  - **View Config**: Some plugins provide a configuration page.
  - **Delete**: Removes the plugin and its files permanently.

## Creating Plugins
Developers can create custom plugins to add features like new Hotspot themes, payment gateways, or system tools. Check the [Contribution Guide](/docs/guide/contribution) for details.
