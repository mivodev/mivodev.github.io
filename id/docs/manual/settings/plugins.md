# Manajemen Plugin

Mivo v1.2+ memperkenalkan **Sistem Plugin** yang memungkinkan Anda menambah fitur aplikasi tanpa perlu mengubah kode inti.

## Cara Install Plugin

### Metode 1: Upload ZIP
Jika Anda memiliki file plugin (format `.zip`), Anda bisa menginstalnya secara manual:

1. Buka menu **Pengaturan > Plugins**.
2. Klik tombol **Upload Plugin**.
3. Pilih file `.zip` plugin Anda.
4. Mivo akan memverifikasi struktur file (`plugin.php`) dan menginstalnya.

### Metode 2: Lewat Registry
Anda bisa menjelajahi [Registry Resmi](/id/plugins/) untuk mencari plugin yang terverifikasi:

1. Cari plugin yang diinginkan di menu **Plugins**.
2. Klik **Download** untuk mendapatkan file ZIP.
3. Upload file tersebut di **Pengaturan > Plugins**.

*(Update mendatang akan memungkinkan instalasi satu-klik langsung dari dashboard)*

## Mengelola Plugin

Di halaman **Pengaturan > Plugins**, Anda bisa melihat daftar ekstensi yang terpasang.

- **Status**: Menunjukkan apakah plugin aktif.
- **Aksi**:
  - **Konfigurasi**: Beberapa plugin menyediakan halaman pengaturan khusus.
  - **Hapus**: Menghapus plugin dan filenya secara permanen.

## Membuat Plugin
Pengembang (Developer) dapat membuat plugin kustom untuk fitur seperti tema hotspot baru, gateway pembayaran, atau tool sistem. Cek [Panduan Kontribusi](https://github.com/dyzulk/mivo/blob/main/CONTRIBUTING.md) untuk detailnya.
