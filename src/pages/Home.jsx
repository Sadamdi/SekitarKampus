import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Fuse from 'fuse.js';
import { umkmData, getCategories } from '../data/umkm';
import { getNearestUmkm } from '../utils/helpers';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import UMKMCard from '../components/UMKMCard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [userLocation, setUserLocation] = useState(null);
  const [locationPermission, setLocationPermission] = useState('prompt');

  const categories = getCategories();

  // Request user location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLocationPermission('granted');
        },
        (error) => {
          console.log('Location permission denied', error);
          setLocationPermission('denied');
        }
      );
    }
  }, []);

  // Filter by category
  const filteredByCategory = useMemo(() => {
    if (selectedCategory === 'Semua') return umkmData;
    return umkmData.filter((umkm) => umkm.category === selectedCategory);
  }, [selectedCategory]);

  // Fuzzy search using Fuse.js
  const fuse = useMemo(
    () =>
      new Fuse(filteredByCategory, {
        keys: ['name', 'description', 'category', 'slogan'],
        threshold: 0.3,
      }),
    [filteredByCategory]
  );

  const searchResults = useMemo(() => {
    if (!searchQuery) return filteredByCategory;
    return fuse.search(searchQuery).map((result) => result.item);
  }, [searchQuery, fuse, filteredByCategory]);

  // Get nearest UMKM if location available
  const nearestUmkm = useMemo(() => {
    if (!userLocation) return [];
    const nearest = getNearestUmkm(umkmData, userLocation.lat, userLocation.lng);
    return nearest.slice(0, 3); // Top 3 nearest
  }, [userLocation]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-custom-primary dark:text-custom-accent mb-4">
          Temukan UMKM Sekitar Kampus
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Direktori digital yang membantu kamu menemukan jajanan, kopi, dan layanan UMKM terbaik di sekitar kampus Malang
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-8"
      >
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </motion.div>

      {/* Nearest UMKM Section (if location available) */}
      {locationPermission === 'granted' && nearestUmkm.length > 0 && !searchQuery && selectedCategory === 'Semua' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-custom-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-6 shadow-lg mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="w-6 h-6 text-custom-accent" />
              <h2 className="text-2xl font-bold">UMKM Terdekat Dari Lokasimu</h2>
            </div>
            <p className="text-gray-200 dark:text-gray-400">
              Berikut adalah UMKM yang paling dekat dari posisimu saat ini
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearestUmkm.map((umkm) => (
              <UMKMCard key={umkm.id} umkm={umkm} showDistance={true} />
            ))}
          </div>

          <div className="border-t-2 border-gray-300 dark:border-gray-700 my-12"></div>
        </motion.div>
      )}

      {/* All UMKM Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-custom-primary dark:text-custom-accent mb-6">
          {searchQuery
            ? `Hasil Pencarian (${searchResults.length})`
            : selectedCategory === 'Semua'
            ? 'Semua UMKM'
            : `UMKM Kategori ${selectedCategory} (${searchResults.length})`}
        </h2>

        {searchResults.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Tidak ada UMKM yang ditemukan
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
              className="btn-primary"
            >
              Reset Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((umkm) => (
              <UMKMCard key={umkm.id} umkm={umkm} />
            ))}
          </div>
        )}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 bg-gradient-to-r from-custom-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-8 shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="text-4xl font-bold text-custom-accent mb-2">{umkmData.length}+</h3>
            <p className="text-gray-200">UMKM Terdaftar</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-custom-accent mb-2">{categories.length - 1}</h3>
            <p className="text-gray-200">Kategori</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-custom-accent mb-2">100%</h3>
            <p className="text-gray-200">Gratis & Mudah</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;

