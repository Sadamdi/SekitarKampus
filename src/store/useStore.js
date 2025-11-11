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
      initializeDarkMode: () => set((state) => {
        // Initialize dark mode dari localStorage saat app load
        if (state.isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        return state;
      }),
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

