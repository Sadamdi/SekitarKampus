# 🏪 SekitarKampus - Direktori Digital UMKM

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.13-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

> Platform direktori digital untuk UMKM di sekitar kampus Malang

Website untuk membantu mahasiswa menemukan tempat makan, minum, dan layanan UMKM di sekitar kampus dengan lebih mudah.

---

## 📋 Daftar Isi

- [✨ Fitur Utama](#-fitur-utama)
- [🛠️ Teknologi yang Digunakan](#️-teknologi-yang-digunakan)
- [🚀 Instalasi & Menjalankan](#-instalasi--menjalankan)
- [📁 Struktur Proyek](#-struktur-proyek)
- [🌐 Deployment](#-deployment)
- [🎨 Design System](#-design-system)
- [📊 Data UMKM](#-data-umkm)
- [🤝 Core Team](#-core-team)
- [📄 Lisensi](#-lisensi)
- [📞 Kontak](#-kontak)

### Kenapa Bikin Ini?

- Banyak warung/kedai bagus tapi ga ketemu karena ga ada online
- Mahasiswa sering bingung cari tempat makan yang deket
- Info menu dan harga seringnya ga jelas
- UMKM kecil butuh bantuan untuk lebih visible

**SekitarKampus** adalah platform direktori digital yang dibuat khusus untuk menampilkan UMKM (Usaha Mikro, Kecil, dan Menengah) yang berada di sekitar lingkungan kampus, khususnya di daerah **Malang, Jawa Timur**.

### Masalah yang Dipecahkan

- 😔 UMKM kecil di sekitar kampus sulit ditemukan secara online
- 🔍 Mahasiswa sering kesulitan mencari tempat makan/minum terdekat
- 💰 Informasi menu dan harga tidak transparan
- 📱 UMKM belum memanfaatkan teknologi digital

### Solusi yang Ditawarkan

- ✅ Platform direktori digital yang mudah diakses
- 🗺️ Fitur peta interaktif untuk menemukan lokasi UMKM
- 📋 Informasi lengkap: menu, harga, jam buka, kontak
- 🔎 Pencarian dan filter untuk kemudahan navigasi

---

## ✨ Fitur Utama

### 🔍 **Fitur**

1. **Halaman Direktori Utama**
   - Grid/List tampilan UMKM
   - Search Bar dengan fuzzy search (Fuse.js)
   - Filter berdasarkan kategori (Makanan, Minuman, Jasa)

2. **Halaman Detail UMKM**
   - Informasi lengkap (nama, deskripsi, alamat, jam buka, kontak)
   - Galeri foto dengan lightbox
   - Daftar menu & harga
   - Peta lokasi interaktif (React-Leaflet) dengan single marker

### 🚀 **Fitur Unggulan**

3. **Peta Interaktif Multi-Pin**
   - Visualisasi semua UMKM dalam satu peta
   - Custom marker berdasarkan kategori
   - Popup interaktif dengan detail & navigasi

4. **UMKM Favorit**
   - Simpan UMKM favorit dengan localStorage
   - Halaman khusus untuk menampilkan favorit
   - Tombol favorit di setiap card UMKM

5. **Rekomendasi Berbasis Lokasi**
   - Deteksi lokasi user dengan Geolocation API
   - Tampilkan UMKM terdekat dari posisi user
   - Perhitungan jarak real-time

6. **Dark Mode**
   - Toggle dark/light mode
   - Preferensi tersimpan di localStorage
   - Transisi smooth antar mode

7. **AI Chatbot Simulasi**
   - Asisten virtual interaktif
   - Quick reply buttons (bukan free text)
   - Rekomendasi UMKM berdasarkan budget & kebutuhan
   - Navigasi otomatis ke halaman detail

8. **Halaman About**
   - Informasi proyek & tim
   - Tech stack yang digunakan
   - Profil kompetisi WIA 2025

---

## 🛠️ Teknologi yang Digunakan

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| **React.js** | 18.3.1 | Framework UI utama |
| **Tailwind CSS** | 3.4.13 | Styling utility-first |
| **React Router DOM** | 6.26.0 | Routing & navigasi SPA |
| **React-Leaflet** | 4.2.1 | Peta interaktif |
| **Leaflet** | 1.9.4 | Library peta open-source |
| **Fuse.js** | 7.0.0 | Fuzzy search algorithm |
| **Framer Motion** | 11.5.0 | Animasi & transisi |
| **Lucide React** | 0.445.0 | Ikon modern & bersih |
| **Zustand** | 4.5.5 | State management ringan |

---

## 🚀 Instalasi & Menjalankan

### Prerequisites

Pastikan sudah terinstall:
- **Node.js** (v16 atau lebih baru)
- **npm** (v8 atau lebih baru)

### Langkah-Langkah

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd Mia
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Jalankan development server**
   ```bash
   npm start
   ```

4. **Buka browser**
   
   Aplikasi akan berjalan di: `http://localhost:3000`

### Commands Lainnya

```bash
# Build untuk production
npm run build

# Run tests
npm test

# Eject configuration (TIDAK DISARANKAN)
npm run eject
```

---

## 📁 Struktur Proyek

```
Mia/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/           # Komponen reusable
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── UMKMCard.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── MapView.jsx
│   │   └── ChatbotButton.jsx
│   ├── pages/                # Halaman utama
│   │   ├── Home.jsx
│   │   ├── UMKMDetail.jsx
│   │   ├── MapPage.jsx
│   │   ├── Favorit.jsx
│   │   └── About.jsx
│   ├── data/                 # Data UMKM
│   │   └── umkm.js
│   ├── store/                # Zustand store
│   │   └── useStore.js
│   ├── utils/                # Helper functions
│   │   └── helpers.js
│   ├── App.js                # Router config
│   ├── index.js              # Entry point
│   └── index.css             # Global styles
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🌐 Deployment

### Rekomendasi Platform Hosting

1. **Vercel** (Recommended)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Drag & drop folder `build` ke Netlify
   - Atau gunakan Netlify CLI

3. **GitHub Pages**
   ```bash
   npm install --save-dev gh-pages
   # Tambahkan scripts di package.json
   npm run deploy
   ```

### Build untuk Production

```bash
npm run build
```

File production akan tersimpan di folder `/build`

---

## 🎨 Design System

### Warna Utama

```css
Primary (Biru Tua):   #1c3f80
Background (Beige):   #f5eee6
Accent (Kuning):      #f5cb3f
Text (Hitam):         #000000
Card (Putih):         #FFFFFF
```

### Font

- **Font Family:** Inter (Google Fonts)
- **Weights:** 300, 400, 500, 600, 700, 800

---

## 📊 Data UMKM

Proyek ini menampilkan **10 data UMKM**:
- **10 Data** (Adelian's Mom Kitchen, Kantin DEA, Maliki Coffee, Dll)

Semua data tersimpan di `src/data/umkm.js` dan dapat dengan mudah diganti/ditambah.

---

## 🤝 Core Team

Tim **SekitarKampus** yang membangun proyek ini:

<table>
<tr>
<td align="center">
<img src="https://github.com/Sadamdi.png" width="100px" alt="Sulthan Adam Rahmadi"/>
<br />
<strong>Sulthan Adam Rahmadi</strong>
<br />
<sub>🚀 <strong>Owner & Lead Developer</strong></sub>
<br />
<sub>
📋 Project Manager<br/>
💻 Frontend Developer<br/>
🎨 UI/UX Implementation<br/>
🏗️ System Architecture<br/>
⚙️ State Management<br/>
</sub>
<br />
<a href="https://github.com/Sadamdi">GitHub</a>
</td>
<td align="center">
<img src="https://github.com/addid-cloud.png" width="100px" alt="Muhammad Alif Mujaddid"/>
<br />
<strong>Muhammad Alif Mujaddid</strong>
<br />
<sub>⚡ <strong>Core Developer</strong></sub>
<br />
<sub>
💻 Frontend Developer<br/>
🧩 Component Development<br/>
🔧 Feature Implementation<br/>
🗺️ Map Integration<br/>
🧪 Testing & QA<br/>
</sub>
<br />
<a href="https://github.com/addid-cloud">GitHub</a>
</td>
<td align="center">
<img src="https://ui-avatars.com/api/?name=K+Q+K&background=f5cb3f&color=1c3f80&size=100" width="100px" alt="Keyshayara Qanita Kamila"/>
<br />
<strong>Keyshayara Qanita Kamila</strong>
<br />
<sub>🎨 <strong>UI/UX Designer</strong></sub>
<br />
<sub>
🎨 Visual Design<br/>
🖼️ Asset Creation<br/>
🎯 Design System<br/>
✨ User Experience<br/>
📐 Layout Design<br/>
</sub>
</td>
</tr>
</table>

Proyek ini dibuat dengan ❤️ untuk **Web In Action (WIA) 2025**

---

## 📄 Lisensi

MIT License - Copyright (c) 2025 Tim SekitarKampus

Lihat file [LICENSE](LICENSE) untuk detail lengkap.

---

## 📞 Kontak

Untuk pertanyaan atau informasi lebih lanjut:
- 📧 Email: sultanadamr@gmail.com
- 🌐 Website: [Link akan ditambahkan setelah hosting]

---

<div align="center">

**Dibuat dengan ❤️ untuk Kompetisi WIA 2025**

*Membantu UMKM Lokal Go Digital*

</div>

