import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
      addBotMessage('Hai! Saya Asisten KampusJajan 🤖', 'welcome');
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
      case 'rekomendasi_makan':
        addBotMessage(
          'Budget kamu berapa nih? 💰',
          'budget_makan',
          [
            { text: 'Di bawah 10rb', action: 'budget_murah' },
            { text: 'Di atas 10rb', action: 'budget_sedang' },
          ]
        );
        break;

      case 'cari_minuman':
        addBotMessage(
          'Ada beberapa pilihan tempat minuman yang recommended! ☕',
          'minuman',
          [
            { text: 'Maliki Coffee', action: 'go_maliki' },
            { text: 'Kedai Kopi Kampus', action: 'go_kedai_kopi' },
            { text: 'Jus Buah Segar', action: 'go_jus' },
          ]
        );
        break;

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

      case 'budget_murah':
        addBotMessage(
          'Ada Kantin \'DEA\' nih! Menunya banyak yang di bawah 10rb dan porsinya mengenyangkan 😋\n\nMau lihat menunya?',
          'suggest_dea',
          [
            { text: 'Ya, Lihat Menu', action: 'go_dea' },
            { text: 'Info Lokasi', action: 'go_dea' },
            { text: 'Cari yang lain', action: 'restart' },
          ]
        );
        break;

      case 'budget_sedang':
        addBotMessage(
          'Adelian\'s Mom Kitchen cocok nih! Menu mantap dengan harga hemat, banyak pilihan nasi campur 🍛\n\nMau lihat detail?',
          'suggest_adelian',
          [
            { text: 'Ya, Lihat Detail', action: 'go_adelian' },
            { text: 'Cari yang lain', action: 'restart' },
          ]
        );
        break;

      case 'go_maliki':
        addBotMessage(
          'Maliki Coffee adalah tempat ngopi santai dengan menu kopi dan non-kopi yang beragam. Harga mulai dari 6rb! ☕',
          'redirect',
          [
            { text: 'Lihat Detail', action: 'navigate_maliki' },
            { text: 'Cari yang lain', action: 'restart' },
          ]
        );
        break;

      case 'go_kedai_kopi':
        addBotMessage(
          'Kedai Kopi Kampus adalah tempat hits dengan interior instagramable. Live music setiap weekend! 🎵',
          'redirect',
          [
            { text: 'Lihat Detail', action: 'navigate_kedai_kopi' },
            { text: 'Cari yang lain', action: 'restart' },
          ]
        );
        break;

      case 'go_jus':
        addBotMessage(
          'Jus Buah Segar Ibu Rina menyediakan jus 100% buah asli tanpa pengawet. Sehat dan segar! 🍹',
          'redirect',
          [
            { text: 'Lihat Detail', action: 'navigate_jus' },
            { text: 'Cari yang lain', action: 'restart' },
          ]
        );
        break;

      case 'go_dea':
        navigate('/umkm/kantin-dea');
        setIsOpen(false);
        // Reset chat setelah navigate
        setTimeout(() => {
          setMessages([]);
          setCurrentStep('welcome');
        }, 300);
        break;

      case 'go_adelian':
        navigate('/umkm/adelians-mom-kitchen');
        setIsOpen(false);
        // Reset chat setelah navigate
        setTimeout(() => {
          setMessages([]);
          setCurrentStep('welcome');
        }, 300);
        break;

      case 'navigate_maliki':
        navigate('/umkm/maliki-coffee');
        setIsOpen(false);
        // Reset chat setelah navigate
        setTimeout(() => {
          setMessages([]);
          setCurrentStep('welcome');
        }, 300);
        break;

      case 'navigate_kedai_kopi':
        navigate('/umkm/kedai-kopi-kampus');
        setIsOpen(false);
        // Reset chat setelah navigate
        setTimeout(() => {
          setMessages([]);
          setCurrentStep('welcome');
        }, 300);
        break;

      case 'navigate_jus':
        navigate('/umkm/jus-buah-segar-ibu-rina');
        setIsOpen(false);
        // Reset chat setelah navigate
        setTimeout(() => {
          setMessages([]);
          setCurrentStep('welcome');
        }, 300);
        break;

      case 'go_home':
        navigate('/');
        setIsOpen(false);
        // Reset chat setelah navigate
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
          'Ada yang bisa dibantu? 😊',
          'main_menu',
          [
            { text: 'Rekomendasi Makan Siang', action: 'rekomendasi_makan' },
            { text: 'Cari Minuman', action: 'cari_minuman' },
            { text: 'Pesan Otomatis', action: 'pesan_otomatis' },
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
            className="fixed bottom-6 right-6 bg-custom-primary dark:bg-custom-accent text-white dark:text-custom-primary p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 z-50"
            aria-label="Open chatbot"
          >
            <MessageCircle className="w-7 h-7" />
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
                <div className="w-10 h-10 bg-custom-accent dark:bg-custom-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="font-bold">Asisten KampusJajan</h3>
                  <p className="text-xs opacity-80">Online</p>
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
                        'Ada yang bisa dibantu? 😊',
                        'main_menu',
                        [
                          { text: 'Rekomendasi Makan Siang', action: 'rekomendasi_makan' },
                          { text: 'Cari Minuman', action: 'cari_minuman' },
                          { text: 'Pesan Otomatis', action: 'pesan_otomatis' },
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

