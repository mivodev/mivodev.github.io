# Voucher Templates

MIVO features a powerful template engine to create beautiful, printable vouchers.

## <Icon name="FileCode" color="primary" /> Customizing Templates

Templates use HTML and specialized placeholders to display voucher data.

### Supported Variables

| `&#123;&#123;username&#125;&#125;` | User's login username |
| `&#123;&#123;password&#125;&#125;` | User's login password |
| `&#123;&#123;server_name&#125;&#125;` | Hotspot server name |
| `&#123;&#123;dns_name&#125;&#125;` | DNS name for login (e.g., `hotspot.lan`) |
| `&#123;&#123;profile&#125;&#125;` | User profile/package name |
| `&#123;&#123;price&#125;&#125;` | Plan price (formatted) |
| `&#123;&#123;validity&#125;&#125;` | Validity duration |
| `&#123;&#123;time_limit&#125;&#125;` | Time limit session |
| `&#123;&#123;data_limit&#125;&#125;` | Data quota limit |
| `&#123;&#123;ip_address&#125;&#125;` | User's IP address |
| `&#123;&#123;mac_address&#125;&#125;` | User's MAC address |
| `&#123;&#123;comment&#125;&#125;` | User comment |
| `&#123;&#123;copyright&#125;&#125;` | Copyright text |
| `&#123;&#123;qrcode&#125;&#125;` | Generates a QR Code for login URL |

> [!TIP]
> The `&#123;&#123;qrcode&#125;&#125;` variable supports custom attributes for styling, for example: `&#123;&#123;qrcode size=100 fg=red&#125;&#125;`.
- **Preview**: Test your template instantly from the editor.

## <Icon name="Printer" color="info" /> Quick Print

Once a template is saved, it becomes available in the **Quick Print** menu within your router sessions.

