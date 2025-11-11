import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useFavoritesStore } from '../store/useStore';
import { formatDistance } from '../utils/helpers';

const UMKMCard = ({ umkm, showDistance = false }) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(umkm.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(umkm.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="card group"
    >
      <Link to={`/umkm/${umkm.slug}`} className="block">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={umkm.images[0]}
            alt={umkm.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-10"
            aria-label="Toggle Favorite"
          >
            <Heart
              className={`w-5 h-5 ${
                favorite
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-600 dark:text-gray-300'
              }`}
            />
          </button>
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="badge">
              {umkm.category}
            </span>
          </div>
          {/* Distance Badge (if available) */}
          {showDistance && umkm.distance !== undefined && (
            <div className="absolute bottom-3 left-3">
              <span className="bg-custom-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                📍 {formatDistance(umkm.distance)}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Name & Slogan */}
          <h3 className="text-xl font-bold text-custom-primary dark:text-custom-accent mb-1 line-clamp-1">
            {umkm.name}
          </h3>
          {umkm.slogan && (
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-3">
              "{umkm.slogan}"
            </p>
          )}

          {/* Description */}
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-2">
            {umkm.description}
          </p>

          {/* Info */}
          <div className="space-y-2">
            {/* Address */}
            <div className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{umkm.address.split(',')[0]}</span>
            </div>

            {/* Open Hours */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{umkm.openHours}</span>
            </div>

            {/* Contact */}
            {umkm.contact && (
              <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>{umkm.contact}</span>
              </div>
            )}
          </div>

          {/* View Details Button */}
          <div className="mt-4">
            <span className="inline-block text-custom-primary dark:text-custom-accent font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
              Lihat Detail →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default UMKMCard;

