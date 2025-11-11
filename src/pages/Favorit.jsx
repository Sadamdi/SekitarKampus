import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Frown } from 'lucide-react';
import { useFavoritesStore } from '../store/useStore';
import { umkmData } from '../data/umkm';
import UMKMCard from '../components/UMKMCard';

const Favorit = () => {
  const { favorites } = useFavoritesStore();

  // Filter UMKM berdasarkan favorites ID
  const favoriteUmkm = umkmData.filter(umkm => favorites.includes(umkm.id));

  return (
    <div className="min-h-screen bg-custom-bg dark:bg-gray-900">
      {/* Header */}
      <div className="bg-custom-primary dark:bg-gray-800 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-3">
              <Heart className="w-8 h-8 text-red-500 fill-red-500" />
              <h1 className="text-4xl md:text-5xl font-bold">UMKM Favorit</h1>
            </div>
            <p className="text-gray-200 dark:text-gray-400">
              Koleksi UMKM yang telah kamu simpan sebagai favorit
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {favoriteUmkm.length === 0 ? (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-20"
          >
            <div className="card max-w-lg mx-auto p-12">
              <Frown className="w-20 h-20 text-gray-400 dark:text-gray-600 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Belum Ada Favorit
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Kamu belum menambahkan UMKM favorit. Mulai jelajahi dan tambahkan UMKM yang kamu suka!
              </p>
              <Link to="/" className="btn-primary">
                Jelajahi UMKM
              </Link>
            </div>
          </motion.div>
        ) : (
          /* Favorites Grid */
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold text-custom-primary dark:text-custom-accent">
                Total: {favoriteUmkm.length} UMKM Favorit
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {favoriteUmkm.map((umkm, index) => (
                <motion.div
                  key={umkm.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <UMKMCard umkm={umkm} />
                </motion.div>
              ))}
            </motion.div>

            {/* Tips Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 bg-gradient-to-r from-custom-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">💡 Tips</h3>
              <ul className="space-y-2 text-gray-200 dark:text-gray-300">
                <li>• Klik ikon ❤️ pada kartu UMKM untuk menambah/menghapus dari favorit</li>
                <li>• Daftar favorit tersimpan di browser kamu secara otomatis</li>
                <li>• Gunakan fitur favorit untuk menyimpan UMKM yang ingin kamu kunjungi nanti</li>
              </ul>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorit;

