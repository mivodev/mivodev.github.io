# Template Voucher

MIVO memiliki engine template yang mumpuni untuk membuat voucher yang cantik dan siap cetak.

## <Icon name="FileCode" color="primary" /> Kustomisasi Template

Template menggunakan HTML dan placeholder khusus untuk menampilkan data voucher.

- **Variabel**:
  - **Kredensial**: `\{\{username\}\}`, `\{\{password\}\}`
  - **Server**: `\{\{server_name\}\}`, `\{\{dns_name\}\}`
  - **Paket**: `\{\{profile\}\}`, `\{\{price\}\}`, `\{\{validity\}\}`, `\{\{time_limit\}\}`, `\{\{data_limit\}\}`
  - **Jaringan**: `\{\{ip_address\}\}`, `\{\{mac_address\}\}`
  - **Ekstra**: `\{\{comment\}\}`, `\{\{copyright\}\}`, `\{\{qrcode\}\}` (mendukung opsi seperti `size=100 fg=red`)
- **Preview**: Uji template Anda secara instan dari editor.

## <Icon name="Printer" color="info" /> Cetak Cepat

Setelah template disimpan, template tersebut akan tersedia di menu **Cetak Cepat** (Quick Print) di dalam sesi router Anda.

