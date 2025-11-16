import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { MapPin } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import CampusFilter from '../components/CampusFilter';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import UMKMCard from '../components/UMKMCard';
import UltimateAnimatedBackground from '../components/UltimateAnimatedBackground';
import { getCampuses, getCategories, umkmData } from '../data/umkm';
import lakiThink from '../img/Laki Think.webp';
import perempuanCookies from '../img/PerempuanCookies.webp';
import { getNearestUmkm } from '../utils/helpers';

const Home = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('Semua');
	const [selectedCampus, setSelectedCampus] = useState('Semua');
	const [userLocation, setUserLocation] = useState(null);
	const [locationPermission, setLocationPermission] = useState('prompt');

	const categories = getCategories();
	const campuses = getCampuses();

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

	// Filter by campus first
	const filteredByCampus = useMemo(() => {
		if (selectedCampus === 'Semua') return umkmData;
		return umkmData.filter((umkm) => umkm.campus === selectedCampus);
	}, [selectedCampus]);

	// Filter by category
	const filteredByCategory = useMemo(() => {
		if (selectedCategory === 'Semua') return filteredByCampus;
		return filteredByCampus.filter(
			(umkm) => umkm.category === selectedCategory
		);
	}, [selectedCategory, filteredByCampus]);

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
		const nearest = getNearestUmkm(
			umkmData,
			userLocation.lat,
			userLocation.lng
		);
		return nearest.slice(0, 3); // Top 3 nearest
	}, [userLocation]);

	return (
		<>
			{/* Ultimate Animated Background with UMKM Photos */}
			<UltimateAnimatedBackground />

			<div className="container mx-auto px-4 py-8 relative z-10 overflow-visible">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12 relative overflow-visible">
					{/* Right Illustration - Laki Think (Rotated -70deg, sejajar dengan heading) - Desktop */}
					<motion.div
						initial={{ opacity: 0, x: 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="hidden lg:block absolute z-[1]"
						style={{
							transformOrigin: 'center',
							right: '-80px',
							top: '0px',
						}}>
						<img
							src={lakiThink}
							alt="Ilustrasi Laki-laki"
							className="w-80 h-auto object-contain opacity-80"
							style={{ transform: 'rotate(-70deg)', objectFit: 'contain' }}
						/>
					</motion.div>

					{/* Right Illustration - Laki Think (Mobile) */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="lg:hidden absolute z-[1]"
						style={{
							transformOrigin: 'center',
							right: '-80px',
							top: '90px',
						}}>
						<img
							src={lakiThink}
							alt="Ilustrasi Laki-laki"
							className="w-64 h-auto object-contain opacity-80"
							style={{ transform: 'rotate(-60deg)', objectFit: 'contain' }}
						/>
					</motion.div>

					<h1 className="text-4xl md:text-5xl font-bold text-custom-primary dark:text-custom-accent mb-4 relative z-10">
						Temukan UMKM Sekitar Kampus
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto relative z-10">
						Direktori digital yang membantu kamu menemukan jajanan, kopi, dan
						layanan UMKM terbaik di sekitar kampus Malang
					</p>
				</motion.div>

				{/* Search Bar */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="mb-8 relative z-10">
					<SearchBar
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
					/>
				</motion.div>

				{/* Filter Section with Illustrations */}
				<div className="relative mb-12 overflow-visible">
					{/* Left Illustration - Perempuan Cookies (Rotated 70deg, sejajar dengan Filter Berdasarkan Kampus) - Desktop */}
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="hidden lg:block absolute z-[1]"
						style={{
							transformOrigin: 'center',
							left: '-80px',
							top: '-70px',
						}}>
						<img
							src={perempuanCookies}
							alt="Ilustrasi Perempuan"
							className="w-80 h-auto object-contain opacity-80"
							style={{ transform: 'rotate(70deg)', objectFit: 'contain' }}
						/>
					</motion.div>

					{/* Left Illustration - Perempuan Cookies (Mobile) */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="lg:hidden absolute z-[1]"
						style={{
							transformOrigin: 'center',
							left: '-70px',
							top: '70px',
						}}>
						<img
							src={perempuanCookies}
							alt="Ilustrasi Perempuan"
							className="w-64 h-auto object-contain opacity-80"
							style={{ transform: 'rotate(60deg)', objectFit: 'contain' }}
						/>
					</motion.div>

					{/* Campus Filter */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="mb-8 relative z-10">
						<h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center relative z-10">
							Filter Berdasarkan Kampus
						</h3>
						<CampusFilter
							campuses={campuses}
							selectedCampus={selectedCampus}
							setSelectedCampus={setSelectedCampus}
						/>
					</motion.div>

					{/* Category Filter */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="relative z-10">
						<h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center relative z-10">
							Filter Berdasarkan Kategori
						</h3>
						<CategoryFilter
							categories={categories}
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>
					</motion.div>
				</div>

				{/* Nearest UMKM Section (if location available) */}
				{locationPermission === 'granted' &&
					nearestUmkm.length > 0 &&
					!searchQuery &&
					selectedCategory === 'Semua' &&
					selectedCampus === 'Semua' && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
							className="mb-12">
							<div className="bg-custom-accent dark:bg-custom-accent text-custom-primary rounded-2xl p-6 shadow-lg mb-6">
								<div className="flex items-center space-x-3 mb-4">
									<MapPin className="w-6 h-6 text-custom-primary" />
									<h2 className="text-2xl font-bold text-custom-primary">
										UMKM Terdekat Dari Lokasimu
									</h2>
								</div>
								<p className="text-custom-primary dark:text-custom-primary opacity-80">
									Berikut adalah UMKM yang paling dekat dari posisimu saat ini
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{nearestUmkm.map((umkm) => (
									<UMKMCard
										key={umkm.id}
										umkm={umkm}
										showDistance={true}
									/>
								))}
							</div>

							<div className="border-t-2 border-gray-300 dark:border-gray-700 my-12"></div>
						</motion.div>
					)}

				{/* All UMKM Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}>
					<h2 className="text-3xl font-bold text-custom-primary dark:text-custom-accent mb-6">
						{searchQuery
							? `Hasil Pencarian (${searchResults.length})`
							: selectedCampus !== 'Semua' && selectedCategory !== 'Semua'
							? `UMKM ${selectedCampus} - ${selectedCategory} (${searchResults.length})`
							: selectedCampus !== 'Semua'
							? `UMKM ${selectedCampus} (${searchResults.length})`
							: selectedCategory !== 'Semua'
							? `UMKM Kategori ${selectedCategory} (${searchResults.length})`
							: `Semua UMKM (${searchResults.length})`}
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
									setSelectedCampus('Semua');
								}}
								className="btn-primary">
								Reset Pencarian
							</button>
						</div>
					) : (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{searchResults.map((umkm) => (
								<UMKMCard
									key={umkm.id}
									umkm={umkm}
								/>
							))}
						</div>
					)}
				</motion.div>

				{/* Stats Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
					className="mt-16 bg-gradient-to-r from-custom-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-8 shadow-lg">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
						<div>
							<h3 className="text-4xl font-bold text-custom-accent mb-2">
								{umkmData.length}+
							</h3>
							<p className="text-gray-200">UMKM Terdaftar</p>
						</div>
						<div>
							<h3 className="text-4xl font-bold text-custom-accent mb-2">
								{categories.length - 1}
							</h3>
							<p className="text-gray-200">Kategori</p>
						</div>
						<div>
							<h3 className="text-4xl font-bold text-custom-accent mb-2">
								100%
							</h3>
							<p className="text-gray-200">Gratis & Mudah</p>
						</div>
					</div>
				</motion.div>
			</div>
		</>
	);
};

export default Home;
