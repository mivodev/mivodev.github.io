# Voucher Templates

MIVO features a powerful template engine to create beautiful, printable vouchers.

## <Icon name="FileCode" color="primary" /> Customizing Templates

Templates use HTML and specialized placeholders to display voucher data.

### Supported Variables

| Variable | Description |
| :--- | :--- |
| <code v-pre>{{username}}</code> | User's login username |
| <code v-pre>{{password}}</code> | User's login password |
| <code v-pre>{{server_name}}</code> | Hotspot server name |
| <code v-pre>{{dns_name}}</code> | DNS name for login (e.g., `hotspot.lan`) |
| <code v-pre>{{profile}}</code> | User profile/package name |
| <code v-pre>{{price}}</code> | Plan price (formatted) |
| <code v-pre>{{validity}}</code> | Validity duration |
| <code v-pre>{{time_limit}}</code> | Time limit session |
| <code v-pre>{{data_limit}}</code> | Data quota limit |
| <code v-pre>{{ip_address}}</code> | User's IP address |
| <code v-pre>{{mac_address}}</code> | User's MAC address |
| <code v-pre>{{comment}}</code> | User comment |
| <code v-pre>{{copyright}}</code> | Copyright text |
| <code v-pre>{{qrcode}}</code> | Generates a QR Code for login URL |

> [!TIP]
> The <code v-pre>{{qrcode}}</code> variable supports custom attributes for styling, for example: <code v-pre>{{qrcode size=100 fg=red}}</code>.
- **Preview**: Test your template instantly from the editor.

## <Icon name="Printer" color="info" /> Quick Print

Once a template is saved, it becomes available in the **Quick Print** menu within your router sessions.

