# Voucher Templates

MIVO features a powerful template engine to create beautiful, printable vouchers.

## <Icon name="FileCode" color="primary" /> Customizing Templates

Templates use HTML and specialized placeholders to display voucher data.

### Supported Variables

| Variable | Description |
| :--- | :--- |
| `\{\{username\}\}` | User's login username |
| `\{\{password\}\}` | User's login password |
| `\{\{server_name\}\}` | Hotspot server name |
| `\{\{dns_name\}\}` | DNS name for login (e.g., `hotspot.lan`) |
| `\{\{profile\}\}` | User profile/package name |
| `\{\{price\}\}` | Plan price (formatted) |
| `\{\{validity\}\}` | Validity duration |
| `\{\{time_limit\}\}` | Time limit session |
| `\{\{data_limit\}\}` | Data quota limit |
| `\{\{ip_address\}\}` | User's IP address |
| `\{\{mac_address\}\}` | User's MAC address |
| `\{\{comment\}\}` | User comment |
| `\{\{copyright\}\}` | Copyright text |
| `\{\{qrcode\}\}` | Generates a QR Code for login URL |

> [!TIP]
> The `\{\{qrcode\}\}` variable supports custom attributes for styling, for example: `\{\{qrcode size=100 fg=red\}\}`.
- **Preview**: Test your template instantly from the editor.

## <Icon name="Printer" color="info" /> Quick Print

Once a template is saved, it becomes available in the **Quick Print** menu within your router sessions.

