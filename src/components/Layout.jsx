import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotButton from './ChatbotButton';
import { useDarkModeStore } from '../store/useStore';

const Layout = () => {
  const { initializeDarkMode } = useDarkModeStore();

  useEffect(() => {
    // Initialize dark mode saat app load
    initializeDarkMode();
  }, [initializeDarkMode]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow overflow-visible">
        <Outlet />
      </main>
      <Footer />
      <ChatbotButton />
    </div>
  );
};

export default Layout;

