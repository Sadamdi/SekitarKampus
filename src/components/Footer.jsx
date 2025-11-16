import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-custom-primary dark:bg-gray-900 text-white mt-20 relative z-10">
      <div className="container mx-auto px-4 py-12 relative z-10">
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
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('/')}
                  className="footer-link-button"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/map')}
                  className="footer-link-button"
                >
                  Peta Interaktif
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/favorit')}
                  className="footer-link-button"
                >
                  UMKM Favorit
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/about')}
                  className="footer-link-button"
                >
                  Tentang Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Info */}
          <div className="relative z-10">
            <h3 className="text-lg font-bold mb-4">Informasi</h3>
            <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">
              Proyek ini dibuat untuk kompetisi Web In Action (WIA) 2025 dengan tema "UMKM x Kampus".
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300 dark:text-gray-400 mb-2">
              <Mail className="w-4 h-4" />
              <span>sekitarkampus@wia2025.com</span>
            </div>
            <button
              onClick={() => handleNavigation('/about')}
              className="footer-profile-button"
            >
              <span>Profil Tim</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300 dark:text-gray-400">
            <span>© {currentYear} SekitarKampus</span>
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

