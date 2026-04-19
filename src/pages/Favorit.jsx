import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Frown } from 'lucide-react';
import { useFavoritesStore } from '../store/useStore';
import { umkmData } from '../data/umkm';
import UMKMCard from '../components/UMKMCard';
import UltimateAnimatedBackground from '../components/UltimateAnimatedBackground';
import ScrollReveal from '../components/ScrollReveal';

const Favorit = () => {
	const { favorites } = useFavoritesStore();
	const favoriteUmkm = umkmData.filter((umkm) => favorites.includes(umkm.id));

	return (
		<>
			<UltimateAnimatedBackground />

			<div className="min-h-screen relative z-10">
				<div className="bg-custom-primary dark:bg-gray-800 text-white py-8 shadow-lg relative z-10">
					<div className="container mx-auto px-4">
						<ScrollReveal variant="fadeDown">
							<div className="flex items-center space-x-3 mb-3">
								<Heart className="w-8 h-8 text-red-500 fill-red-500" />
								<h1 className="text-4xl md:text-5xl font-bold">UMKM Favorit</h1>
							</div>
							<p className="text-gray-200 dark:text-gray-400">
								Koleksi UMKM yang telah kamu simpan sebagai favorit
							</p>
						</ScrollReveal>
					</div>
				</div>

				<div className="container mx-auto px-4 py-8 relative z-10">
					{favoriteUmkm.length === 0 ? (
						<ScrollReveal variant="scale" className="text-center py-20">
							<div className="card max-w-lg mx-auto p-12">
								<Frown className="w-20 h-20 text-gray-400 dark:text-gray-600 mx-auto mb-6" />
								<h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
									Belum Ada Favorit
								</h2>
								<p className="text-gray-600 dark:text-gray-400 mb-8">
									Kamu belum menambahkan UMKM favorit. Mulai jelajahi dan tambahkan
									UMKM yang kamu suka!
								</p>
								<Link to="/" className="btn-primary">
									Jelajahi UMKM
								</Link>
							</div>
						</ScrollReveal>
					) : (
						<div>
							<ScrollReveal className="mb-6">
								<h2 className="text-2xl font-bold text-custom-primary dark:text-custom-accent">
									Total: {favoriteUmkm.length} UMKM Favorit
								</h2>
							</ScrollReveal>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{favoriteUmkm.map((umkm) => (
									<UMKMCard key={umkm.id} umkm={umkm} />
								))}
							</div>

							<ScrollReveal
								className="mt-12 bg-gradient-to-r from-custom-primary to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl p-8 shadow-lg"
								delay={0.06}>
								<h3 className="text-2xl font-bold mb-4">Tips</h3>
								<ul className="space-y-2 text-gray-200 dark:text-gray-300">
									<li>
										• Klik ikon ❤️ pada kartu UMKM untuk menambah/menghapus dari
										favorit
									</li>
									<li>• Daftar favorit tersimpan di browser kamu secara otomatis</li>
									<li>
										• Gunakan fitur favorit untuk menyimpan UMKM yang ingin kamu
										kunjungi nanti
									</li>
								</ul>
							</ScrollReveal>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Favorit;
