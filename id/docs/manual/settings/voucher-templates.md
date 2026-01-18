# Template Voucher

MIVO memiliki engine template yang mumpuni untuk membuat voucher yang cantik dan siap cetak.

## <Icon name="FileCode" color="primary" /> Kustomisasi Template

Template menggunakan HTML dan placeholder khusus untuk menampilkan data voucher.

### Variabel yang Didukung

| Variabel | Deskripsi |
| :--- | :--- |
| <code v-pre>{{username}}</code> | Username login pengguna |
| <code v-pre>{{password}}</code> | Password login pengguna |
| <code v-pre>{{server_name}}</code> | Nama server hotspot |
| <code v-pre>{{dns_name}}</code> | Nama DNS untuk login (cth: `hotspot.lan`) |
| <code v-pre>{{profile}}</code> | Nama profil/paket pengguna |
| <code v-pre>{{price}}</code> | Harga paket (terformat) |
| <code v-pre>{{validity}}</code> | Durasi masa aktif |
| <code v-pre>{{time_limit}}</code> | Batas waktu sesi |
| <code v-pre>{{data_limit}}</code> | Batas kuota data |
| <code v-pre>{{ip_address}}</code> | Alamat IP pengguna |
| <code v-pre>{{mac_address}}</code> | Alamat MAC pengguna |
| <code v-pre>{{comment}}</code> | Komentar pengguna |
| <code v-pre>{{copyright}}</code> | Teks hak cipta |
| <code v-pre>{{qrcode}}</code> | Menghasilkan kode QR untuk URL login |

> [!TIP]
> Variabel <code v-pre>{{qrcode}}</code> mendukung atribut kustom untuk gaya, contohnya: <code v-pre>{{qrcode size=100 fg=red}}</code>.
- **Preview**: Uji template Anda secara instan dari editor.

## <Icon name="Printer" color="info" /> Cetak Cepat

Setelah template disimpan, template tersebut akan tersedia di menu **Cetak Cepat** (Quick Print) di dalam sesi router Anda.

