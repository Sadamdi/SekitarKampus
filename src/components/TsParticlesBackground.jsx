import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

/**
 * Lapisan interaktif resmi tsParticles (particles.js.org):
 * hover = grab jaringan, klik = push partikel — dioptimasi untuk background (sedikit node, fps cap).
 */
export default function TsParticlesBackground({ paused, tsConfig }) {
	const [engineReady, setEngineReady] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => setEngineReady(true));
	}, []);

	const options = useMemo(() => {
		const n = tsConfig?.number ?? 36;
		const fpsLimit = tsConfig?.fpsLimit ?? 60;
		const linkDist = tsConfig?.linkDistance ?? 120;
		const moveSpeed = tsConfig?.moveSpeed ?? 0.75;
		const grabDist = tsConfig?.grabDistance ?? 130;
		const pushQty = tsConfig?.pushQuantity ?? 2;
		const linksOn = tsConfig?.links !== false;

		return {
			fullScreen: { enable: false },
			detectRetina: false,
			fpsLimit,
			pause: paused,
			background: { color: { value: 'transparent' } },
			interactivity: {
				// window: mouse tetap terdeteksi walau canvas di belakang konten (root pointer-events-none)
				detectsOn: 'window',
				events: {
					onHover: {
						enable: !paused,
						mode: 'grab',
					},
					onClick: {
						enable: !paused,
						mode: 'push',
					},
					resize: true,
				},
				modes: {
					grab: {
						distance: grabDist,
						links: { opacity: 0.35 },
					},
					push: { quantity: pushQty },
					repulse: { distance: 100, duration: 0.35 },
				},
			},
			particles: {
				number: {
					value: n,
					/* area lebih kecil = partikel lebih rapat di layar lebar */
					density: { enable: true, area: 880 },
				},
				color: {
					value: ['#1c3f80', '#3b82f6', '#f5cb3f'],
				},
				links: linksOn
					? {
							enable: true,
							distance: linkDist,
							color: '#8bb8ff',
							opacity: 0.28,
							width: 1,
						}
					: { enable: false },
				move: {
					enable: true,
					speed: moveSpeed,
					direction: 'none',
					random: true,
					straight: false,
					outModes: { default: 'bounce' },
				},
				opacity: {
					value: { min: 0.22, max: 0.62 },
				},
				shape: { type: 'circle' },
				size: {
					value: { min: 1.2, max: 3.6 },
				},
			},
		};
	}, [paused, tsConfig]);

	if (!engineReady) return null;

	return (
		<div className="absolute inset-0 z-[3] h-full w-full opacity-[0.95]">
			<Particles
				id="tsparticles-bg"
				className="h-full w-full"
				style={{ width: '100%', height: '100%' }}
				options={options}
			/>
		</div>
	);
}
