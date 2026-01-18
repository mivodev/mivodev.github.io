# Panduan Pengembangan Plugin

Mivo mendukung sistem plugin modular yang memungkinkan pengembang memperluas fungsionalitas, menambahkan tema, atau mengintegrasikan layanan pihak ketiga. Panduan ini menjelaskan aturan dan struktur yang diperlukan agar plugin Anda berjalan di Mivo dan muncul di Registry.

## Struktur Direktori

Plugin Mivo yang valid harus memiliki struktur datar dengan file `plugin.php` di root.

```text
plugin-name/
├── plugin.php          # (Wajib) Entry point & Metadata
├── composer.json       # (Opsional) Dependensi
├── README.md           # (Wajib) Dokumentasi untuk Registry
├── theme/              # (Opsional) File tema Captive Portal
│   └── styles.css
└── src/                # (Opsional) Class PHP
```

## Header Metadata

File `plugin.php` Anda **wajib** dimulai dengan blok komentar khusus. Crawler Registry menggunakan data ini untuk mengategorikan plugin Anda.

```php
<?php
/**
 * Plugin Name: My Awesome Plugin
 * Description: Menambahkan fitur mode gelap ke halaman login hotspot.
 * Version: 1.0.0
 * Author: NamaAnda
 * Category: Hotspot Tools
 * Tags: theme, dark-mode, ui
 * Core Version: >=1.2.0
 */

use App\Services\Hook;

// Logika plugin dimulai di sini...
```

### Kolom Wajib
- **Plugin Name**: Nama yang ditampilkan.
- **Description**: Ringkasan pendek (maks 160 karakter).
- **Version**: Format SemVer (contoh: `1.0.0`).
- **Category**: Salah satu dari: `Hotspot Tools`, `System Tools`, `Payment Gateway`, `Reports`.
- **Tags**: Kata kunci pencarian (dipisahkan koma).

## Aturan Rilis & Registry

Agar plugin Anda terdaftar di [Registry Resmi](/id/plugins/):

1.  **Repository Publik**: Simpan kode Anda di GitHub.
2.  **Penamaan**: Nama repo sebaiknya diawali dengan `plugin-` (contoh: `plugin-advanced-login`).
3.  **Versioning**: Gunakan **Git Tags** untuk rilis. Registry memprioritaskan rilis bertag daripada main branch.
    -   Format tag: `v1.0.0`.
    -   Gunakan GitHub Actions untuk membuat ZIP otomatis.
4.  **Dokumentasi**: File `README.md` wajib ada. Isinya akan di-mirror ke website Mivo.

## Contoh GitHub Workflow

Buat file `.github/workflows/release.yml` untuk memaketkan plugin otomatis:

```yaml
name: Release Plugin
on:
  push:
    tags: ['v*']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: zip -r plugin.zip . -x "*.git*"
      - uses: softprops/action-gh-release@v1
        with:
          files: plugin.zip
```
