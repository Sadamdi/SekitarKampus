import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { umkmData } from '../data/umkm';
import perempuanThink from '../img/PerempuanThink.webp';

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState('welcome');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message when first opened
      addBotMessage('Hai! Saya Asisten SekitarKampus 🤖\n\nSiap bantu kamu temukan UMKM terbaik di sekitar kampus!', 'welcome');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  const addBotMessage = (text, step, options = null) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        text,
        timestamp: new Date(),
        options
      }]);
      setCurrentStep(step);
      setIsTyping(false);
    }, 800);
  };

  const addUserMessage = (text) => {
    setMessages(prev => [...prev, {
      type: 'user',
      text,
      timestamp: new Date()
    }]);
  };

  const handleOptionClick = (option) => {
    addUserMessage(option.text);

    switch (option.action) {
      // === PILIH KAMPUS ===
      case 'pilih_kampus':
        addBotMessage(
          'Kamu lagi di kampus mana nih? 🎓',
          'kampus',
          [
            { text: 'UIN Malang', action: 'kampus_uin' },
            { text: 'Universitas Brawijaya', action: 'kampus_ub' },
            { text: 'Universitas Negeri Malang', action: 'kampus_um' },
            { text: 'Lihat Semua', action: 'go_home' },
          ]
        );
        break;

      case 'kampus_uin':
        addBotMessage(
          'Ada 10 UMKM di sekitar UIN Malang! Lagi cari apa nih? 🍽️',
          'kategori_uin',
          [
            { text: 'Makanan Berat', action: 'makanan_uin' },
            { text: 'Minuman & Kopi', action: 'minuman_uin' },
            { text: 'Jasa & ATK', action: 'jasa_uin' },
            { text: 'Lihat Semua UIN', action: 'semua_uin' },
          ]
        );
        break;

      case 'kampus_ub':
        addBotMessage(
          'Ada 4 UMKM di sekitar UB! Lagi cari apa? 🎯',
          'kategori_ub',
          [
            { text: 'Makanan Berat', action: 'makanan_ub' },
            { text: 'Minuman & Kopi', action: 'minuman_ub' },
            { text: 'Jasa & ATK', action: 'jasa_ub' },
            { text: 'Lihat Semua UB', action: 'semua_ub' },
          ]
        );
        break;

      case 'kampus_um':
        addBotMessage(
          'Ada 4 UMKM di sekitar UM! Lagi butuh apa? 📚',
          'kategori_um',
          [
            { text: 'Makanan Berat', action: 'makanan_um' },
            { text: 'Minuman & Kopi', action: 'minuman_um' },
            { text: 'Lihat Semua UM', action: 'semua_um' },
          ]
        );
        break;

      // === REKOMENDASI MAKAN ===
      case 'rekomendasi_makan':
        addBotMessage(
          'Budget kamu berapa nih? 💰',
          'budget_makan',
          [
            { text: 'Di bawah 10rb', action: 'budget_murah' },
            { text: '10rb - 15rb', action: 'budget_sedang' },
            { text: 'Di atas 15rb', action: 'budget_premium' },
            { text: 'Lihat Semua Makanan', action: 'semua_makanan' },
          ]
        );
        break;

      case 'budget_murah':
        const murah = umkmData.filter(u => 
          u.category === 'Makanan' && 
          u.menu.some(m => m.price < 10000)
        ).slice(0, 3);
        addBotMessage(
          `Rekomendasi UMKM dengan menu di bawah 10rb:\n\n${murah.map(u => `✨ ${u.name} - ${u.slogan}`).join('\n')}\n\nPilih yang mana?`,
          'suggest_murah',
          [
            ...murah.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Cari yang lain', action: 'restart' },
          ]
        );
        break;

      case 'budget_sedang':
        const sedang = umkmData.filter(u => 
          u.category === 'Makanan' && 
          u.menu.some(m => m.price >= 10000 && m.price <= 15000)
        ).slice(0, 3);
        addBotMessage(
          `Rekomendasi UMKM dengan menu 10rb-15rb:\n\n${sedang.map(u => `✨ ${u.name} - ${u.slogan}`).join('\n')}\n\nMau ke mana?`,
          'suggest_sedang',
          [
            ...sedang.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Cari yang lain', action: 'restart' },
          ]
        );
        break;

      case 'budget_premium':
        const premium = umkmData.filter(u => 
          u.category === 'Makanan' && 
          u.menu.some(m => m.price > 15000)
        ).slice(0, 3);
        addBotMessage(
          `Rekomendasi UMKM dengan menu premium:\n\n${premium.map(u => `✨ ${u.name} - ${u.slogan}`).join('\n')}\n\nPilih dong!`,
          'suggest_premium',
          [
            ...premium.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Cari yang lain', action: 'restart' },
          ]
        );
        break;

      // === CARI MINUMAN ===
      case 'cari_minuman':
        const minuman = umkmData.filter(u => u.category === 'Minuman');
        addBotMessage(
          `Ada ${minuman.length} tempat minuman recommended! ☕\n\n${minuman.map(u => `${u.name} - ${u.campus}`).join('\n')}\n\nMau ke mana?`,
          'minuman',
          [
            ...minuman.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Cari yang lain', action: 'restart' },
          ]
        );
        break;

      // === KATEGORI PER KAMPUS ===
      case 'makanan_uin':
        const makanUIN = umkmData.filter(u => 
          u.campus === 'Universitas Islam Negeri Malang' && u.category === 'Makanan'
        ).slice(0, 4);
        addBotMessage(
          `Pilihan makanan di UIN:\n\n${makanUIN.map(u => `🍽️ ${u.name}`).join('\n')}`,
          'list_makan_uin',
          [
            ...makanUIN.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Kembali', action: 'kampus_uin' },
          ]
        );
        break;

      case 'minuman_uin':
        const minumUIN = umkmData.filter(u => 
          u.campus === 'Universitas Islam Negeri Malang' && u.category === 'Minuman'
        );
        addBotMessage(
          `Pilihan minuman di UIN:\n\n${minumUIN.map(u => `☕ ${u.name}`).join('\n')}`,
          'list_minum_uin',
          [
            ...minumUIN.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Kembali', action: 'kampus_uin' },
          ]
        );
        break;

      case 'jasa_uin':
        const jasaUIN = umkmData.filter(u => 
          u.campus === 'Universitas Islam Negeri Malang' && u.category === 'Jasa'
        );
        addBotMessage(
          `Pilihan jasa di UIN:\n\n${jasaUIN.map(u => `📄 ${u.name}`).join('\n')}`,
          'list_jasa_uin',
          [
            ...jasaUIN.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Kembali', action: 'kampus_uin' },
          ]
        );
        break;

      case 'makanan_ub':
        const makanUB = umkmData.filter(u => 
          u.campus === 'Universitas Brawijaya' && u.category === 'Makanan'
        );
        addBotMessage(
          `Pilihan makanan di UB:\n\n${makanUB.map(u => `🍽️ ${u.name}`).join('\n')}`,
          'list_makan_ub',
          [
            ...makanUB.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Kembali', action: 'kampus_ub' },
          ]
        );
        break;

      case 'minuman_ub':
        const minumUB = umkmData.filter(u => 
          u.campus === 'Universitas Brawijaya' && u.category === 'Minuman'
        );
        addBotMessage(
          `Pilihan minuman di UB:\n\n${minumUB.map(u => `☕ ${u.name}`).join('\n')}`,
          'list_minum_ub',
          [
            ...minumUB.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Kembali', action: 'kampus_ub' },
          ]
        );
        break;

      case 'jasa_ub':
        const jasaUB = umkmData.filter(u => 
          u.campus === 'Universitas Brawijaya' && u.category === 'Jasa'
        );
        addBotMessage(
          `Pilihan jasa di UB:\n\n${jasaUB.map(u => `📄 ${u.name}`).join('\n')}`,
          'list_jasa_ub',
          [
            ...jasaUB.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Kembali', action: 'kampus_ub' },
          ]
        );
        break;

      case 'makanan_um':
        const makanUM = umkmData.filter(u => 
          u.campus === 'Universitas Malang' && u.category === 'Makanan'
        );
        addBotMessage(
          `Pilihan makanan di UM:\n\n${makanUM.map(u => `🍽️ ${u.name}`).join('\n')}`,
          'list_makan_um',
          [
            ...makanUM.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Kembali', action: 'kampus_um' },
          ]
        );
        break;

      case 'minuman_um':
        const minumUM = umkmData.filter(u => 
          u.campus === 'Universitas Malang' && u.category === 'Minuman'
        );
        addBotMessage(
          `Pilihan minuman di UM:\n\n${minumUM.map(u => `☕ ${u.name}`).join('\n')}`,
          'list_minum_um',
          [
            ...minumUM.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Kembali', action: 'kampus_um' },
          ]
        );
        break;

      // === LIHAT SEMUA ===
      case 'semua_makanan':
        const semuaMakan = umkmData.filter(u => u.category === 'Makanan').slice(0, 5);
        addBotMessage(
          `Ini ${semuaMakan.length} tempat makan recommended:\n\n${semuaMakan.map(u => `${u.name} - ${u.campus}`).join('\n')}`,
          'all_makanan',
          [
            ...semuaMakan.map(u => ({ text: u.name, action: `navigate_${u.slug}` })),
            { text: 'Lihat Di Peta', action: 'go_map' },
          ]
        );
        break;

      case 'semua_uin':
      case 'semua_ub':
      case 'semua_um':
        navigate('/');
        setIsOpen(false);
        setTimeout(() => {
          setMessages([]);
          setCurrentStep('welcome');
        }, 300);
        break;

      // === PESAN OTOMATIS ===
      case 'pesan_otomatis':
        addBotMessage(
          'Maaf, fitur pesanan otomatis sedang dalam pengembangan dan akan hadir di versi berikutnya! 🙏\n\nUntuk saat ini, kamu bisa hubungi UMKM langsung via WhatsApp dari halaman detail mereka.',
          'future_feature',
          [
            { text: 'Oke, Mengerti', action: 'restart' },
            { text: 'Lihat UMKM', action: 'go_home' },
          ]
        );
        break;

      // === NAVIGASI ===
      case 'go_home':
        navigate('/');
        setIsOpen(false);
        setTimeout(() => {
          setMessages([]);
          setCurrentStep('welcome');
        }, 300);
        break;

      case 'go_map':
        navigate('/map');
        setIsOpen(false);
        setTimeout(() => {
          setMessages([]);
          setCurrentStep('welcome');
        }, 300);
        break;

      case 'restart':
        setMessages([]);
        setCurrentStep('welcome');
        addBotMessage('Ada yang bisa dibantu lagi? 😊', 'welcome');
        break;

      default:
        // Handle dynamic navigation untuk semua UMKM
        if (option.action.startsWith('navigate_')) {
          const slug = option.action.replace('navigate_', '');
          navigate(`/umkm/${slug}`);
          setIsOpen(false);
          setTimeout(() => {
            setMessages([]);
            setCurrentStep('welcome');
          }, 300);
        }
        break;
    }

    if (currentStep === 'welcome') {
      // Do nothing, options already provided
    }
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          'Ada yang bisa dibantu? 😊\n\nTotal ada 18 UMKM di 3 kampus!',
          'main_menu',
          [
            { text: '🎓 Pilih Kampus', action: 'pilih_kampus' },
            { text: '🍽️ Rekomendasi Makan', action: 'rekomendasi_makan' },
            { text: '☕ Cari Minuman', action: 'cari_minuman' },
            { text: '🗺️ Lihat Peta', action: 'go_map' },
          ]
        );
      }, 500);
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={openChat}
            className="fixed bottom-6 right-6 bg-custom-accent dark:bg-custom-accent text-white dark:text-custom-primary p-3 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 z-50"
            aria-label="Open chatbot"
          >
            <img 
              src={perempuanThink} 
              alt="Chatbot" 
              className="w-10 h-10 object-contain"
            />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{ height: '600px', maxHeight: 'calc(100vh-3rem)' }}
          >
            {/* Header */}
            <div className="bg-custom-primary dark:bg-custom-accent text-white dark:text-custom-primary p-4 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-custom-accent dark:bg-custom-primary rounded-full flex items-center justify-center p-2">
                  <img 
                    src={perempuanThink} 
                    alt="Asisten" 
                    className="w-6 h-6 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Asisten SekitarKampus</h3>
                  <p className="text-xs opacity-80">Online • 18 UMKM</p>
                </div>
              </div>
              <button
                onClick={closeChat}
                className="hover:bg-white/20 p-2 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-custom-primary dark:bg-custom-accent text-white dark:text-custom-primary'
                        : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-md'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-md">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Options */}
              {messages.length > 0 && messages[messages.length - 1].type === 'bot' && messages[messages.length - 1].options && !isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col space-y-2"
                >
                  {messages[messages.length - 1].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionClick(option)}
                      className="bg-custom-accent dark:bg-custom-primary text-custom-primary dark:text-white px-4 py-2 rounded-xl font-semibold hover:opacity-80 transition-opacity duration-300 text-sm text-left"
                    >
                      {option.text}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Footer */}
            <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
              {messages.length > 0 ? (
                <button
                  onClick={() => {
                    setMessages([]);
                    setCurrentStep('welcome');
                    setTimeout(() => {
                      addBotMessage(
                        'Ada yang bisa dibantu? 😊\n\nTotal ada 18 UMKM di 3 kampus!',
                        'main_menu',
                        [
                          { text: '🎓 Pilih Kampus', action: 'pilih_kampus' },
                          { text: '🍽️ Rekomendasi Makan', action: 'rekomendasi_makan' },
                          { text: '☕ Cari Minuman', action: 'cari_minuman' },
                          { text: '🗺️ Lihat Peta', action: 'go_map' },
                        ]
                      );
                    }, 100);
                  }}
                  className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-semibold transition-colors duration-300 text-sm"
                >
                  🔄 Mulai Ulang
                </button>
              ) : (
                <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                  🤖 Pilih opsi di atas untuk melanjutkan
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotButton;

