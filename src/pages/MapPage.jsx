import React, { useState, useRef, useEffect, createRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Store, X, Eye, Maximize2 } from 'lucide-react';
import L from 'leaflet';
import { umkmData } from '../data/umkm';
import { getCategories } from '../data/umkm';
import 'leaflet/dist/leaflet.css';

// Fix leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Custom marker icons for different categories
const createCustomIcon = (category, isSelected = false) => {
  const colors = {
    'Makanan': '#ef4444',
    'Minuman': '#3b82f6',
    'Jasa': '#10b981',
  };

  const color = colors[category] || '#6b7280';
  const size = isSelected ? 40 : 30;
  const borderWidth = isSelected ? 4 : 3;

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: ${size}px;
        height: ${size}px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: ${borderWidth}px solid ${isSelected ? '#fbbf24' : 'white'};
        box-shadow: 0 ${isSelected ? 4 : 2}px ${isSelected ? 10 : 5}px rgba(0,0,0,${isSelected ? 0.4 : 0.3});
        transition: all 0.3s ease;
      ">
        <div style="
          transform: rotate(45deg);
          margin-top: ${isSelected ? 8 : 5}px;
          text-align: center;
          color: white;
          font-size: ${isSelected ? 18 : 14}px;
        ">📍</div>
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

// Component untuk mengontrol map zoom dan center
const MapController = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (center && zoom) {
      map.flyTo(center, zoom, {
        duration: 1.5,
        easeLinearity: 0.5
      });
    }
  }, [center, zoom, map]);

  return null;
};

const MapPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedUmkm, setSelectedUmkm] = useState(null);
  const [focusedUmkm, setFocusedUmkm] = useState(null);
  const mapRef = useRef(null);
  const categories = getCategories();
  
  // Create refs for all markers
  const markerRefs = useRef({});

  // Initialize refs for all UMKM
  useEffect(() => {
    umkmData.forEach(umkm => {
      if (!markerRefs.current[umkm.id]) {
        markerRefs.current[umkm.id] = createRef();
      }
    });
  }, []);

  // Center map di kampus Malang (rata-rata dari semua koordinat)
  const defaultCenter = [-7.952048, 112.608389];
  const defaultZoom = 15;

  const filteredUmkm = selectedCategory === 'Semua'
    ? umkmData
    : umkmData.filter(umkm => umkm.category === selectedCategory);

  // Filter untuk hanya menampilkan UMKM yang dipilih jika ada
  const displayedUmkm = focusedUmkm ? [focusedUmkm] : filteredUmkm;

  const handleMarkerClick = (umkm) => {
    if (focusedUmkm && focusedUmkm.id === umkm.id) {
      // Jika pin yang sama diklik lagi, close popup dan reset ke view semua
      const marker = markerRefs.current[umkm.id]?.current;
      if (marker) {
        marker.closePopup();
      }
      setFocusedUmkm(null);
      setSelectedUmkm(null);
    } else {
      // Focus ke UMKM yang dipilih
      setFocusedUmkm(umkm);
      setSelectedUmkm(umkm);
      
      // Open popup
      setTimeout(() => {
        const marker = markerRefs.current[umkm.id]?.current;
        if (marker) {
          marker.openPopup();
        }
      }, 100);
    }
  };

  const handleResetView = () => {
    setFocusedUmkm(null);
    setSelectedUmkm(null);
  };

  // Tentukan center dan zoom berdasarkan fokus
  const mapCenter = focusedUmkm 
    ? [focusedUmkm.location.lat, focusedUmkm.location.lng]
    : defaultCenter;
  const mapZoom = focusedUmkm ? 17 : defaultZoom;

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
              <MapPin className="w-8 h-8 text-custom-accent" />
              <h1 className="text-4xl md:text-5xl font-bold">Peta Interaktif</h1>
            </div>
            <p className="text-gray-200 dark:text-gray-400">
              {focusedUmkm 
                ? `Menampilkan: ${focusedUmkm.name}` 
                : 'Temukan lokasi semua UMKM di peta dan dapatkan arah menuju mereka'}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter & Reset Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          {/* Reset View Button */}
          {focusedUmkm && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              onClick={handleResetView}
              className="flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold bg-custom-accent text-custom-primary hover:bg-yellow-500 transition-all duration-300 shadow-lg"
            >
              <Maximize2 className="w-5 h-5" />
              <span>Lihat Semua</span>
            </motion.button>
          )}

          {/* Category Filters */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setFocusedUmkm(null);
                setSelectedUmkm(null);
              }}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md ${
                selectedCategory === category
                  ? 'bg-custom-primary dark:bg-custom-accent text-white dark:text-custom-primary scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category} ({category === 'Semua' ? umkmData.length : umkmData.filter(u => u.category === category).length})
            </button>
          ))}
        </motion.div>

        {/* Info Banner when focused */}
        {focusedUmkm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-gradient-to-r from-custom-accent to-yellow-400 text-custom-primary rounded-xl p-4 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Eye className="w-6 h-6" />
                <div>
                  <p className="font-bold text-lg">{focusedUmkm.name}</p>
                  <p className="text-sm opacity-90">Klik pin lagi untuk melihat semua UMKM</p>
                </div>
              </div>
              <button
                onClick={handleResetView}
                className="bg-custom-primary text-white p-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Map & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 card overflow-hidden"
            style={{ height: '450px' }}
          >
            <MapContainer
              center={defaultCenter}
              zoom={defaultZoom}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={true}
              ref={mapRef}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Map Controller untuk zoom dan center */}
              <MapController center={mapCenter} zoom={mapZoom} />

              {displayedUmkm.map((umkm) => (
                <Marker
                  key={umkm.id}
                  ref={markerRefs.current[umkm.id]}
                  position={[umkm.location.lat, umkm.location.lng]}
                  icon={createCustomIcon(umkm.category, focusedUmkm?.id === umkm.id)}
                  eventHandlers={{
                    click: () => handleMarkerClick(umkm),
                  }}
                >
                  <Popup>
                    <div className="text-center p-2" style={{ minWidth: '250px' }}>
                      <img
                        src={umkm.images[0]}
                        alt={umkm.name}
                        className="w-full h-32 object-cover rounded-lg mb-3"
                      />
                      <span className="inline-block bg-custom-accent text-custom-primary text-xs font-bold px-2 py-1 rounded-full mb-2">
                        {umkm.category}
                      </span>
                      <h3 className="font-bold text-custom-primary mb-1 text-lg">{umkm.name}</h3>
                      <p className="text-xs text-gray-600 mb-3">{umkm.address.split(',')[0]}</p>
                      
                      <div className="flex flex-col space-y-2">
                        <Link
                          to={`/umkm/${umkm.slug}`}
                          className="inline-block bg-custom-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors duration-300"
                        >
                          📋 Lihat Detail
                        </Link>
                        <a
                          href={`https://www.google.com/maps?q=${umkm.location.lat},${umkm.location.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-custom-accent text-custom-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-500 transition-colors duration-300"
                        >
                          🗺️ Buka di Maps
                        </a>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </motion.div>

          {/* Sidebar List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="card p-4" style={{ maxHeight: '450px', overflowY: 'auto' }}>
              <h2 className="text-2xl font-bold text-custom-primary dark:text-custom-accent mb-4 flex items-center space-x-2">
                <Store className="w-6 h-6" />
                <span>Daftar UMKM ({displayedUmkm.length})</span>
              </h2>

              <div className="space-y-3">
                {displayedUmkm.map((umkm) => (
                  <motion.div
                    key={umkm.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={() => handleMarkerClick(umkm)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedUmkm?.id === umkm.id
                        ? 'bg-custom-primary dark:bg-custom-accent text-white dark:text-custom-primary shadow-lg scale-105 ring-2 ring-custom-accent'
                        : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <img
                        src={umkm.images[0]}
                        alt={umkm.name}
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-grow min-w-0">
                        <h3 className="font-bold text-sm mb-1 truncate">{umkm.name}</h3>
                        <span className={`inline-block text-xs font-bold px-2 py-1 rounded-full mb-1 ${
                          selectedUmkm?.id === umkm.id
                            ? 'bg-white/20'
                            : 'bg-custom-accent text-custom-primary'
                        }`}>
                          {umkm.category}
                        </span>
                        <p className="text-xs opacity-80 truncate">{umkm.address.split(',')[0]}</p>
                      </div>
                    </div>
                    
                    {/* Detail Button in List */}
                    <Link
                      to={`/umkm/${umkm.slug}`}
                      onClick={(e) => e.stopPropagation()}
                      className={`mt-3 block text-center px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                        selectedUmkm?.id === umkm.id
                          ? 'bg-white/20 hover:bg-white/30'
                          : 'bg-custom-primary dark:bg-custom-accent text-white dark:text-custom-primary hover:bg-blue-800 dark:hover:bg-yellow-500'
                      }`}
                    >
                      📋 Lihat Detail
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 card p-4"
        >
          <h3 className="font-bold text-custom-primary dark:text-custom-accent mb-3">
            📌 Legenda & Petunjuk:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Warna Kategori:</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Makanan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Minuman</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-700 dark:text-gray-300">Jasa</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Cara Pakai:</p>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>✅ Klik pin untuk focus ke 1 UMKM</li>
                <li>✅ Klik pin lagi untuk kembali ke semua</li>
                <li>✅ Klik kartu di sidebar untuk focus</li>
                <li>✅ Gunakan "Lihat Semua" untuk reset view</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MapPage;
