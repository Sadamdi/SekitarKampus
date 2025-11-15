// Data UMKM Sekitar Kampus Malang
// 3 Data Nyata + 7 Data Dummy = Total 10 Data UMKM

export const umkmData = [
	// === DATA NYATA ===
	{
		id: 'umkm-001',
		name: "Adelian's Mom Kitchen",
		slug: 'adelians-mom-kitchen',
		category: 'Makanan',
		campus: 'Universitas Islam Negeri Malang',
		slogan: 'MENU MANTAP! MENU HEMAT!',
		description:
			'Menyediakan berbagai menu hemat dan mantap untuk mahasiswa. Cocok untuk santap siang atau makan malam dengan pilihan menu nasi yang beragam. Terima pesanan untuk acara kampus dan kos-kosan.',
		address:
			'Jl. Sunan Kalijaga No.12, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149',
		contact: '082141403837',
		openHours: '08:00 - 20:00 WIB',
		location: {
			lat: -7.952048,
			lng: 112.608389,
		},
		images: [
			'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop',
			'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&h=400&fit=crop',
			'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&h=400&fit=crop',
		],
		menu: [
			{ name: 'Nasi Rawon Daging', price: 15000 },
			{ name: 'Nasi Soto Ayam', price: 10000 },
			{ name: 'Nasi Ayam Geprek', price: 12000 },
			{ name: 'Nasi Pecel Lele', price: 13000 },
			{ name: 'Nasi Ayam Bakar', price: 14000 },
			{ name: 'Nasi Goreng Spesial', price: 12000 },
			{ name: 'Nasi Capcay', price: 11000 },
			{ name: 'Nasi Ayam Katsu', price: 13000 },
		],
	},
	{
		id: 'umkm-002',
		name: "Kantin 'DEA'",
		slug: 'kantin-dea',
		category: 'Makanan',
		campus: 'Universitas Islam Negeri Malang',
		slogan: 'Murah, Enak, Kenyang!',
		description:
			'Pilihan menu makanan berat yang beragam dengan harga mahasiswa. Kantin favorit untuk sarapan dan makan siang dengan porsi yang mengenyangkan. Tempat nyaman untuk makan bareng teman-teman.',
		address:
			'Jl. Sunan Kalijaga No.14, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149',
		contact: null,
		openHours: '07:00 - 19:00 WIB',
		location: {
			lat: -7.95215,
			lng: 112.60845,
		},
		images: [
			'https://himatif-encoder.com/uploads/articles/6887dc20d3389babf29a84cc/1763221435137_IMG_20251105_WA0029._f9a6dcbb3ff175a9.webp',
		],
		menu: [
			{ name: 'Nasi Omelet', price: 12000 },
			{ name: 'Nasi Ayam Katsu', price: 11000 },
			{ name: 'Nasi Ayam Geprek', price: 11000 },
			{ name: 'Nasi Telur Dadar', price: 8000 },
			{ name: 'Nasi Goreng Ayam', price: 10000 },
			{ name: 'Mie Goreng', price: 9000 },
			{ name: 'Nasi Tempe Penyet', price: 9000 },
		],
	},
	{
		id: 'umkm-003',
		name: 'Maliki Coffee',
		slug: 'maliki-coffee',
		category: 'Minuman',
		campus: 'Universitas Islam Negeri Malang',
		slogan: 'Ngopi Santuy, Harga Ramah Kantong',
		description:
			'Tempat ngopi santai dengan berbagai pilihan menu kopi dan non-kopi. Suasana cozy cocok untuk ngerjain tugas atau sekadar nongkrong. WiFi gratis dan colokan listrik tersedia.',
		address:
			'Jl. Sunan Kalijaga No.10, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149',
		contact: null,
		openHours: '10:00 - 23:00 WIB',
		location: {
			lat: -7.95225,
			lng: 112.60855,
		},
		images: [
			'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop',
			'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop',
		],
		menu: [
			{ category: 'COFFEE', name: 'Kopi Gula Aren', price: 9000 },
			{ category: 'COFFEE', name: 'Kopi Susu Kampus', price: 9000 },
			{ category: 'COFFEE', name: 'Americano', price: 10000 },
			{ category: 'COFFEE', name: 'Cappuccino', price: 12000 },
			{ category: 'TEA', name: 'Peach Tea', price: 6000 },
			{ category: 'TEA', name: 'Lemon Tea', price: 6000 },
			{ category: 'NON COFFEE', name: 'Cokelat Biskuit', price: 7000 },
			{ category: 'NON COFFEE', name: 'Matcha Latte', price: 12000 },
			{ category: 'SNACK', name: 'Kentang Goreng', price: 10000 },
			{ category: 'SNACK', name: 'Pisang Goreng Keju', price: 8000 },
		],
	},

	// === DATA DUMMY ===
	{
		id: 'umkm-004',
		name: 'Warung Bu Tini',
		slug: 'warung-bu-tini',
		category: 'Makanan',
		campus: 'Universitas Islam Negeri Malang',
		slogan: 'Masakan Rumahan yang Enak',
		description:
			'Warung makan dengan cita rasa masakan rumahan yang lezat. Menu andalan adalah nasi campur dengan lauk beragam. Harga terjangkau dan porsi melimpah untuk mahasiswa lapar.',
		address:
			'Jl. Dinoyo No.45, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149',
		contact: '081234567890',
		openHours: '06:00 - 21:00 WIB',
		location: {
			lat: -7.9518,
			lng: 112.6082,
		},
		images: [
			'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop',
			'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&h=400&fit=crop',
		],
		menu: [
			{ name: 'Nasi Campur', price: 12000 },
			{ name: 'Nasi Goreng Kampung', price: 10000 },
			{ name: 'Sayur Asem', price: 5000 },
			{ name: 'Ayam Goreng Kremes', price: 8000 },
			{ name: 'Tempe Goreng', price: 3000 },
			{ name: 'Tahu Goreng', price: 3000 },
		],
	},
	{
		id: 'umkm-005',
		name: 'Mie Ayam & Bakso Solo Mas Pandu',
		slug: 'mie-ayam-bakso-solo-mas-pandu',
		category: 'Makanan',
		campus: 'Universitas Islam Negeri Malang',
		slogan: 'Cita Rasa Solo yang Autentik!',
		description:
			'Mie ayam dan bakso dengan resep khas Solo yang legendaris. Kuah kaldu sapi yang gurih, mie yang kenyal, dan bakso yang empuk. Topping melimpah dengan harga yang ramah di kantong mahasiswa. Favorit untuk makan siang dan malam.',
		address:
			'Jl. Gajayana No.47, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144',
		contact: '083848220201',
		openHours: '10:00 - 22:00 WIB',
		location: {
			lat: -7.951350328570226,
			lng: 112.60908390381043,
		},
		images: [
			'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSyZF6yL-GOYGRnbw1abwU2kIJ36m3C8lzg2c7Kj98E7wwN4oCi7lfezSOiIK4mQcdexl1y0ryUEXn_Da0HcffcKLxxi-JM6H1X8ggjDpoq2zTaE-HZellp-Zyepwj3MVT_x53sC=s1031-k-no',
			'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=600&h=400&fit=crop',
		],
		menu: [
			{ name: 'Mie Ayam Komplit', price: 13000 },
			{ name: 'Mie Ayam Bakso', price: 14000 },
			{ name: 'Bakso Solo', price: 12000 },
			{ name: 'Bakso Urat', price: 15000 },
			{ name: 'Bakso Jumbo', price: 18000 },
			{ name: 'Pangsit Goreng', price: 10000 },
			{ name: 'Es Teh Manis', price: 3000 },
		],
	},
	{
		id: 'umkm-006',
		name: 'Kedai Kopi Kampus',
		slug: 'kedai-kopi-kampus',
		category: 'Minuman',
		campus: 'Universitas Islam Negeri Malang',
		slogan: 'Tempat Nongkrong Anak Kampus',
		description:
			'Kedai kopi hits dengan interior instagramable dan menu minuman kekinian. Tempat favorit untuk diskusi kelompok, ngerjain tugas, atau sekadar ngobrol santai. Live music setiap weekend.',
		address: 'Jl. Tlogomas No.89, Lowokwaru, Kota Malang, Jawa Timur 65144',
		contact: '081998877665',
		openHours: '09:00 - 00:00 WIB',
		location: {
			lat: -7.953,
			lng: 112.6078,
		},
		images: [
			'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop',
			'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
		],
		menu: [
			{ category: 'SIGNATURE', name: 'Es Kopi Susu Gula Aren', price: 15000 },
			{ category: 'SIGNATURE', name: 'Es Kopi Kampus', price: 12000 },
			{ category: 'HOT COFFEE', name: 'Hot Americano', price: 12000 },
			{ category: 'HOT COFFEE', name: 'Cafe Latte', price: 15000 },
			{ category: 'NON COFFEE', name: 'Matcha Latte', price: 16000 },
			{ category: 'NON COFFEE', name: 'Chocolate', price: 14000 },
			{ category: 'FOOD', name: 'Nasi Goreng Kampus', price: 18000 },
			{ category: 'FOOD', name: 'French Fries', price: 12000 },
		],
	},
	{
		id: 'umkm-007',
		name: 'Mie Ayam Pak Gendut',
		slug: 'mie-ayam-pak-gendut',
		category: 'Makanan',
		campus: 'Universitas Islam Negeri Malang',
		slogan: 'Mie Ayam Legendaris Sejak 2005',
		description:
			'Mie ayam dengan resep turun temurun yang terkenal enak. Toppingan ayam yang banyak dan bumbu kacangnya yang khas membuat pelanggan selalu kembali lagi. Pangsit gorengnya juga recommended!',
		address:
			'Jl. Mayjen Panjaitan No.12, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149',
		contact: '082234567891',
		openHours: '08:00 - 20:00 WIB',
		location: {
			lat: -7.9525,
			lng: 112.6089,
		},
		images: [
			'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop',
			'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&h=400&fit=crop',
		],
		menu: [
			{ name: 'Mie Ayam Komplit', price: 13000 },
			{ name: 'Mie Ayam Bakso', price: 15000 },
			{ name: 'Mie Ayam Pangsit', price: 14000 },
			{ name: 'Mie Ayam Jamur', price: 12000 },
			{ name: 'Pangsit Goreng', price: 10000 },
			{ name: 'Bakso Goreng', price: 8000 },
		],
	},
	{
		id: 'umkm-008',
		name: 'Sate Taichan Galau',
		slug: 'sate-taichan-galau',
		category: 'Makanan',
		campus: 'Universitas Islam Negeri Malang',
		slogan: 'Pedasnya Bikin Lupa Galau!',
		description:
			'Sate taichan dengan bumbu sambal yang mantap dan level kepedasan yang bisa disesuaikan. Dagingnya empuk dan harganya ramah di kantong. Cocok untuk cemilan sore atau makan malam.',
		address:
			'Jl. Gajayana No.67, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149',
		contact: null,
		openHours: '15:00 - 23:00 WIB',
		location: {
			lat: -7.9512,
			lng: 112.6086,
		},
		images: [
			'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&h=400&fit=crop',
			'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
		],
		menu: [
			{ name: 'Sate Taichan 10 tusuk', price: 15000 },
			{ name: 'Sate Taichan 15 tusuk', price: 20000 },
			{ name: 'Nasi Putih', price: 5000 },
			{ name: 'Es Teh Manis', price: 4000 },
			{ name: 'Es Jeruk', price: 5000 },
		],
	},
	{
		id: 'umkm-009',
		name: 'Jus Buah Segar Ibu Rina',
		slug: 'jus-buah-segar-ibu-rina',
		category: 'Minuman',
		campus: 'Universitas Islam Negeri Malang',
		slogan: '100% Buah Segar Tanpa Pengawet',
		description:
			'Warung jus dengan buah-buahan segar pilihan. Tidak menggunakan essens atau perasa buatan, semua dari buah asli. Harga terjangkau untuk mahasiswa yang ingin hidup sehat.',
		address:
			'Jl. Sunan Kalijaga No.8, Dinoyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65149',
		contact: '081345678901',
		openHours: '08:00 - 20:00 WIB',
		location: {
			lat: -7.95235,
			lng: 112.6081,
		},
		images: [
			'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=400&fit=crop',
			'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&h=400&fit=crop',
		],
		menu: [
			{ name: 'Jus Alpukat', price: 10000 },
			{ name: 'Jus Mangga', price: 8000 },
			{ name: 'Jus Jeruk', price: 8000 },
			{ name: 'Jus Stroberi', price: 12000 },
			{ name: 'Jus Melon', price: 8000 },
			{ name: 'Jus Jambu', price: 8000 },
			{ name: 'Jus Mix', price: 12000 },
		],
	},
	{
		id: 'umkm-010',
		name: 'PRINT 24 JAM FOTOCOPY VIAN CAB UIN',
		slug: 'print-24-jam-fotocopy-vian-cab-uin',
		category: 'Jasa',
		campus: 'Universitas Islam Negeri Malang',
		slogan: 'Buka 24 Jam Non-Stop!',
		description:
			'Layanan fotocopy, print, scan, dan jilid yang buka 24 jam untuk membantu mahasiswa dengan tugas dan skripsi mendesak. Harga murah, kualitas bagus, pelayanan ramah. Tersedia juga ATK dan pulsa. Lokasi strategis di dekat kampus UIN Malang.',
		address:
			'Jl. Gajayana No.37, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144',
		contact: '081818389336',
		openHours: '24 Jam',
		location: {
			lat: -7.951143439724272,
			lng: 112.60908429758325,
		},
		images: [
			'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxaz7fyhIB6mft1-ju4tgGTTkWEAk9qultkCVXcopBJpNbLLIjl8n_4krmdeFiH7QPeIt_wcvsy1sxUa_y0HA2COU7BPBgKpNt4-0xg_9o4poBWyxzoCwVu-BJjSa4Ek_i0K1jl=w600-h400-no',
			'https://lh3.googleusercontent.com/p/AF1QipOxKCHcpoVfSx2xvdVrK3_KSCH30HzF_GVFVnMj=w600-h400-no',
			'https://lh3.googleusercontent.com/p/AF1QipNsjmNHNOPTrQRdZRorVmYLHSujbHF1Efwy3V-4=w203-h360-k-no',
		],
		menu: [
			{ name: 'Fotocopy Hitam Putih', price: 200 },
			{ name: 'Fotocopy Warna', price: 1000 },
			{ name: 'Print Hitam Putih', price: 300 },
			{ name: 'Print Warna', price: 1500 },
			{ name: 'Scan per lembar', price: 500 },
			{ name: 'Jilid Soft Cover', price: 5000 },
			{ name: 'Jilid Hard Cover', price: 15000 },
		],
	},

	// === DATA UNIVERSITAS BRAWIJAYA ===
	{
		id: 'umkm-011',
		name: 'Kantin Akademik Halalan Thoyyiban',
		slug: 'kantin-akademik-halalan-thoyyiban',
		category: 'Makanan',
		campus: 'Universitas Brawijaya',
		slogan: 'Nasi Padang Autentik, Harga Mahasiswa',
		description:
			'Warung nasi padang dengan cita rasa autentik Sumatera Barat. Lauk lengkap dari rendang, gulai, hingga sambal balado. Porsi besar dan harga terjangkau untuk mahasiswa UB.',
		address:
			'Jl. Veteran No.45, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145',
		contact: '081234567891',
		openHours: '10:00 - 21:00 WIB',
		location: {
			lat: -7.9475,
			lng: 112.615,
		},
		images: [
			'https://lh3.googleusercontent.com/p/AF1QipOvGrS519H4inCHkRM3xI145DD5eCDRDB91gDSo=w408-h271-k-no',
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXmky_otbQy89o48kyEH_rS9v5e2zkHmq2A&s',
		],
		menu: [
			{ name: 'Nasi Padang Rendang', price: 18000 },
			{ name: 'Nasi Padang Gulai Ayam', price: 15000 },
			{ name: 'Nasi Padang Ayam Pop', price: 16000 },
			{ name: 'Nasi Padang Ikan Balado', price: 14000 },
			{ name: 'Nasi Padang Telur Balado', price: 12000 },
			{ name: 'Es Teh Tawar', price: 3000 },
		],
	},
	{
		id: 'umkm-013',
		name: 'Bakso Sayur UB',
		slug: 'bakso-sayur-ub',
		category: 'Makanan',
		campus: 'Universitas Brawijaya',
		slogan: 'Bakso Malang Asli, Porsi Jumbo!',
		description:
			'Bakso Malang dengan kuah kaldu sapi yang gurih dan bakso yang kenyal. Topping lengkap mulai dari siomay, pangsit, tahu, hingga mie kuning. Favorit mahasiswa UB untuk makan siang.',
		address:
			' Jl. Raya Sumbersari, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145',
		contact: '0851-7442-3135',
		openHours: '09:00 - 22:00 WIB',
		location: {
			lat: -7.9526558603339135,
			lng: 112.60972975428591,
		},
		images: [
			'https://lh3.googleusercontent.com/p/AF1QipMIJa6fHiv7sSovdRhaKRLcyGUUTHURQV8XtIg=s1360-w1360-h1020-rw',
		],
		menu: [
			{ name: 'Bakso Malang Komplit', price: 20000 },
			{ name: 'Bakso Malang Jumbo', price: 25000 },
			{ name: 'Bakso Urat', price: 16000 },
			{ name: 'Mie Ayam Bakso', price: 13000 },
			{ name: 'Es Jeruk', price: 5000 },
		],
	},
	{
		id: 'umkm-014',
		name: 'Fotocopy & ATK UB',
		slug: 'fotocopy-atk-ub',
		category: 'Jasa',
		campus: 'Universitas Brawijaya',
		slogan: 'Lengkap, Murah, Cepat!',
		description:
			'Toko fotocopy dan ATK lengkap di sekitar kampus UB. Melayani print, fotocopy, scan, jilid, dan berbagai kebutuhan ATK mahasiswa. Harga murah dan pelayanan cepat.',
		address:
			'Jl. Raya Sumbersari No.290b, Ketawanggede, Kec. Lowokwaru, Kota Malang, Jawa Timur 68121',
		contact: '0815-5008-749',
		openHours: '07:00 - 21:00 WIB',
		location: {
			lat: -7.955342112715529,
			lng: 112.61176949596369,
		},
		images: [
			'https://lh3.googleusercontent.com/gps-proxy/ALd4DhEq30f1I-QRXZ9GkgKdWeVSQdBv_tIuklEVIiq84U2Hv0L8cQdgc-jLc4y66jxqKnhWgbQKnYCVcfvrBTd5_xp4oEaL0cYqfhCbfyoKvLaYGrCMKM22gEgkCPpbZNLMsOZvsBoAS-uVsbj2edhcMyqNGSFOG9Pm_iQvw6pztQdlkpdPtel5-hQnQHWMa0xHIazamwo=w408-h306-k-no',
			'https://lh3.googleusercontent.com/gps-proxy/ALd4DhEq30f1I-QRXZ9GkgKdWeVSQdBv_tIuklEVIiq84U2Hv0L8cQdgc-jLc4y66jxqKnhWgbQKnYCVcfvrBTd5_xp4oEaL0cYqfhCbfyoKvLaYGrCMKM22gEgkCPpbZNLMsOZvsBoAS-uVsbj2edhcMyqNGSFOG9Pm_iQvw6pztQdlkpdPtel5-hQnQHWMa0xHIazamwo=w408-h306-k-n',
		],
		menu: [
			{ name: 'Fotocopy Hitam Putih', price: 200 },
			{ name: 'Fotocopy Warna', price: 1000 },
			{ name: 'Print Hitam Putih', price: 300 },
			{ name: 'Print Warna', price: 1500 },
			{ name: 'Jilid Soft Cover', price: 5000 },
			{ name: 'Jilid Hard Cover', price: 15000 },
		],
	},

	// === DATA UNIVERSITAS MALANG ===
	{
		id: 'umkm-015',
		name: 'Nasi Kuning & Krawu Gobyos',
		slug: 'nasi-kuning-krawu-gobyos',
		category: 'Makanan',
		campus: 'Universitas Malang',
		slogan: 'Sarapan Enak, Harga Pas!',
		description:
			'Warung nasi kuning dengan lauk lengkap untuk sarapan pagi. Cocok untuk mahasiswa UM yang butuh sarapan cepat sebelum kuliah. Harga terjangkau dan rasanya enak.',
		address:
			'Jl. Semarang No.56, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145',
		contact: '085678901234',
		openHours: '06:00 - 12:00 WIB',
		location: {
			lat: -7.94,
			lng: 112.62,
		},
		images: [
			'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/b829af3a-5dc9-4f10-9ff8-261aca166749_c6af3c22-2c4e-49e7-9bf9-38f84e79f141_Go-Resto_20180612_015503.jpg?auto=format',
			'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwTqb7a0abhiFvb7MbScI_yH7CJMA9wWO6dFTo5OmYX1iJMeVwKInv8-J2vgCpStR8f0xY0q9C9MkBa8TL9l9TdBOn55TJSsQVtIprvUiKBMRYd-Fbm2_9vI7ooTsTQrlsfF9g=w408-h306-k-no',
		],
		menu: [
			{ name: 'Nasi Kuning Komplit', price: 12000 },
			{ name: 'Nasi Kuning Ayam', price: 10000 },
			{ name: 'Nasi Kuning Telur', price: 8000 },
			{ name: 'Nasi Kuning Ati Ampela', price: 11000 },
			{ name: 'Es Teh Manis', price: 3000 },
		],
	},
	{
		id: 'umkm-016',
		name: 'Mbah No Coffee Eks. Pujas UM',
		slug: 'mbah-no-coffe-eks-pujas-um',
		category: 'Minuman',
		campus: 'Universitas Malang',
		slogan: 'Ngopi Sambil Nugas, Asik!',
		description:
			'Kedai kopi cozy dengan suasana yang nyaman untuk mengerjakan tugas. Menu kopi dan non-kopi lengkap. WiFi gratis dan tempat yang tenang untuk fokus belajar.',
		address:
			'Jl. Semarang No.88, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145',
		contact: '081233654118',
		openHours: '08:00 - 22:00 WIB',
		location: {
			lat: -7.974755898748864,
			lng: 112.61803815581878,
		},
		images: [
			'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwU8nB_8LXgClx2FU3nzI5zsqePutmCjzHACkFjmD9onJOD7Q10QjLRY8fKslphtRHC9fi-csJNneqNDTK5CoDQt2r9IvrGkpbGuTb2NpCjXetPjTaOchB_KDK41rC5_zNOkSs51g=w408-h725-k-no',
			'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSxSb9fXTVm1etoTm69qVB7UPlpVM1jiFFa3fJnDtUM2HBp-TLwjX8aDefie4I5X8WAx2kmlPzht9cU3iZJNzl3f3J8Cjd8eEWPHSd8OQf9EV7a8va94Lup5SfPKPaD1i_Bkd2_1=w140-h140-p-k-no',
		],
		menu: [
			{ category: 'COFFEE', name: 'Kopi Susu UM', price: 12000 },
			{ category: 'COFFEE', name: 'Kopi Gula Aren', price: 11000 },
			{ category: 'COFFEE', name: 'Americano', price: 10000 },
			{ category: 'TEA', name: 'Lemon Tea', price: 7000 },
			{ category: 'NON COFFEE', name: 'Chocolate', price: 13000 },
			{ category: 'SNACK', name: 'Roti Bakar', price: 9000 },
		],
	},
	{
		id: 'umkm-017',
		name: 'Mie Ayam & Bakso Solo Pak Mbloh',
		slug: 'mie-ayam-bakso-solo-pak-mbloh',
		category: 'Makanan',
		campus: 'Universitas Malang',
		slogan: 'Mie Ayam Enak, Porsi Besar!',
		description:
			'Mie ayam dengan topping melimpah dan bakso yang kenyal. Kuah kaldu yang gurih dan pangsit goreng yang renyah. Favorit mahasiswa UM untuk makan siang atau malam.',
		address:
			'Jl. Semarang No.112, Sumbersari, Kec. Lowokwaru, Kota Malang, Jawa Timur 65145',
		contact: '087890123456',
		openHours: '10:00 - 21:00 WIB',
		location: {
			lat: -7.958732285398843,
			lng: 112.62236881966932,
		},
		images: [
			'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSzbkVxanh80PIkWr25qOC8X5cvqX-23KmxTkKg0baEKgtIZqgVlgUPywa41pF1eIlMf7l8dvtIY0UzJP53nARXvsJMIlh8XPnKDT4vHvEiA0rdux9wdXFApF2DSpwcSQoNTf8ws=w408-h544-k-no',
			'https://lh3.googleusercontent.com/gps-cs-s/AG0ilSz_i1nXRq5_dQUPB1CYKU9VPBw3EKpHRBisJShN82ay-TCJIOrPJMdwSvMavxNsmXvro8AK96MFboxNvyJe7-X5UnVVjQy4ItGd6F8OyJ4iS4AEJTNDdYa3mIfyeXnv1Da-GRcs=w140-h140-p-k-no',
		],
		menu: [
			{ name: 'Mie Ayam Bakso Komplit', price: 14000 },
			{ name: 'Mie Ayam Pangsit', price: 13000 },
			{ name: 'Mie Ayam Jamur', price: 11000 },
			{ name: 'Bakso Urat', price: 15000 },
			{ name: 'Pangsit Goreng', price: 9000 },
			{ name: 'Es Jeruk', price: 5000 },
		],
	},
];

// Helper function untuk mendapatkan UMKM berdasarkan slug
export const getUmkmBySlug = (slug) => {
	return umkmData.find((umkm) => umkm.slug === slug);
};

// Helper function untuk mendapatkan UMKM berdasarkan kategori
export const getUmkmByCategory = (category) => {
	if (category === 'Semua') return umkmData;
	return umkmData.filter((umkm) => umkm.category === category);
};

// Helper function untuk mendapatkan semua kategori unik
export const getCategories = () => {
	const categories = ['Semua'];
	umkmData.forEach((umkm) => {
		if (!categories.includes(umkm.category)) {
			categories.push(umkm.category);
		}
	});
	return categories;
};

// Helper function untuk mendapatkan UMKM berdasarkan kampus
export const getUmkmByCampus = (campus) => {
	if (campus === 'Semua') return umkmData;
	return umkmData.filter((umkm) => umkm.campus === campus);
};

// Helper function untuk mendapatkan semua kampus unik
export const getCampuses = () => {
	const campuses = ['Semua'];
	umkmData.forEach((umkm) => {
		if (umkm.campus && !campuses.includes(umkm.campus)) {
			campuses.push(umkm.campus);
		}
	});
	return campuses;
};
