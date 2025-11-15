// Data UMKM Sekitar Kampus Malang
// 3 Data Nyata + 7 Data Dummy = Total 10 Data UMKM

export const umkmData = [
  // === DATA NYATA ===
  {
    id: "umkm-001",
    name: "Adelian's Mom Kitchen",
    slug: "adelians-mom-kitchen",
    category: "Makanan",
    campus: "Universitas Islam Negeri Malang",
    slogan: "MENU MANTAP! MENU HEMAT!",
    description:
      "Menyediakan berbagai menu hemat dan mantap untuk mahasiswa. Cocok untuk santap siang atau makan malam dengan pilihan menu nasi yang beragam. Terima pesanan untuk acara kampus dan kos-kosan.",
    address:
      "Jl. Sunan Kalijaga No.12, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "082141403837",
    openHours: "08:00 - 20:00 WIB",
    location: {
      lat: -7.952048,
      lng: 112.608389,
    },
    images: [
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Nasi Rawon Daging", price: 15000 },
      { name: "Nasi Soto Ayam", price: 10000 },
      { name: "Nasi Ayam Geprek", price: 12000 },
      { name: "Nasi Pecel Lele", price: 13000 },
      { name: "Nasi Ayam Bakar", price: 14000 },
      { name: "Nasi Goreng Spesial", price: 12000 },
      { name: "Nasi Capcay", price: 11000 },
      { name: "Nasi Ayam Katsu", price: 13000 },
    ],
  },
  {
    id: "umkm-002",
    name: "Kantin 'DEA'",
    slug: "kantin-dea",
    category: "Makanan",
    campus: "Universitas Islam Negeri Malang",
    slogan: "Murah, Enak, Kenyang!",
    description:
      "Pilihan menu makanan berat yang beragam dengan harga mahasiswa. Kantin favorit untuk sarapan dan makan siang dengan porsi yang mengenyangkan. Tempat nyaman untuk makan bareng teman-teman.",
    address:
      "Jl. Sunan Kalijaga No.14, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: null,
    openHours: "07:00 - 19:00 WIB",
    location: {
      lat: -7.95215,
      lng: 112.60845,
    },
    images: [
      "https://images.unsplash.com/photo-1603073116719-bf8b7528980f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Nasi Omelet", price: 12000 },
      { name: "Nasi Ayam Katsu", price: 11000 },
      { name: "Nasi Ayam Geprek", price: 11000 },
      { name: "Nasi Telur Dadar", price: 8000 },
      { name: "Nasi Goreng Ayam", price: 10000 },
      { name: "Mie Goreng", price: 9000 },
      { name: "Nasi Tempe Penyet", price: 9000 },
    ],
  },
  {
    id: "umkm-003",
    name: "Maliki Coffee",
    slug: "maliki-coffee",
    category: "Minuman",
    campus: "Universitas Islam Negeri Malang",
    slogan: "Ngopi Santuy, Harga Ramah Kantong",
    description:
      "Tempat ngopi santai dengan berbagai pilihan menu kopi dan non-kopi. Suasana cozy cocok untuk ngerjain tugas atau sekadar nongkrong. WiFi gratis dan colokan listrik tersedia.",
    address:
      "Jl. Sunan Kalijaga No.10, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: null,
    openHours: "10:00 - 23:00 WIB",
    location: {
      lat: -7.95225,
      lng: 112.60855,
    },
    images: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
    ],
    menu: [
      { category: "COFFEE", name: "Kopi Gula Aren", price: 9000 },
      { category: "COFFEE", name: "Kopi Susu Kampus", price: 9000 },
      { category: "COFFEE", name: "Americano", price: 10000 },
      { category: "COFFEE", name: "Cappuccino", price: 12000 },
      { category: "TEA", name: "Peach Tea", price: 6000 },
      { category: "TEA", name: "Lemon Tea", price: 6000 },
      { category: "NON COFFEE", name: "Cokelat Biskuit", price: 7000 },
      { category: "NON COFFEE", name: "Matcha Latte", price: 12000 },
      { category: "SNACK", name: "Kentang Goreng", price: 10000 },
      { category: "SNACK", name: "Pisang Goreng Keju", price: 8000 },
    ],
  },

  // === DATA DUMMY ===
  {
    id: "umkm-004",
    name: "Warung Bu Tini",
    slug: "warung-bu-tini",
    category: "Makanan",
    campus: "Universitas Islam Negeri Malang",
    slogan: "Masakan Rumahan yang Enak",
    description:
      "Warung makan dengan cita rasa masakan rumahan yang lezat. Menu andalan adalah nasi campur dengan lauk beragam. Harga terjangkau dan porsi melimpah untuk mahasiswa lapar.",
    address:
      "Jl. Dinoyo No.45, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "081234567890",
    openHours: "06:00 - 21:00 WIB",
    location: {
      lat: -7.9518,
      lng: 112.6082,
    },
    images: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Nasi Campur", price: 12000 },
      { name: "Nasi Goreng Kampung", price: 10000 },
      { name: "Sayur Asem", price: 5000 },
      { name: "Ayam Goreng Kremes", price: 8000 },
      { name: "Tempe Goreng", price: 3000 },
      { name: "Tahu Goreng", price: 3000 },
    ],
  },
  {
    id: "umkm-005",
    name: "Bakso Mas Kumis",
    slug: "bakso-mas-kumis",
    category: "Makanan",
    campus: "Universitas Islam Negeri Malang",
    slogan: "Bakso Jumbo, Harga Irit!",
    description:
      "Bakso legendaris dengan ukuran jumbo dan kuah kaldu sapi yang gurih. Mie kuningnya lembut dan toppingnya melimpah. Favorit mahasiswa untuk makan siang yang mengenyangkan.",
    address:
      "Jl. Candi Panggung No.23, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "085612345678",
    openHours: "10:00 - 22:00 WIB",
    location: {
      lat: -7.9515,
      lng: 112.609,
    },
    images: [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Bakso Urat", price: 15000 },
      { name: "Bakso Jumbo", price: 18000 },
      { name: "Mie Ayam Bakso", price: 12000 },
      { name: "Bakso Telor", price: 16000 },
      { name: "Bakso Aci", price: 10000 },
      { name: "Es Teh Manis", price: 3000 },
    ],
  },
  {
    id: "umkm-006",
    name: "Kedai Kopi Kampus",
    slug: "kedai-kopi-kampus",
    category: "Minuman",
    campus: "Universitas Islam Negeri Malang",
    slogan: "Tempat Nongkrong Anak Kampus",
    description:
      "Kedai kopi hits dengan interior instagramable dan menu minuman kekinian. Tempat favorit untuk diskusi kelompok, ngerjain tugas, atau sekadar ngobrol santai. Live music setiap weekend.",
    address: "Jl. Tlogomas No.89, Lowokwaru, Kota Malang, Jawa Timur 65144",
    contact: "081998877665",
    openHours: "09:00 - 00:00 WIB",
    location: {
      lat: -7.953,
      lng: 112.6078,
    },
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
    ],
    menu: [
      { category: "SIGNATURE", name: "Es Kopi Susu Gula Aren", price: 15000 },
      { category: "SIGNATURE", name: "Es Kopi Kampus", price: 12000 },
      { category: "HOT COFFEE", name: "Hot Americano", price: 12000 },
      { category: "HOT COFFEE", name: "Cafe Latte", price: 15000 },
      { category: "NON COFFEE", name: "Matcha Latte", price: 16000 },
      { category: "NON COFFEE", name: "Chocolate", price: 14000 },
      { category: "FOOD", name: "Nasi Goreng Kampus", price: 18000 },
      { category: "FOOD", name: "French Fries", price: 12000 },
    ],
  },
  {
    id: "umkm-007",
    name: "Mie Ayam Pak Gendut",
    slug: "mie-ayam-pak-gendut",
    category: "Makanan",
    campus: "Universitas Islam Negeri Malang",
    slogan: "Mie Ayam Legendaris Sejak 2005",
    description:
      "Mie ayam dengan resep turun temurun yang terkenal enak. Toppingan ayam yang banyak dan bumbu kacangnya yang khas membuat pelanggan selalu kembali lagi. Pangsit gorengnya juga recommended!",
    address:
      "Jl. Mayjen Panjaitan No.12, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "082234567891",
    openHours: "08:00 - 20:00 WIB",
    location: {
      lat: -7.9525,
      lng: 112.6089,
    },
    images: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Mie Ayam Komplit", price: 13000 },
      { name: "Mie Ayam Bakso", price: 15000 },
      { name: "Mie Ayam Pangsit", price: 14000 },
      { name: "Mie Ayam Jamur", price: 12000 },
      { name: "Pangsit Goreng", price: 10000 },
      { name: "Bakso Goreng", price: 8000 },
    ],
  },
  {
    id: "umkm-008",
    name: "Sate Taichan Galau",
    slug: "sate-taichan-galau",
    category: "Makanan",
    campus: "Universitas Islam Negeri Malang",
    slogan: "Pedasnya Bikin Lupa Galau!",
    description:
      "Sate taichan dengan bumbu sambal yang mantap dan level kepedasan yang bisa disesuaikan. Dagingnya empuk dan harganya ramah di kantong. Cocok untuk cemilan sore atau makan malam.",
    address:
      "Jl. Gajayana No.67, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: null,
    openHours: "15:00 - 23:00 WIB",
    location: {
      lat: -7.9512,
      lng: 112.6086,
    },
    images: [
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Sate Taichan 10 tusuk", price: 15000 },
      { name: "Sate Taichan 15 tusuk", price: 20000 },
      { name: "Nasi Putih", price: 5000 },
      { name: "Es Teh Manis", price: 4000 },
      { name: "Es Jeruk", price: 5000 },
    ],
  },
  {
    id: "umkm-009",
    name: "Jus Buah Segar Ibu Rina",
    slug: "jus-buah-segar-ibu-rina",
    category: "Minuman",
    campus: "Universitas Islam Negeri Malang",
    slogan: "100% Buah Segar Tanpa Pengawet",
    description:
      "Warung jus dengan buah-buahan segar pilihan. Tidak menggunakan essens atau perasa buatan, semua dari buah asli. Harga terjangkau untuk mahasiswa yang ingin hidup sehat.",
    address:
      "Jl. Sunan Kalijaga No.8, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "081345678901",
    openHours: "08:00 - 20:00 WIB",
    location: {
      lat: -7.95235,
      lng: 112.6081,
    },
    images: [
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Jus Alpukat", price: 10000 },
      { name: "Jus Mangga", price: 8000 },
      { name: "Jus Jeruk", price: 8000 },
      { name: "Jus Stroberi", price: 12000 },
      { name: "Jus Melon", price: 8000 },
      { name: "Jus Jambu", price: 8000 },
      { name: "Jus Mix", price: 12000 },
    ],
  },
  {
    id: "umkm-010",
    name: "Fotocopy & Print 24 Jam",
    slug: "fotocopy-print-24-jam",
    category: "Jasa",
    campus: "Universitas Islam Negeri Malang",
    slogan: "Buka 24 Jam Non-Stop!",
    description:
      "Layanan fotocopy, print, scan, dan jilid yang buka 24 jam untuk membantu mahasiswa dengan tugas dan skripsi mendesak. Harga murah, kualitas bagus, pelayanan ramah. Tersedia juga ATK dan pulsa.",
    address:
      "Jl. Sunan Kalijaga No.16, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "085234567890",
    openHours: "24 Jam",
    location: {
      lat: -7.9521,
      lng: 112.6083,
    },
    images: [
      "https://images.unsplash.com/photo-1586864387634-700ed7b010b7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Fotocopy Hitam Putih", price: 200 },
      { name: "Fotocopy Warna", price: 1000 },
      { name: "Print Hitam Putih", price: 300 },
      { name: "Print Warna", price: 1500 },
      { name: "Scan per lembar", price: 500 },
      { name: "Jilid Soft Cover", price: 5000 },
      { name: "Jilid Hard Cover", price: 15000 },
    ],
  },

  // === DATA UNIVERSITAS BRAWIJAYA ===
  {
    id: "umkm-011",
    name: "Warung Makan Pak Joko",
    slug: "warung-makan-pak-joko",
    category: "Makanan",
    campus: "Universitas Brawijaya",
    slogan: "Nasi Padang Autentik, Harga Mahasiswa",
    description:
      "Warung nasi padang dengan cita rasa autentik Sumatera Barat. Lauk lengkap dari rendang, gulai, hingga sambal balado. Porsi besar dan harga terjangkau untuk mahasiswa UB.",
    address:
      "Jl. Veteran No.45, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
    contact: "081234567891",
    openHours: "10:00 - 21:00 WIB",
    location: {
      lat: -7.9475,
      lng: 112.615,
    },
    images: [
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Nasi Padang Rendang", price: 18000 },
      { name: "Nasi Padang Gulai Ayam", price: 15000 },
      { name: "Nasi Padang Ayam Pop", price: 16000 },
      { name: "Nasi Padang Ikan Balado", price: 14000 },
      { name: "Nasi Padang Telur Balado", price: 12000 },
      { name: "Es Teh Tawar", price: 3000 },
    ],
  },
  {
    id: "umkm-012",
    name: "Kedai Kopi UB",
    slug: "kedai-kopi-ub",
    category: "Minuman",
    campus: "Universitas Brawijaya",
    slogan: "Kopi Kekinian, Tempat Nugas Favorit",
    description:
      "Kedai kopi modern dengan suasana yang nyaman untuk mengerjakan tugas. WiFi cepat, colokan listrik banyak, dan menu kopi kekinian. Tempat favorit mahasiswa UB untuk diskusi dan belajar.",
    address:
      "Jl. Veteran No.123, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
    contact: "082345678901",
    openHours: "07:00 - 23:00 WIB",
    location: {
      lat: -7.948,
      lng: 112.6155,
    },
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&h=400&fit=crop",
    ],
    menu: [
      { category: "SIGNATURE", name: "Es Kopi Susu UB", price: 14000 },
      { category: "SIGNATURE", name: "Es Kopi Gula Aren", price: 13000 },
      { category: "HOT COFFEE", name: "Americano", price: 11000 },
      { category: "HOT COFFEE", name: "Cappuccino", price: 13000 },
      { category: "NON COFFEE", name: "Matcha Latte", price: 15000 },
      { category: "FOOD", name: "Roti Bakar", price: 10000 },
      { category: "FOOD", name: "Nasi Goreng", price: 15000 },
    ],
  },
  {
    id: "umkm-013",
    name: "Bakso Malang Cak Kar",
    slug: "bakso-malang-cak-kar",
    category: "Makanan",
    campus: "Universitas Brawijaya",
    slogan: "Bakso Malang Asli, Porsi Jumbo!",
    description:
      "Bakso Malang dengan kuah kaldu sapi yang gurih dan bakso yang kenyal. Topping lengkap mulai dari siomay, pangsit, tahu, hingga mie kuning. Favorit mahasiswa UB untuk makan siang.",
    address:
      "Jl. MT. Haryono No.78, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
    contact: "083456789012",
    openHours: "09:00 - 22:00 WIB",
    location: {
      lat: -7.949,
      lng: 112.616,
    },
    images: [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Bakso Malang Komplit", price: 20000 },
      { name: "Bakso Malang Jumbo", price: 25000 },
      { name: "Bakso Urat", price: 16000 },
      { name: "Mie Ayam Bakso", price: 13000 },
      { name: "Es Jeruk", price: 5000 },
    ],
  },
  {
    id: "umkm-014",
    name: "Fotocopy & ATK UB",
    slug: "fotocopy-atk-ub",
    category: "Jasa",
    campus: "Universitas Brawijaya",
    slogan: "Lengkap, Murah, Cepat!",
    description:
      "Toko fotocopy dan ATK lengkap di sekitar kampus UB. Melayani print, fotocopy, scan, jilid, dan berbagai kebutuhan ATK mahasiswa. Harga murah dan pelayanan cepat.",
    address:
      "Jl. Veteran No.90, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
    contact: "084567890123",
    openHours: "07:00 - 21:00 WIB",
    location: {
      lat: -7.9478,
      lng: 112.6148,
    },
    images: [
      "https://images.unsplash.com/photo-1586864387634-700ed7b010b7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Fotocopy Hitam Putih", price: 200 },
      { name: "Fotocopy Warna", price: 1000 },
      { name: "Print Hitam Putih", price: 300 },
      { name: "Print Warna", price: 1500 },
      { name: "Jilid Soft Cover", price: 5000 },
      { name: "Jilid Hard Cover", price: 15000 },
    ],
  },

  // === DATA UNIVERSITAS MALANG ===
  {
    id: "umkm-015",
    name: "Warung Nasi Kuning Bu Siti",
    slug: "warung-nasi-kuning-bu-siti",
    category: "Makanan",
    campus: "Universitas Malang",
    slogan: "Sarapan Enak, Harga Pas!",
    description:
      "Warung nasi kuning dengan lauk lengkap untuk sarapan pagi. Cocok untuk mahasiswa UM yang butuh sarapan cepat sebelum kuliah. Harga terjangkau dan rasanya enak.",
    address:
      "Jl. Semarang No.56, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
    contact: "085678901234",
    openHours: "06:00 - 12:00 WIB",
    location: {
      lat: -7.94,
      lng: 112.62,
    },
    images: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Nasi Kuning Komplit", price: 12000 },
      { name: "Nasi Kuning Ayam", price: 10000 },
      { name: "Nasi Kuning Telur", price: 8000 },
      { name: "Nasi Kuning Ati Ampela", price: 11000 },
      { name: "Es Teh Manis", price: 3000 },
    ],
  },
  {
    id: "umkm-016",
    name: "Kedai Kopi UM",
    slug: "kedai-kopi-um",
    category: "Minuman",
    campus: "Universitas Malang",
    slogan: "Ngopi Sambil Nugas, Asik!",
    description:
      "Kedai kopi cozy dengan suasana yang nyaman untuk mengerjakan tugas. Menu kopi dan non-kopi lengkap. WiFi gratis dan tempat yang tenang untuk fokus belajar.",
    address:
      "Jl. Semarang No.88, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
    contact: "086789012345",
    openHours: "08:00 - 22:00 WIB",
    location: {
      lat: -7.941,
      lng: 112.621,
    },
    images: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop",
    ],
    menu: [
      { category: "COFFEE", name: "Kopi Susu UM", price: 12000 },
      { category: "COFFEE", name: "Kopi Gula Aren", price: 11000 },
      { category: "COFFEE", name: "Americano", price: 10000 },
      { category: "TEA", name: "Lemon Tea", price: 7000 },
      { category: "NON COFFEE", name: "Chocolate", price: 13000 },
      { category: "SNACK", name: "Roti Bakar", price: 9000 },
    ],
  },
  {
    id: "umkm-017",
    name: "Mie Ayam Bakso UM",
    slug: "mie-ayam-bakso-um",
    category: "Makanan",
    campus: "Universitas Malang",
    slogan: "Mie Ayam Enak, Porsi Besar!",
    description:
      "Mie ayam dengan topping melimpah dan bakso yang kenyal. Kuah kaldu yang gurih dan pangsit goreng yang renyah. Favorit mahasiswa UM untuk makan siang atau malam.",
    address:
      "Jl. Semarang No.112, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
    contact: "087890123456",
    openHours: "10:00 - 21:00 WIB",
    location: {
      lat: -7.942,
      lng: 112.622,
    },
    images: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Mie Ayam Bakso Komplit", price: 14000 },
      { name: "Mie Ayam Pangsit", price: 13000 },
      { name: "Mie Ayam Jamur", price: 11000 },
      { name: "Bakso Urat", price: 15000 },
      { name: "Pangsit Goreng", price: 9000 },
      { name: "Es Jeruk", price: 5000 },
    ],
  },
  {
    id: "umkm-018",
    name: "Jus Buah Segar UM",
    slug: "jus-buah-segar-um",
    category: "Minuman",
    campus: "Universitas Malang",
    slogan: "Fresh & Healthy, Buah Asli!",
    description:
      "Warung jus dengan buah-buahan segar tanpa pengawet. Pilihan jus lengkap dari alpukat, mangga, jeruk, hingga mix fruit. Cocok untuk mahasiswa yang ingin hidup sehat.",
    address:
      "Jl. Semarang No.45, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145",
    contact: "088901234567",
    openHours: "08:00 - 20:00 WIB",
    location: {
      lat: -7.9405,
      lng: 112.6205,
    },
    images: [
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop",
    ],
    menu: [
      { name: "Jus Alpukat", price: 11000 },
      { name: "Jus Mangga", price: 9000 },
      { name: "Jus Jeruk", price: 8000 },
      { name: "Jus Stroberi", price: 13000 },
      { name: "Jus Mix", price: 13000 },
      { name: "Jus Melon", price: 9000 },
    ],
  },
];

// Helper function untuk mendapatkan UMKM berdasarkan slug
export const getUmkmBySlug = (slug) => {
  return umkmData.find((umkm) => umkm.slug === slug);
};

// Helper function untuk mendapatkan UMKM berdasarkan kategori
export const getUmkmByCategory = (category) => {
  if (category === "Semua") return umkmData;
  return umkmData.filter((umkm) => umkm.category === category);
};

// Helper function untuk mendapatkan semua kategori unik
export const getCategories = () => {
  const categories = ["Semua"];
  umkmData.forEach((umkm) => {
    if (!categories.includes(umkm.category)) {
      categories.push(umkm.category);
    }
  });
  return categories;
};

// Helper function untuk mendapatkan UMKM berdasarkan kampus
export const getUmkmByCampus = (campus) => {
  if (campus === "Semua") return umkmData;
  return umkmData.filter((umkm) => umkm.campus === campus);
};

// Helper function untuk mendapatkan semua kampus unik
export const getCampuses = () => {
  const campuses = ["Semua"];
  umkmData.forEach((umkm) => {
    if (umkm.campus && !campuses.includes(umkm.campus)) {
      campuses.push(umkm.campus);
    }
  });
  return campuses;
};
