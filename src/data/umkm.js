// Data UMKM Sekitar Kampus Malang
// 3 Data Nyata + 7 Data Dummy = Total 10 Data UMKM

export const umkmData = [
  // === DATA NYATA ===
  {
    id: "umkm-001",
    name: "Adelian's Mom Kitchen",
    slug: "adelians-mom-kitchen",
    category: "Makanan",
    slogan: "MENU MANTAP! MENU HEMAT!",
    description: "Menyediakan berbagai menu hemat dan mantap untuk mahasiswa. Cocok untuk santap siang atau makan malam dengan pilihan menu nasi yang beragam. Terima pesanan untuk acara kampus dan kos-kosan.",
    address: "Jl. Sunan Kalijaga No.12, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "082141403837",
    openHours: "08:00 - 20:00 WIB",
    location: {
      lat: -7.952048,
      lng: 112.608389
    },
    images: [
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop"
    ],
    menu: [
      { name: "Nasi Rawon Daging", price: 15000 },
      { name: "Nasi Soto Ayam", price: 10000 },
      { name: "Nasi Ayam Geprek", price: 12000 },
      { name: "Nasi Pecel Lele", price: 13000 },
      { name: "Nasi Ayam Bakar", price: 14000 },
      { name: "Nasi Goreng Spesial", price: 12000 },
      { name: "Nasi Capcay", price: 11000 },
      { name: "Nasi Ayam Katsu", price: 13000 }
    ]
  },
  {
    id: "umkm-002",
    name: "Kantin 'DEA'",
    slug: "kantin-dea",
    category: "Makanan",
    slogan: "Murah, Enak, Kenyang!",
    description: "Pilihan menu makanan berat yang beragam dengan harga mahasiswa. Kantin favorit untuk sarapan dan makan siang dengan porsi yang mengenyangkan. Tempat nyaman untuk makan bareng teman-teman.",
    address: "Jl. Sunan Kalijaga No.14, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: null,
    openHours: "07:00 - 19:00 WIB",
    location: {
      lat: -7.952150,
      lng: 112.608450
    },
    images: [
      "https://images.unsplash.com/photo-1603073116719-bf8b7528980f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop"
    ],
    menu: [
      { name: "Nasi Omelet", price: 12000 },
      { name: "Nasi Ayam Katsu", price: 11000 },
      { name: "Nasi Ayam Geprek", price: 11000 },
      { name: "Nasi Telur Dadar", price: 8000 },
      { name: "Nasi Goreng Ayam", price: 10000 },
      { name: "Mie Goreng", price: 9000 },
      { name: "Nasi Tempe Penyet", price: 9000 }
    ]
  },
  {
    id: "umkm-003",
    name: "Maliki Coffee",
    slug: "maliki-coffee",
    category: "Minuman",
    slogan: "Ngopi Santuy, Harga Ramah Kantong",
    description: "Tempat ngopi santai dengan berbagai pilihan menu kopi dan non-kopi. Suasana cozy cocok untuk ngerjain tugas atau sekadar nongkrong. WiFi gratis dan colokan listrik tersedia.",
    address: "Jl. Sunan Kalijaga No.10, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: null,
    openHours: "10:00 - 23:00 WIB",
    location: {
      lat: -7.952250,
      lng: 112.608550
    },
    images: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop"
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
      { category: "SNACK", name: "Pisang Goreng Keju", price: 8000 }
    ]
  },

  // === DATA DUMMY ===
  {
    id: "umkm-004",
    name: "Warung Bu Tini",
    slug: "warung-bu-tini",
    category: "Makanan",
    slogan: "Masakan Rumahan yang Enak",
    description: "Warung makan dengan cita rasa masakan rumahan yang lezat. Menu andalan adalah nasi campur dengan lauk beragam. Harga terjangkau dan porsi melimpah untuk mahasiswa lapar.",
    address: "Jl. Dinoyo No.45, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "081234567890",
    openHours: "06:00 - 21:00 WIB",
    location: {
      lat: -7.951800,
      lng: 112.608200
    },
    images: [
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&h=400&fit=crop"
    ],
    menu: [
      { name: "Nasi Campur", price: 12000 },
      { name: "Nasi Goreng Kampung", price: 10000 },
      { name: "Sayur Asem", price: 5000 },
      { name: "Ayam Goreng Kremes", price: 8000 },
      { name: "Tempe Goreng", price: 3000 },
      { name: "Tahu Goreng", price: 3000 }
    ]
  },
  {
    id: "umkm-005",
    name: "Bakso Mas Kumis",
    slug: "bakso-mas-kumis",
    category: "Makanan",
    slogan: "Bakso Jumbo, Harga Irit!",
    description: "Bakso legendaris dengan ukuran jumbo dan kuah kaldu sapi yang gurih. Mie kuningnya lembut dan toppingnya melimpah. Favorit mahasiswa untuk makan siang yang mengenyangkan.",
    address: "Jl. Candi Panggung No.23, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "085612345678",
    openHours: "10:00 - 22:00 WIB",
    location: {
      lat: -7.951500,
      lng: 112.609000
    },
    images: [
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&h=400&fit=crop"
    ],
    menu: [
      { name: "Bakso Urat", price: 15000 },
      { name: "Bakso Jumbo", price: 18000 },
      { name: "Mie Ayam Bakso", price: 12000 },
      { name: "Bakso Telor", price: 16000 },
      { name: "Bakso Aci", price: 10000 },
      { name: "Es Teh Manis", price: 3000 }
    ]
  },
  {
    id: "umkm-006",
    name: "Kedai Kopi Kampus",
    slug: "kedai-kopi-kampus",
    category: "Minuman",
    slogan: "Tempat Nongkrong Anak Kampus",
    description: "Kedai kopi hits dengan interior instagramable dan menu minuman kekinian. Tempat favorit untuk diskusi kelompok, ngerjain tugas, atau sekadar ngobrol santai. Live music setiap weekend.",
    address: "Jl. Tlogomas No.89, Lowokwaru, Kota Malang, Jawa Timur 65144",
    contact: "081998877665",
    openHours: "09:00 - 00:00 WIB",
    location: {
      lat: -7.953000,
      lng: 112.607800
    },
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
    ],
    menu: [
      { category: "SIGNATURE", name: "Es Kopi Susu Gula Aren", price: 15000 },
      { category: "SIGNATURE", name: "Es Kopi Kampus", price: 12000 },
      { category: "HOT COFFEE", name: "Hot Americano", price: 12000 },
      { category: "HOT COFFEE", name: "Cafe Latte", price: 15000 },
      { category: "NON COFFEE", name: "Matcha Latte", price: 16000 },
      { category: "NON COFFEE", name: "Chocolate", price: 14000 },
      { category: "FOOD", name: "Nasi Goreng Kampus", price: 18000 },
      { category: "FOOD", name: "French Fries", price: 12000 }
    ]
  },
  {
    id: "umkm-007",
    name: "Mie Ayam Pak Gendut",
    slug: "mie-ayam-pak-gendut",
    category: "Makanan",
    slogan: "Mie Ayam Legendaris Sejak 2005",
    description: "Mie ayam dengan resep turun temurun yang terkenal enak. Toppingan ayam yang banyak dan bumbu kacangnya yang khas membuat pelanggan selalu kembali lagi. Pangsit gorengnya juga recommended!",
    address: "Jl. Mayjen Panjaitan No.12, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "082234567891",
    openHours: "08:00 - 20:00 WIB",
    location: {
      lat: -7.952500,
      lng: 112.608900
    },
    images: [
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&h=400&fit=crop"
    ],
    menu: [
      { name: "Mie Ayam Komplit", price: 13000 },
      { name: "Mie Ayam Bakso", price: 15000 },
      { name: "Mie Ayam Pangsit", price: 14000 },
      { name: "Mie Ayam Jamur", price: 12000 },
      { name: "Pangsit Goreng", price: 10000 },
      { name: "Bakso Goreng", price: 8000 }
    ]
  },
  {
    id: "umkm-008",
    name: "Sate Taichan Galau",
    slug: "sate-taichan-galau",
    category: "Makanan",
    slogan: "Pedasnya Bikin Lupa Galau!",
    description: "Sate taichan dengan bumbu sambal yang mantap dan level kepedasan yang bisa disesuaikan. Dagingnya empuk dan harganya ramah di kantong. Cocok untuk cemilan sore atau makan malam.",
    address: "Jl. Gajayana No.67, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: null,
    openHours: "15:00 - 23:00 WIB",
    location: {
      lat: -7.951200,
      lng: 112.608600
    },
    images: [
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop"
    ],
    menu: [
      { name: "Sate Taichan 10 tusuk", price: 15000 },
      { name: "Sate Taichan 15 tusuk", price: 20000 },
      { name: "Nasi Putih", price: 5000 },
      { name: "Es Teh Manis", price: 4000 },
      { name: "Es Jeruk", price: 5000 }
    ]
  },
  {
    id: "umkm-009",
    name: "Jus Buah Segar Ibu Rina",
    slug: "jus-buah-segar-ibu-rina",
    category: "Minuman",
    slogan: "100% Buah Segar Tanpa Pengawet",
    description: "Warung jus dengan buah-buahan segar pilihan. Tidak menggunakan essens atau perasa buatan, semua dari buah asli. Harga terjangkau untuk mahasiswa yang ingin hidup sehat.",
    address: "Jl. Sunan Kalijaga No.8, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "081345678901",
    openHours: "08:00 - 20:00 WIB",
    location: {
      lat: -7.952350,
      lng: 112.608100
    },
    images: [
      "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop"
    ],
    menu: [
      { name: "Jus Alpukat", price: 10000 },
      { name: "Jus Mangga", price: 8000 },
      { name: "Jus Jeruk", price: 8000 },
      { name: "Jus Stroberi", price: 12000 },
      { name: "Jus Melon", price: 8000 },
      { name: "Jus Jambu", price: 8000 },
      { name: "Jus Mix", price: 12000 }
    ]
  },
  {
    id: "umkm-010",
    name: "Fotocopy & Print 24 Jam",
    slug: "fotocopy-print-24-jam",
    category: "Jasa",
    slogan: "Buka 24 Jam Non-Stop!",
    description: "Layanan fotocopy, print, scan, dan jilid yang buka 24 jam untuk membantu mahasiswa dengan tugas dan skripsi mendesak. Harga murah, kualitas bagus, pelayanan ramah. Tersedia juga ATK dan pulsa.",
    address: "Jl. Sunan Kalijaga No.16, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149",
    contact: "085234567890",
    openHours: "24 Jam",
    location: {
      lat: -7.952100,
      lng: 112.608300
    },
    images: [
      "https://images.unsplash.com/photo-1586864387634-700ed7b010b7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=600&h=400&fit=crop"
    ],
    menu: [
      { name: "Fotocopy Hitam Putih", price: 200 },
      { name: "Fotocopy Warna", price: 1000 },
      { name: "Print Hitam Putih", price: 300 },
      { name: "Print Warna", price: 1500 },
      { name: "Scan per lembar", price: 500 },
      { name: "Jilid Soft Cover", price: 5000 },
      { name: "Jilid Hard Cover", price: 15000 }
    ]
  }
];

// Helper function untuk mendapatkan UMKM berdasarkan slug
export const getUmkmBySlug = (slug) => {
  return umkmData.find(umkm => umkm.slug === slug);
};

// Helper function untuk mendapatkan UMKM berdasarkan kategori
export const getUmkmByCategory = (category) => {
  if (category === 'Semua') return umkmData;
  return umkmData.filter(umkm => umkm.category === category);
};

// Helper function untuk mendapatkan semua kategori unik
export const getCategories = () => {
  const categories = ['Semua'];
  umkmData.forEach(umkm => {
    if (!categories.includes(umkm.category)) {
      categories.push(umkm.category);
    }
  });
  return categories;
};

