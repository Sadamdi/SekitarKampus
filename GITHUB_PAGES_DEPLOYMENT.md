# 🚀 Panduan Deploy ke GitHub Pages

## Prasyarat
- Repository sudah ada di GitHub
- Node.js dan npm sudah terinstall
- Git sudah terinstall dan terkonfigurasi

## Langkah-langkah Deploy

### 1. Install Dependencies
Pertama, install package `gh-pages`:
```bash
npm install
```

### 2. Penting: Hapus/Pindahkan index.html di Root
**SANGAT PENTING!** Sebelum deploy, Anda harus menghapus atau memindahkan file `index.html` yang ada di root folder (bukan yang di folder `public`):

```bash
# Opsi 1: Hapus file (recommended untuk GitHub Pages)
rm index.html

# Opsi 2: Pindahkan ke folder lain jika masih ingin simpan
mkdir landing-backup
move index.html landing-backup/
```

**Kenapa harus dihapus?**
- File `index.html` di root akan konflik dengan hasil build React
- GitHub Pages akan menggunakan `index.html` dari hasil build yang ada di folder `build/`
- File ini hanya untuk landing page sementara yang tidak diperlukan di production

### 3. Deploy ke GitHub Pages
Jalankan perintah deploy:
```bash
npm run deploy
```

Perintah ini akan:
1. Otomatis build aplikasi React (`npm run build`)
2. Deploy hasil build ke branch `gh-pages`
3. Push ke GitHub

### 4. Aktifkan GitHub Pages di Repository
1. Buka repository di GitHub
2. Masuk ke **Settings** → **Pages**
3. Pilih **Source**: `Deploy from a branch`
4. Pilih **Branch**: `gh-pages` → folder `/ (root)`
5. Klik **Save**

### 5. Tunggu Deployment Selesai
- Biasanya membutuhkan 1-5 menit
- Cek status di tab **Actions** di repository
- Setelah selesai, aplikasi akan tersedia di: `https://sadamdi.github.io/SekitarKampus`

## Troubleshooting

### ❌ Halaman Tidak Muncul / Blank
**Penyebab**: File `index.html` di root tidak dihapus
**Solusi**: Hapus `index.html` di root, lalu deploy ulang

### ❌ Error 404 Saat Routing
**Sudah diperbaiki!** Konfigurasi SPA routing sudah ditambahkan:
- File `public/404.html` untuk redirect
- Script di `public/index.html` untuk handle URL
- `basename` di Router untuk path yang benar

### ❌ CSS/Assets Tidak Muncul
**Sudah diperbaiki!** `homepage` di `package.json` sudah dikonfigurasi dengan benar

### ❌ Error Permission Denied
Jika muncul error permission saat deploy:
```bash
git remote set-url origin https://github.com/Sadamdi/SekitarKampus.git
npm run deploy
```

## Update Aplikasi

Setiap kali ada perubahan code:
```bash
# 1. Commit perubahan ke branch main
git add .
git commit -m "Update aplikasi"
git push origin main

# 2. Deploy ke GitHub Pages
npm run deploy
```

## Catatan Penting

### Perbedaan dengan Vercel
- **Vercel**: Otomatis detect dan deploy, support file `index.html` di root untuk landing page
- **GitHub Pages**: Manual deploy, harus hapus `index.html` di root karena konflik dengan build output

### Rekomendasi
Jika ingin tetap pakai landing page terpisah:
1. **Gunakan Vercel** (sudah dikonfigurasi di `vercel.json`)
2. Atau buat repository terpisah untuk landing page

### File yang Sudah Dikonfigurasi
✅ `package.json` - ditambahkan:
  - `homepage` field
  - `gh-pages` dependency
  - `predeploy` dan `deploy` scripts

✅ `src/App.js` - ditambahkan:
  - `basename={process.env.PUBLIC_URL}` di Router

✅ `public/404.html` - dibuat:
  - Handle SPA routing untuk GitHub Pages

✅ `public/index.html` - ditambahkan:
  - Script untuk handle redirect dari 404.html

## Link Penting
- 📦 Repository: https://github.com/Sadamdi/SekitarKampus
- 🌐 GitHub Pages: https://sadamdi.github.io/SekitarKampus
- 📚 Dokumentasi: https://github.com/Sadamdi/SekitarKampus/blob/main/README.md

## Support
Jika ada masalah, buka issue di repository atau hubungi tim developer.

