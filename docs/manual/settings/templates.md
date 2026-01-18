# Voucher Templates

MIVO features a powerful template engine to create beautiful, printable vouchers.

## <Icon name="FileCode" color="primary" /> Customizing Templates

Templates use HTML and specialized placeholders to display voucher data.

- **Variables**:
  - **Credentials**: `\{\{username\}\}`, `\{\{password\}\}`
  - **Server**: `\{\{server_name\}\}`, `\{\{dns_name\}\}`
  - **Plan**: `\{\{profile\}\}`, `\{\{price\}\}`, `\{\{validity\}\}`, `\{\{time_limit\}\}`, `\{\{data_limit\}\}`
  - **Network**: `\{\{ip_address\}\}`, `\{\{mac_address\}\}`
  - **Extras**: `\{\{comment\}\}`, `\{\{copyright\}\}`, `\{\{qrcode\}\}` (supports options like `size=100 fg=red`)
- **Preview**: Test your template instantly from the editor.

## <Icon name="Printer" color="info" /> Quick Print

Once a template is saved, it becomes available in the **Quick Print** menu within your router sessions.

