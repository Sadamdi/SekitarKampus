import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MapPin,
  Clock,
  Phone,
  ArrowLeft,
  Heart,
  ExternalLink,
  Store,
} from 'lucide-react';
import { getUmkmBySlug } from '../data/umkm';
import { useFavoritesStore } from '../store/useStore';
import { formatPrice } from '../utils/helpers';
import ImageGallery from '../components/ImageGallery';
import MapView from '../components/MapView';

const UMKMDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { toggleFavorite, isFavorite } = useFavoritesStore();

  const umkm = getUmkmBySlug(slug);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [slug]);

  if (!umkm) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          UMKM Tidak Ditemukan
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Maaf, UMKM yang Anda cari tidak ada dalam database kami.
        </p>
        <Link to="/" className="btn-primary">
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const favorite = isFavorite(umkm.id);

  const handleFavoriteClick = () => {
    toggleFavorite(umkm.id);
  };

  // Group menu by category if exists
  const groupedMenu = umkm.menu.reduce((acc, item) => {
    const category = item.category || 'Menu';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

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
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-custom-accent hover:text-yellow-400 transition-colors duration-300 mb-4"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali</span>
            </button>

            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="badge">
                    {umkm.category}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-3">{umkm.name}</h1>
                {umkm.slogan && (
                  <p className="text-xl text-custom-accent italic">"{umkm.slogan}"</p>
                )}
              </div>

              {/* Favorite Button */}
              <button
                onClick={handleFavoriteClick}
                className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
                aria-label="Toggle Favorite"
              >
                <Heart
                  className={`w-7 h-7 ${
                    favorite
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ImageGallery images={umkm.images} name={umkm.name} />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-custom-primary dark:text-custom-accent mb-4">
                Tentang
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {umkm.description}
              </p>
            </motion.div>

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-custom-primary dark:text-custom-accent mb-6">
                Menu & Harga
              </h2>

              <div className="space-y-6">
                {Object.entries(groupedMenu).map(([category, items]) => (
                  <div key={category}>
                    {Object.keys(groupedMenu).length > 1 && (
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 pb-2 border-b border-gray-300 dark:border-gray-700">
                        {category}
                      </h3>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {items.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {item.name}
                          </span>
                          <span className="text-custom-primary dark:text-custom-accent font-bold">
                            {formatPrice(item.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <h2 className="text-2xl font-bold text-custom-primary dark:text-custom-accent mb-4">
                Lokasi
              </h2>
              <MapView
                location={umkm.location}
                name={umkm.name}
                address={umkm.address}
                slug={null}
                zoom={17}
                height="400px"
                showPopup={false}
              />
              <div className="mt-4">
                <a
                  href={`https://www.google.com/maps?q=${umkm.location.lat},${umkm.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center inline-flex items-center justify-center space-x-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Buka di Google Maps</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6 sticky top-24"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-custom-primary dark:bg-custom-accent p-3 rounded-lg">
                  <Store className="w-6 h-6 text-white dark:text-custom-primary" />
                </div>
                <h2 className="text-2xl font-bold text-custom-primary dark:text-custom-accent">
                  Informasi
                </h2>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start space-x-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <MapPin className="w-5 h-5 text-custom-primary dark:text-custom-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      Alamat
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {umkm.address}
                    </p>
                  </div>
                </div>

                {/* Open Hours */}
                <div className="flex items-start space-x-3 pb-4 border-b border-gray-200 dark:border-gray-700">
                  <Clock className="w-5 h-5 text-custom-primary dark:text-custom-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                      Jam Buka
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {umkm.openHours}
                    </p>
                  </div>
                </div>

                {/* Contact */}
                {umkm.contact && (
                  <div className="flex items-start space-x-3 pb-4">
                    <Phone className="w-5 h-5 text-custom-primary dark:text-custom-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        Kontak
                      </h3>
                      <a
                        href={`tel:${umkm.contact}`}
                        className="text-sm text-custom-primary dark:text-custom-accent hover:underline"
                      >
                        {umkm.contact}
                      </a>
                      <div className="mt-2">
                        <a
                          href={`https://wa.me/62${umkm.contact.substring(1)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                        >
                          <span>💬</span>
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UMKMDetail;

