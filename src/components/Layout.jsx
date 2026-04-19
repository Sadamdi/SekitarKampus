import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatbotButton from './ChatbotButton';
import { useDarkModeStore } from '../store/useStore';

const pageTransition = {
	initial: { opacity: 0, y: 14 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -10 },
	transition: { duration: 0.26, ease: [0.33, 0, 0.2, 1] },
};

const Layout = () => {
	const { initializeDarkMode } = useDarkModeStore();
	const location = useLocation();
	const [reduceMotion, setReduceMotion] = useState(false);

	useEffect(() => {
		initializeDarkMode();
	}, [initializeDarkMode]);

	useEffect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		setReduceMotion(mq.matches);
		const handler = () => setReduceMotion(mq.matches);
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	}, []);

	return (
		<div className="min-h-screen flex flex-col overflow-x-hidden">
			<Navbar />
			<main className="flex-grow overflow-visible w-full">
				{reduceMotion ? (
					<Outlet />
				) : (
					<AnimatePresence mode="wait">
						<motion.div
							key={location.pathname}
							className="w-full"
							initial={pageTransition.initial}
							animate={pageTransition.animate}
							exit={pageTransition.exit}
							transition={pageTransition.transition}>
							<Outlet />
						</motion.div>
					</AnimatePresence>
				)}
			</main>
			<Footer />
			<ChatbotButton />
		</div>
	);
};

export default Layout;
