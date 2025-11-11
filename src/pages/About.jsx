import React from 'react';
import { motion } from 'framer-motion';
import { Info, Target, Users, Code } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Pencarian & Filter',
      description: 'Fitur pencarian fuzzy dan filter kategori untuk menemukan UMKM dengan mudah',
    },
    {
      icon: '🗺️',
      title: 'Peta Interaktif',
      description: 'Visualisasi lokasi semua UMKM dalam peta interaktif dengan multi-pin markers',
    },
    {
      icon: '❤️',
      title: 'Favorit',
      description: 'Simpan UMKM favorit kamu dengan localStorage untuk akses cepat',
    },
    {
      icon: '📍',
      title: 'Lokasi Terdekat',
      description: 'Rekomendasi UMKM berdasarkan jarak dari lokasi kamu saat ini',
    },
    {
      icon: '🌙',
      title: 'Dark Mode',
      description: 'Mode gelap yang nyaman untuk mata dengan toggle yang mudah',
    },
    {
      icon: '🤖',
      title: 'AI Chatbot',
      description: 'Asisten virtual untuk membantu rekomendasi UMKM sesuai kebutuhan',
    },
  ];

  const techStack = [
    { name: 'React.js', icon: '⚛️', description: 'Framework UI modern' },
    { name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS' },
    { name: 'React Router', icon: '🔗', description: 'Navigasi SPA' },
    { name: 'React Leaflet', icon: '🗺️', description: 'Peta interaktif' },
    { name: 'Fuse.js', icon: '🔍', description: 'Fuzzy search' },
    { name: 'Framer Motion', icon: '✨', description: 'Animasi smooth' },
    { name: 'Zustand', icon: '📦', description: 'State management' },
    { name: 'Lucide React', icon: '🎯', description: 'Ikon modern' },
  ];

  return (
    <div className="min-h-screen bg-custom-bg dark:bg-gray-900">
      {/* Header */}
      <div className="bg-custom-primary dark:bg-gray-800 text-white py-12 shadow-lg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Info className="w-10 h-10 text-custom-accent" />
              <h1 className="text-4xl md:text-5xl font-bold">Tentang Kami</h1>
            </div>
            <p className="text-xl text-gray-200 dark:text-gray-400 max-w-2xl mx-auto">
              Mengenal lebih dekat proyek SekitarKampus
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-8 mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Target className="w-8 h-8 text-custom-primary dark:text-custom-accent" />
            <h2 className="text-3xl font-bold text-custom-primary dark:text-custom-accent">
              Tentang Proyek
            </h2>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              <strong className="text-custom-primary dark:text-custom-accent">SekitarKampus</strong> adalah platform direktori digital yang dibuat khusus untuk menampilkan UMKM (Usaha Mikro, Kecil, dan Menengah) yang berada di sekitar lingkungan kampus, khususnya di daerah Malang, Jawa Timur.
            </p>
            <p>
              Proyek ini dikembangkan untuk mengikuti kompetisi <strong>Web In Action (WIA) 2025</strong> dengan studi kasus <em>"Bikin Keren UMKM Lokal: Membuat Direktori Digital Lingkungan Sekitar"</em>, dengan fokus tema <strong>"UMKM x Kampus"</strong>.
            </p>
            <p>
              Target audiens utama kami adalah mahasiswa, dosen, dan staf kampus yang ingin menemukan tempat makan, minum, dan layanan UMKM terbaik di sekitar kampus dengan mudah dan cepat.
            </p>
          </div>
        </motion.div>

        {/* Problem & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="card p-6 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20">
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">😔 Masalah</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• UMKM kecil di sekitar kampus sulit ditemukan secara online</li>
              <li>• Mahasiswa sering kesulitan mencari tempat makan/minum terdekat</li>
              <li>• Informasi menu dan harga tidak transparan</li>
              <li>• UMKM belum memanfaatkan teknologi digital</li>
            </ul>
          </div>

          <div className="card p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">✅ Solusi</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Platform direktori digital yang mudah diakses</li>
              <li>• Fitur peta interaktif untuk menemukan lokasi UMKM</li>
              <li>• Informasi lengkap: menu, harga, jam buka, kontak</li>
              <li>• Pencarian dan filter untuk kemudahan navigasi</li>
            </ul>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-custom-primary dark:text-custom-accent mb-8 text-center">
            ✨ Fitur Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="card p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-custom-primary dark:text-custom-accent mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="card p-8 mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Code className="w-8 h-8 text-custom-primary dark:text-custom-accent" />
            <h2 className="text-3xl font-bold text-custom-primary dark:text-custom-accent">
              Teknologi yang Digunakan
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <h4 className="font-bold text-custom-primary dark:text-custom-accent mb-1">
                  {tech.name}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="card p-8 mb-12"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Users className="w-8 h-8 text-custom-primary dark:text-custom-accent" />
            <h2 className="text-3xl font-bold text-custom-primary dark:text-custom-accent">
              Core Team
            </h2>
          </div>
          <div className="text-center mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              Tim mahasiswa yang bersemangat membangun platform untuk membantu UMKM lokal go digital.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sulthan Adam Rahmadi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-gradient-to-br from-custom-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-6 text-center"
            >
              <img
                src="https://github.com/Sadamdi.png"
                alt="Sulthan Adam Rahmadi"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-custom-accent"
              />
              <h3 className="text-xl font-bold mb-1">Sulthan Adam Rahmadi</h3>
              <p className="text-custom-accent font-semibold mb-3">🚀 Owner & Lead Developer</p>
              <div className="text-sm text-gray-200 dark:text-gray-300 space-y-1 mb-4">
                <p>📋 Project Manager</p>
                <p>💻 Frontend Developer</p>
                <p>🎨 UI/UX Implementation</p>
                <p>🏗️ System Architecture</p>
                <p>⚙️ State Management</p>
              </div>
              <a
                href="https://github.com/Sadamdi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-custom-accent text-custom-primary px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
              >
                GitHub Profile
              </a>
            </motion.div>

            {/* Muhammad Alif Mujaddid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-gradient-to-br from-custom-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-6 text-center"
            >
              <img
                src="https://github.com/addid-cloud.png"
                alt="Muhammad Alif Mujaddid"
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-custom-accent"
              />
              <h3 className="text-xl font-bold mb-1">Muhammad Alif Mujaddid</h3>
              <p className="text-custom-accent font-semibold mb-3">⚡ Core Developer</p>
              <div className="text-sm text-gray-200 dark:text-gray-300 space-y-1 mb-4">
                <p>💻 Frontend Developer</p>
                <p>🧩 Component Development</p>
                <p>🔧 Feature Implementation</p>
                <p>🗺️ Map Integration</p>
                <p>🧪 Testing & QA</p>
              </div>
              <a
                href="https://github.com/addid-cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-custom-accent text-custom-primary px-4 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-300"
              >
                GitHub Profile
              </a>
            </motion.div>

            {/* Keyshayara Qanita Kamila */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-gradient-to-br from-custom-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-6 text-center"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-custom-accent bg-custom-accent flex items-center justify-center">
                <span className="text-4xl font-bold text-custom-primary">KQK</span>
              </div>
              <h3 className="text-xl font-bold mb-1">Keyshayara Qanita Kamila</h3>
              <p className="text-custom-accent font-semibold mb-3">🎨 UI/UX Designer</p>
              <div className="text-sm text-gray-200 dark:text-gray-300 space-y-1 mb-4">
                <p>🎨 Visual Design</p>
                <p>🖼️ Asset Creation</p>
                <p>🎯 Design System</p>
                <p>✨ User Experience</p>
                <p>📐 Layout Design</p>
              </div>
              <div className="inline-block bg-custom-accent/50 text-white px-4 py-2 rounded-lg font-semibold">
                Designer
              </div>
            </motion.div>
          </div>

          {/* Team Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              <strong>Tim SekitarKampus</strong> - Mahasiswa Malang
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Dibuat dengan ❤️ untuk Web In Action (WIA) 2025
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

