# Template Voucher

MIVO memiliki engine template yang mumpuni untuk membuat voucher yang cantik dan siap cetak.

## <Icon name="FileCode" color="primary" /> Kustomisasi Template

Template menggunakan HTML dan placeholder khusus untuk menampilkan data voucher.

### Variabel yang Didukung

| Variabel | Deskripsi |
| :--- | :--- |
| `\{\{username\}\}` | Username login pengguna |
| `\{\{password\}\}` | Password login pengguna |
| `\{\{server_name\}\}` | Nama server hotspot |
| `\{\{dns_name\}\}` | Nama DNS untuk login (cth: `hotspot.lan`) |
| `\{\{profile\}\}` | Nama profil/paket pengguna |
| `\{\{price\}\}` | Harga paket (terformat) |
| `\{\{validity\}\}` | Durasi masa aktif |
| `\{\{time_limit\}\}` | Batas waktu sesi |
| `\{\{data_limit\}\}` | Batas kuota data |
| `\{\{ip_address\}\}` | Alamat IP pengguna |
| `\{\{mac_address\}\}` | Alamat MAC pengguna |
| `\{\{comment\}\}` | Komentar pengguna |
| `\{\{copyright\}\}` | Teks hak cipta |
| `\{\{qrcode\}\}` | Menghasilkan kode QR untuk URL login |

> [!TIP]
> Variabel `\{\{qrcode\}\}` mendukung atribut kustom untuk gaya, contohnya: `\{\{qrcode size=100 fg=red\}\}`.
- **Preview**: Uji template Anda secara instan dari editor.

## <Icon name="Printer" color="info" /> Cetak Cepat

Setelah template disimpan, template tersebut akan tersedia di menu **Cetak Cepat** (Quick Print) di dalam sesi router Anda.

