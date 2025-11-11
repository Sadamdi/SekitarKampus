import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Mail, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-custom-primary dark:bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-custom-accent p-2 rounded-lg">
                <Store className="w-6 h-6 text-custom-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SekitarKampus</h3>
                <p className="text-xs text-custom-accent">Direktori UMKM</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">
              Platform direktori digital yang membantu UMKM lokal di sekitar kampus untuk lebih mudah ditemukan oleh mahasiswa dan komunitas kampus.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Malang, Jawa Timur</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-300 dark:text-gray-400 hover:text-custom-accent transition-colors duration-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-sm text-gray-300 dark:text-gray-400 hover:text-custom-accent transition-colors duration-300">
                  Peta Interaktif
                </Link>
              </li>
              <li>
                <Link to="/favorit" className="text-sm text-gray-300 dark:text-gray-400 hover:text-custom-accent transition-colors duration-300">
                  UMKM Favorit
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-300 dark:text-gray-400 hover:text-custom-accent transition-colors duration-300">
                  Tentang Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Informasi</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">
              Proyek ini dibuat untuk kompetisi Web In Action (WIA) 2025 dengan tema "UMKM x Kampus".
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300 dark:text-gray-400 mb-2">
              <Mail className="w-4 h-4" />
              <span>sekitarkampus@wia2025.com</span>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-sm text-custom-accent hover:text-yellow-400 transition-colors duration-300 mt-4"
            >
              <span>Profil Tim</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300 dark:text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} SekitarKampus. Dibuat dengan</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
            <span>untuk WIA 2025</span>
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            Membantu UMKM Lokal Go Digital
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

