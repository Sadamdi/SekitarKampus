import React, { useEffect, useRef, useState, useMemo } from 'react';
import { detectGPU, getAnimationConfig } from '../utils/gpuDetector';
import TsParticlesBackground from './TsParticlesBackground';

const SMOOTH_EASE = 'cubic-bezier(0.33, 0.01, 0.25, 1)';

const UltimateAnimatedBackground = () => {
	const parallaxScopeRef = useRef(null);
	const parallaxTargetRef = useRef({ x: 0, y: 0 });
	const parallaxCurrentRef = useRef({ x: 0, y: 0 });
	const parallaxRafRef = useRef();
	const [isMobile, setIsMobile] = useState(false);
	const [animationConfig, setAnimationConfig] = useState(null);
	const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

	const floatingShapes = useMemo(() => {
		const out = [];
		for (let i = 0; i < 10; i++) {
			out.push({
				id: i,
				left: `${5 + ((i * 37) % 85)}%`,
				top: `${10 + ((i * 53) % 70)}%`,
				size: 6 + ((i * 7) % 10),
				isCircle: i % 3 !== 0,
				duration: 24 + ((i * 11) % 24),
				delay: (i * 3) % 8,
				animIndex: i % 4,
			});
		}
		return out;
	}, []);

	useEffect(() => {
		const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
		setPrefersReducedMotion(mql.matches);
		const handler = (e) => setPrefersReducedMotion(e.matches);
		mql.addEventListener('change', handler);
		return () => mql.removeEventListener('change', handler);
	}, []);

	useEffect(() => {
		const check = () =>
			setIsMobile(
				window.innerWidth < 768 ||
					/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
						navigator.userAgent
					)
			);
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	}, []);

	useEffect(() => {
		setAnimationConfig(getAnimationConfig(detectGPU()));
	}, []);

	const needParallaxMouse =
		!isMobile &&
		!prefersReducedMotion &&
		animationConfig?.enableMouseParallax;

	useEffect(() => {
		if (!needParallaxMouse) return;
		const onMove = (e) => {
			const w = window.innerWidth || 1;
			const h = window.innerHeight || 1;
			parallaxTargetRef.current = {
				x: (e.clientX / w - 0.5) * 2,
				y: (e.clientY / h - 0.5) * 2,
			};
		};
		window.addEventListener('mousemove', onMove, { passive: true });
		return () => window.removeEventListener('mousemove', onMove);
	}, [needParallaxMouse]);

	useEffect(() => {
		if (!needParallaxMouse) {
			parallaxCurrentRef.current = { x: 0, y: 0 };
			parallaxTargetRef.current = { x: 0, y: 0 };
			const el = parallaxScopeRef.current;
			if (el) {
				el.style.setProperty('--ab-nx', '0');
				el.style.setProperty('--ab-ny', '0');
			}
			return;
		}

		const lerpFactor = 0.088;
		const tick = () => {
			const el = parallaxScopeRef.current;
			if (!el) {
				parallaxRafRef.current = requestAnimationFrame(tick);
				return;
			}
			const cur = parallaxCurrentRef.current;
			const tgt = parallaxTargetRef.current;
			cur.x += (tgt.x - cur.x) * lerpFactor;
			cur.y += (tgt.y - cur.y) * lerpFactor;
			el.style.setProperty('--ab-nx', String(cur.x));
			el.style.setProperty('--ab-ny', String(cur.y));
			parallaxRafRef.current = requestAnimationFrame(tick);
		};
		parallaxRafRef.current = requestAnimationFrame(tick);
		return () => {
			if (parallaxRafRef.current) {
				cancelAnimationFrame(parallaxRafRef.current);
			}
		};
	}, [needParallaxMouse]);

	const paused = prefersReducedMotion;
	const shapeCount = isMobile
		? Math.min(animationConfig?.floatingShapeCount ?? 3, 3)
		: (animationConfig?.floatingShapeCount ?? 3);

	const pk = animationConfig?.enableMouseParallax
		? (animationConfig?.parallaxStrength ?? 1)
		: 0;

	const px = (base) => `calc(var(--ab-nx, 0) * ${(base * pk).toFixed(2)}px)`;
	const py = (base) => `calc(var(--ab-ny, 0) * ${(base * pk).toFixed(2)}px)`;

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			{/* Base gradient (statis) */}
			<div className="absolute inset-0 bg-gradient-to-br from-custom-bg via-blue-50 to-custom-bg dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
				<div
					className="absolute inset-0 opacity-30"
					style={{
						background:
							'radial-gradient(circle at 20% 50%, rgba(28, 63, 128, 0.15) 0%, transparent 50%), ' +
							'radial-gradient(circle at 80% 80%, rgba(245, 203, 63, 0.12) 0%, transparent 50%), ' +
							'radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
					}}
				/>
			</div>

			<div
				ref={parallaxScopeRef}
				className="absolute inset-0"
				style={
					needParallaxMouse
						? { '--ab-nx': 0, '--ab-ny': 0 }
						: undefined
				}>
				{animationConfig?.enableParallaxSpotlight && pk > 0 && (
					<div
						className="absolute -inset-[15%] opacity-[0.055] dark:opacity-[0.07]"
						style={{
							background:
								'radial-gradient(ellipse 42% 38% at 50% 48%, rgba(245,203,63,0.55) 0%, rgba(59,130,246,0.18) 42%, transparent 68%)',
							transform: `translate3d(${px(52)}, ${py(40)}, 0)`,
							willChange: 'transform',
						}}
					/>
				)}

				{animationConfig?.enableBlobAnimations && (
					<>
						{[
							'ab-aurora-1',
							'ab-aurora-2',
							'ab-aurora-3',
							...(!isMobile ? ['ab-aurora-4'] : []),
						].map((cls) => (
							<div
								key={cls}
								className="ab-parallax-wrap ab-aurora-shell"
								style={{
									transform: `translate3d(${px(
										cls === 'ab-aurora-1'
											? 11
											: cls === 'ab-aurora-2'
												? -9
												: cls === 'ab-aurora-3'
													? 15
													: 8
									)}, ${py(
										cls === 'ab-aurora-1'
											? 8
											: cls === 'ab-aurora-2'
												? -11
												: cls === 'ab-aurora-3'
													? 10
													: 7
									)}, 0)`,
									willChange: 'transform',
								}}>
								<div
									className={`ab-aurora ${cls}`}
									style={{
										animationPlayState: paused
											? 'paused'
											: 'running',
									}}
								/>
							</div>
						))}
					</>
				)}

				{!isMobile && animationConfig?.enableSVGWaves && (
					<>
						<div
							className="ab-parallax-wrap absolute top-0 left-0 w-full"
							style={{
								transform: `translate3d(${px(9)}, ${py(5)}, 0)`,
								willChange: 'transform',
							}}>
							<div
								className="w-[200%] opacity-[0.07]"
								style={{
									animation: paused
										? 'none'
										: 'ab-wave-slide 32s linear infinite',
									willChange: 'transform',
								}}>
								<svg
									viewBox="0 0 2880 320"
									className="w-full h-auto"
									preserveAspectRatio="none">
									<path
										fill="#1c3f80"
										fillOpacity="0.3"
										d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z M1440,96L1488,112C1536,128,1632,160,1728,160C1824,160,1920,128,2016,122.7C2112,117,2208,139,2304,149.3C2400,160,2496,160,2592,138.7C2688,117,2784,75,2832,53.3L2880,32L2880,0L2832,0C2784,0,2688,0,2592,0C2496,0,2400,0,2304,0C2208,0,2112,0,2016,0C1920,0,1824,0,1728,0C1632,0,1536,0,1488,0L1440,0Z"
									/>
								</svg>
							</div>
						</div>
						<div
							className="ab-parallax-wrap absolute bottom-0 left-0 w-full"
							style={{
								transform: `translate3d(${px(-7)}, ${py(-6)}, 0)`,
								willChange: 'transform',
							}}>
							<div
								className="w-[200%] opacity-[0.06]"
								style={{
									animation: paused
										? 'none'
										: 'ab-wave-slide-rev 38s linear infinite',
									willChange: 'transform',
								}}>
								<svg
									viewBox="0 0 2880 320"
									className="w-full h-auto"
									preserveAspectRatio="none">
									<path
										fill="#f5cb3f"
										fillOpacity="0.4"
										d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,181.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z M1440,224L1488,213.3C1536,203,1632,181,1728,181.3C1824,181,1920,203,2016,208C2112,213,2208,203,2304,181.3C2400,160,2496,128,2592,128C2688,128,2784,160,2832,176L2880,192L2880,320L2832,320C2784,320,2688,320,2592,320C2496,320,2400,320,2304,320C2208,320,2112,320,2016,320C1920,320,1824,320,1728,320C1632,320,1536,320,1488,320L1440,320Z"
									/>
								</svg>
							</div>
						</div>
					</>
				)}

				{floatingShapes.slice(0, shapeCount).map((s) => (
					<div
						key={s.id}
						className="ab-parallax-wrap absolute"
						style={{
							left: s.left,
							top: s.top,
							width: s.size,
							height: s.size,
							transform: `translate3d(${px(20)}, ${py(16)}, 0)`,
							willChange: 'transform',
						}}>
						<div
							className={`h-full w-full bg-custom-primary/15 dark:bg-custom-accent/10 ${
								s.isCircle ? 'rounded-full' : 'rounded-sm'
							}`}
							style={{
								willChange: 'transform, opacity',
								animation: paused
									? 'none'
									: `ab-float-${s.animIndex} ${s.duration}s ${SMOOTH_EASE} ${s.delay}s infinite`,
							}}
						/>
					</div>
				))}

				<div
					className="ab-parallax-wrap absolute inset-0"
					style={{
						transform: `translate3d(${px(5)}, ${py(4)}, 0)`,
						willChange: 'transform',
					}}>
					<div
						className="absolute inset-0"
						style={{
							backgroundImage:
								'radial-gradient(circle, rgba(28,63,128,0.06) 1px, transparent 1px)',
							backgroundSize: '32px 32px',
							animation: paused
								? 'none'
								: `ab-dots-pulse 14s ${SMOOTH_EASE} infinite`,
						}}
					/>
				</div>

				{!isMobile && animationConfig?.enableTsParticles && (
					<TsParticlesBackground
						paused={paused}
						tsConfig={animationConfig.tsParticles}
					/>
				)}
			</div>

			<style>{`
				.ab-parallax-wrap {
					pointer-events: none;
				}
				.ab-aurora-shell {
					position: absolute;
					inset: 0;
				}
				.ab-aurora {
					position: absolute;
					border-radius: 50%;
					filter: blur(60px);
					will-change: transform;
				}
				.ab-aurora-1 {
					top: 5%;
					left: -5%;
					width: 22rem;
					height: 22rem;
					background: radial-gradient(circle, rgba(28,63,128,0.18) 0%, transparent 70%);
					animation: ab-drift-1 28s ${SMOOTH_EASE} infinite;
				}
				.ab-aurora-2 {
					bottom: 10%;
					right: -5%;
					width: 28rem;
					height: 28rem;
					background: radial-gradient(circle, rgba(245,203,63,0.14) 0%, transparent 70%);
					animation: ab-drift-2 34s ${SMOOTH_EASE} infinite;
				}
				.ab-aurora-3 {
					top: 40%;
					left: 35%;
					width: 24rem;
					height: 24rem;
					background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
					animation: ab-drift-3 31s ${SMOOTH_EASE} infinite;
				}
				.ab-aurora-4 {
					top: 15%;
					right: 20%;
					width: 18rem;
					height: 18rem;
					background: radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%);
					animation: ab-drift-4 36s ${SMOOTH_EASE} infinite;
				}

				@keyframes ab-drift-1 {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
					25%       { transform: translate3d(32px, 24px, 0) scale(1.1); }
					50%       { transform: translate3d(-20px, 44px, 0) scale(1.04); }
					75%       { transform: translate3d(28px, -16px, 0) scale(1.12); }
				}
				@keyframes ab-drift-2 {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
					25%       { transform: translate3d(-42px, -28px, 0) scale(1.12); }
					50%       { transform: translate3d(24px, -42px, 0) scale(1.06); }
					75%       { transform: translate3d(-24px, 20px, 0) scale(1.14); }
				}
				@keyframes ab-drift-3 {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
					33%       { transform: translate3d(28px, 32px, 0) scale(1.1); }
					66%       { transform: translate3d(-24px, -20px, 0) scale(1.05); }
				}
				@keyframes ab-drift-4 {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
					20%       { transform: translate3d(-16px, 24px, 0) scale(1.06); }
					40%       { transform: translate3d(20px, 12px, 0) scale(1.12); }
					60%       { transform: translate3d(-12px, -20px, 0) scale(1.04); }
					80%       { transform: translate3d(24px, -8px, 0) scale(1.1); }
				}

				@keyframes ab-wave-slide {
					from { transform: translateX(0); }
					to   { transform: translateX(-50%); }
				}
				@keyframes ab-wave-slide-rev {
					from { transform: translateX(-50%); }
					to   { transform: translateX(0); }
				}

				@keyframes ab-float-0 {
					0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg);   opacity: 0.15; }
					25%       { transform: translate3d(10px, -14px, 0) rotate(90deg);  opacity: 0.22; }
					50%       { transform: translate3d(-6px, -24px, 0) rotate(180deg); opacity: 0.12; }
					75%       { transform: translate3d(5px, -8px, 0) rotate(270deg);  opacity: 0.18; }
				}
				@keyframes ab-float-1 {
					0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg);   opacity: 0.12; }
					33%       { transform: translate3d(-12px, -20px, 0) rotate(120deg); opacity: 0.2; }
					66%       { transform: translate3d(8px, -12px, 0) rotate(240deg);  opacity: 0.1; }
				}
				@keyframes ab-float-2 {
					0%, 100% { transform: translate3d(0, 0, 0) scale(1);   opacity: 0.18; }
					50%       { transform: translate3d(16px, -18px, 0) scale(1.22); opacity: 0.11; }
				}
				@keyframes ab-float-3 {
					0%, 100% { transform: translate3d(0, 0, 0) rotate(45deg);  opacity: 0.14; }
					25%       { transform: translate3d(-8px, -16px, 0) rotate(135deg); opacity: 0.22; }
					75%       { transform: translate3d(12px, 8px, 0) rotate(315deg);   opacity: 0.11; }
				}

				@keyframes ab-dots-pulse {
					0%, 100% { opacity: 0.038; }
					50%       { opacity: 0.058; }
				}

				@media (prefers-reduced-motion: reduce) {
					.ab-aurora { animation: none !important; }
				}
			`}</style>
		</div>
	);
};

export default UltimateAnimatedBackground;
