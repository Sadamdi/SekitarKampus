# 📤 Panduan Deployment - SekitarKampus

Panduan lengkap untuk melakukan deployment aplikasi SekitarKampus untuk kompetisi WIA 2025.

---

## 🎯 Requirement Deployment WIA 2025

Sesuai dengan ketentuan kompetisi, kamu perlu menyediakan:
1. ✅ **Link/URL Website Siap Pakai** (Hosted)
2. ✅ **Link/URL Repository Publik** (GitHub)
3. ⏳ **Link/URL Video Pitching** (YouTube, max 5 menit)

---

## 🚀 Option 1: Deployment ke Vercel (RECOMMENDED)

Vercel adalah platform hosting gratis yang sangat mudah dan cepat untuk React.

### Langkah-Langkah:

1. **Buat akun Vercel**
   - Kunjungi: https://vercel.com
   - Sign up dengan GitHub account

2. **Install Vercel CLI** (Optional)
   ```bash
   npm install -g vercel
   ```

3. **Deploy via CLI**
   ```bash
   vercel
   ```
   
   Atau **Deploy via Web UI**:
   - Login ke Vercel Dashboard
   - Click "Add New Project"
   - Import repository GitHub kamu
   - Click "Deploy"

4. **Custom Domain** (Optional)
   - Di Vercel Dashboard, buka project settings
   - Tambahkan custom domain jika punya

### ⚡ Kelebihan Vercel:
- ✅ Gratis unlimited untuk personal projects
- ✅ Auto-deploy setiap push ke GitHub
- ✅ HTTPS otomatis
- ✅ Performance optimization built-in

---

## 🔷 Option 2: Deployment ke Netlify

Netlify juga merupakan pilihan populer untuk hosting static sites.

### Langkah-Langkah:

1. **Buat akun Netlify**
   - Kunjungi: https://www.netlify.com
   - Sign up dengan GitHub

2. **Deploy via Drag & Drop**
   ```bash
   # Build project dulu
   npm run build
   ```
   - Drag folder `build` ke Netlify Drop Zone

3. **Deploy via Git** (Recommended)
   - Login ke Netlify
   - "New site from Git"
   - Connect repository GitHub
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

### ⚡ Kelebihan Netlify:
- ✅ Gratis dengan bandwidth 100GB/bulan
- ✅ Forms & Functions support
- ✅ Easy custom domain
- ✅ Preview deployments untuk PR

---

## 🐙 Option 3: GitHub Pages

Untuk hosting gratis langsung dari GitHub repository.

### Setup:

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`**
   
   Tambahkan di bagian atas (setelah name):
   ```json
   "homepage": "https://[username].github.io/[repo-name]",
   ```
   
   Tambahkan di bagian scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Buka repository di GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Save

### ⚠️ Catatan:
- URL akan berbentuk: `https://username.github.io/repo-name`
- Perlu update `BrowserRouter` jadi `HashRouter` atau set `basename` prop

---

## 📋 Checklist Sebelum Deploy

- [ ] Test aplikasi di local (`npm start`)
- [ ] Build berhasil tanpa error (`npm run build`)
- [ ] Semua gambar & assets ter-load dengan benar
- [ ] Fitur responsive di mobile, tablet, desktop
- [ ] Dark mode berfungsi dengan baik
- [ ] Peta interaktif bisa dibuka
- [ ] Chatbot berfungsi dengan baik
- [ ] Tidak ada console errors di browser

---

## 🔍 Testing Production Build

Sebelum deploy, test production build di local:

```bash
# Build project
npm run build

# Install serve (jika belum punya)
npm install -g serve

# Jalankan production build
serve -s build

# Buka: http://localhost:3000
```

---

## 🎬 Video Pitching (Requirement WIA 2025)

### Requirement Video:
- ⏱️ **Durasi:** Maksimal 5 menit
- 📹 **Platform:** YouTube (Public)
- 🎤 **Bahasa:** Indonesia

### Struktur Video yang Disarankan:

1. **Opening (30 detik)**
   - Perkenalan tim
   - Nama proyek

2. **Latar Belakang & Masalah (1 menit)**
   - Masalah yang ingin dipecahkan
   - Tema UMKM x Kampus

3. **Demo Fitur Utama (2.5 menit)**
   - Homepage dengan search & filter
   - Detail UMKM (foto, menu, peta)
   - Peta interaktif multi-pin
   - Fitur favorit
   - Dark mode
   - Chatbot AI

4. **Rencana Pengembangan (30 detik)**
   - Fitur future: Rating & review
   - Integrasi payment gateway
   - Notifikasi promo

5. **Peran Tim & Closing (30 detik)**
   - Sebutkan peran masing-masing anggota
   - Thank you & ajakan

### Tips Rekaman:
- ✅ Screen recording dengan narasi
- ✅ Gunakan OBS Studio (gratis) atau Zoom recording
- ✅ Background musik instrumental (pelan)
- ✅ Subtitle jika perlu
- ✅ Edit dengan CapCut / DaVinci Resolve / OpenShot

---

## 📊 Submission Checklist WIA 2025

Sebelum submit, pastikan semua ready:

- [ ] ✅ **Website sudah di-hosting** dan bisa diakses
- [ ] ✅ **Repository GitHub public** dengan README lengkap
- [ ] ✅ **Video pitching uploaded** ke YouTube (Public)
- [ ] ✅ **Semua fitur wajib** berfungsi dengan baik
- [ ] ✅ **Responsive** di berbagai device
- [ ] ✅ **No major bugs** atau errors
- [ ] ✅ **Performance** loading cepat

---

## 🐛 Troubleshooting

### Issue: Peta tidak muncul setelah deploy

**Solusi:**
- Pastikan CSS Leaflet sudah di-import
- Check console browser untuk errors
- Verifikasi koordinat lat/lng valid

### Issue: Routing 404 di production

**Solusi untuk Netlify:**
- Buat file `public/_redirects`:
  ```
  /*    /index.html   200
  ```

**Solusi untuk Vercel:**
- Buat file `vercel.json`:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/" }
    ]
  }
  ```

### Issue: Images tidak load

**Solusi:**
- Pastikan menggunakan absolute URL untuk external images
- Atau simpan images di folder `public/images/`
- Update path images di `umkm.js`

---

## 📞 Support

Jika ada masalah deployment:
1. Check dokumentasi platform (Vercel/Netlify)
2. Lihat build logs untuk error messages
3. Google error message specific

---

## 🎉 Setelah Deploy

1. **Test website** di berbagai device & browser
2. **Share link** ke teman untuk feedback
3. **Screenshot** untuk dokumentasi
4. **Catat URL** untuk submission WIA 2025

---

**Good luck untuk kompetisi WIA 2025! 🚀**

