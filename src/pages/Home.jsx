import Fuse from 'fuse.js';
import { MapPin } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import CampusFilter from '../components/CampusFilter';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import ScrollReveal from '../components/ScrollReveal';
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

	const filteredByCampus = useMemo(() => {
		if (selectedCampus === 'Semua') return umkmData;
		return umkmData.filter((umkm) => umkm.campus === selectedCampus);
	}, [selectedCampus]);

	const filteredByCategory = useMemo(() => {
		if (selectedCategory === 'Semua') return filteredByCampus;
		return filteredByCampus.filter(
			(umkm) => umkm.category === selectedCategory
		);
	}, [selectedCategory, filteredByCampus]);

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

	const nearestUmkm = useMemo(() => {
		if (!userLocation) return [];
		const nearest = getNearestUmkm(
			umkmData,
			userLocation.lat,
			userLocation.lng
		);
		return nearest.slice(0, 3);
	}, [userLocation]);

	return (
		<>
			<UltimateAnimatedBackground />

			<div className="container mx-auto px-4 py-8 relative z-10 overflow-visible">
				<ScrollReveal
					variant="fadeDown"
					className="text-center mb-12 relative overflow-visible">
					<ScrollReveal
						variant="fadeRight"
						delay={0.06}
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
					</ScrollReveal>

					<ScrollReveal
						variant="fadeRight"
						delay={0.06}
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
					</ScrollReveal>

					<h1 className="text-4xl md:text-5xl font-bold text-custom-primary dark:text-custom-accent mb-4 relative z-10">
						Temukan UMKM Sekitar Kampus
					</h1>
					<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto relative z-10">
						Direktori digital yang membantu kamu menemukan jajanan, kopi, dan
						layanan UMKM terbaik di sekitar kampus Malang
					</p>
				</ScrollReveal>

				<ScrollReveal className="mb-8 relative z-10" delay={0.04}>
					<SearchBar
						searchQuery={searchQuery}
						setSearchQuery={setSearchQuery}
					/>
				</ScrollReveal>

				<div className="relative mb-12 overflow-visible">
					<ScrollReveal
						variant="fadeLeft"
						delay={0.06}
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
					</ScrollReveal>

					<ScrollReveal
						variant="fadeLeft"
						delay={0.06}
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
					</ScrollReveal>

					<ScrollReveal className="mb-8 relative z-10" delay={0.05}>
						<h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center relative z-10">
							Filter Berdasarkan Kampus
						</h3>
						<CampusFilter
							campuses={campuses}
							selectedCampus={selectedCampus}
							setSelectedCampus={setSelectedCampus}
						/>
					</ScrollReveal>

					<ScrollReveal className="relative z-10" delay={0.08}>
						<h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center relative z-10">
							Filter Berdasarkan Kategori
						</h3>
						<CategoryFilter
							categories={categories}
							selectedCategory={selectedCategory}
							setSelectedCategory={setSelectedCategory}
						/>
					</ScrollReveal>
				</div>

				{locationPermission === 'granted' &&
					nearestUmkm.length > 0 &&
					!searchQuery &&
					selectedCategory === 'Semua' &&
					selectedCampus === 'Semua' && (
						<ScrollReveal className="mb-12" delay={0.06}>
							<div className="card bg-custom-accent dark:bg-custom-accent text-custom-primary rounded-2xl p-6 mb-6 cursor-default">
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
						</ScrollReveal>
					)}

				<ScrollReveal delay={0.06}>
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
				</ScrollReveal>

				<ScrollReveal
					className="mt-16 card bg-gradient-to-r from-custom-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-8 cursor-default"
					delay={0.08}
					variant="scale">
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
				</ScrollReveal>
			</div>
		</>
	);
};

export default Home;
