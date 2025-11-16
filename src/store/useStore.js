import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Store untuk Dark Mode
export const useDarkModeStore = create(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => {
        const newMode = !state.isDarkMode;
        // Update class di document.documentElement untuk Tailwind dark mode
        if (newMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return { isDarkMode: newMode };
      }),
      initializeDarkMode: () => {
        // Deteksi preferensi sistem
        const getSystemPreference = () => {
          if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
          }
          return null; // Jika tidak bisa deteksi, return null
        };

        // Cek apakah sudah ada preferensi tersimpan
        const stored = localStorage.getItem('dark-mode-storage');
        let shouldBeDark = false;
        let hasStoredPreference = false;

        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (parsed.state && parsed.state.isDarkMode !== undefined) {
              // Gunakan preferensi tersimpan
              shouldBeDark = parsed.state.isDarkMode;
              hasStoredPreference = true;
            }
          } catch (e) {
            // Error parsing, lanjut ke sistem/default
          }
        }

        // Jika belum ada preferensi tersimpan, gunakan sistem atau default dark
        if (!hasStoredPreference) {
          const systemPref = getSystemPreference();
          shouldBeDark = systemPref !== null ? systemPref : true; // Default dark jika tidak bisa deteksi
          // Simpan preferensi awal
          set({ isDarkMode: shouldBeDark });
        }

        // Apply dark mode
        if (shouldBeDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }

        // Update state
        set({ isDarkMode: shouldBeDark });

        // Listen untuk perubahan preferensi sistem (hanya jika belum ada preferensi tersimpan)
        if (!hasStoredPreference && typeof window !== 'undefined' && window.matchMedia) {
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
          const handleChange = (e) => {
            // Hanya update jika belum ada preferensi tersimpan
            const currentStored = localStorage.getItem('dark-mode-storage');
            let hasCurrentPreference = false;
            if (currentStored) {
              try {
                const parsed = JSON.parse(currentStored);
                hasCurrentPreference = parsed.state && parsed.state.isDarkMode !== undefined;
              } catch (e) {
                // Ignore
              }
            }
            
            if (!hasCurrentPreference) {
              if (e.matches) {
                document.documentElement.classList.add('dark');
                set({ isDarkMode: true });
              } else {
                document.documentElement.classList.remove('dark');
                set({ isDarkMode: false });
              }
            }
          };
          mediaQuery.addEventListener('change', handleChange);
          // Cleanup function akan dipanggil saat component unmount
          return () => mediaQuery.removeEventListener('change', handleChange);
        }
      },
    }),
    {
      name: 'dark-mode-storage',
    }
  )
);

// Store untuk Favorites
export const useFavoritesStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (umkmId) => set((state) => {
        if (state.favorites.includes(umkmId)) {
          return state;
        }
        return { favorites: [...state.favorites, umkmId] };
      }),
      removeFavorite: (umkmId) => set((state) => ({
        favorites: state.favorites.filter(id => id !== umkmId),
      })),
      toggleFavorite: (umkmId) => {
        const state = get();
        if (state.favorites.includes(umkmId)) {
          state.removeFavorite(umkmId);
        } else {
          state.addFavorite(umkmId);
        }
      },
      isFavorite: (umkmId) => {
        const state = get();
        return state.favorites.includes(umkmId);
      },
    }),
    {
      name: 'favorites-storage',
    }
  )
);

// Store untuk Chatbot
export const useChatbotStore = create((set) => ({
  isOpen: false,
  messages: [],
  openChatbot: () => set({ isOpen: true }),
  closeChatbot: () => set({ isOpen: false }),
  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message],
  })),
  resetMessages: () => set({ messages: [] }),
}));

