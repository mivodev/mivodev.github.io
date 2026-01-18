# Template Voucher

MIVO memiliki engine template yang mumpuni untuk membuat voucher yang cantik dan siap cetak.

## <Icon name="FileCode" color="primary" /> Kustomisasi Template

Template menggunakan HTML dan placeholder khusus untuk menampilkan data voucher.

### Variabel yang Didukung

| `&#123;&#123;username&#125;&#125;` | Username login pengguna |
| `&#123;&#123;password&#125;&#125;` | Password login pengguna |
| `&#123;&#123;server_name&#125;&#125;` | Nama server hotspot |
| `&#123;&#123;dns_name&#125;&#125;` | Nama DNS untuk login (cth: `hotspot.lan`) |
| `&#123;&#123;profile&#125;&#125;` | Nama profil/paket pengguna |
| `&#123;&#123;price&#125;&#125;` | Harga paket (terformat) |
| `&#123;&#123;validity&#125;&#125;` | Durasi masa aktif |
| `&#123;&#123;time_limit&#125;&#125;` | Batas waktu sesi |
| `&#123;&#123;data_limit&#125;&#125;` | Batas kuota data |
| `&#123;&#123;ip_address&#125;&#125;` | Alamat IP pengguna |
| `&#123;&#123;mac_address&#125;&#125;` | Alamat MAC pengguna |
| `&#123;&#123;comment&#125;&#125;` | Komentar pengguna |
| `&#123;&#123;copyright&#125;&#125;` | Teks hak cipta |
| `&#123;&#123;qrcode&#125;&#125;` | Menghasilkan kode QR untuk URL login |

> [!TIP]
> Variabel `&#123;&#123;qrcode&#125;&#125;` mendukung atribut kustom untuk gaya, contohnya: `&#123;&#123;qrcode size=100 fg=red&#125;&#125;`.
- **Preview**: Uji template Anda secara instan dari editor.

## <Icon name="Printer" color="info" /> Cetak Cepat

Setelah template disimpan, template tersebut akan tersedia di menu **Cetak Cepat** (Quick Print) di dalam sesi router Anda.

