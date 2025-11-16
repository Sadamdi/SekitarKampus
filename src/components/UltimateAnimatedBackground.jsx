import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { umkmData } from '../data/umkm';
import { detectGPU, getAnimationConfig } from '../utils/gpuDetector';

const UltimateAnimatedBackground = () => {
	const canvasRef = useRef(null);
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const particlesRef = useRef([]);
	const imagesRef = useRef([]);
	const animationFrameRef = useRef();
	const [isMobile, setIsMobile] = useState(false);
	const [animationConfig, setAnimationConfig] = useState(null);

	// Detect mobile device
	useEffect(() => {
		const checkMobile = () => {
			const isMobileDevice =
				window.innerWidth < 768 ||
				/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					navigator.userAgent
				);
			setIsMobile(isMobileDevice);
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	// Detect GPU and set animation config
	useEffect(() => {
		const gpu = detectGPU();
		const config = getAnimationConfig(gpu);
		setAnimationConfig(config);

		// Log untuk debugging (bisa dihapus di production)
		console.log('GPU Info:', gpu);
		console.log('Animation Config:', config);
	}, []);

	// Get unique UMKM images
	const umkmImages = umkmData
		.filter((umkm) => umkm.images && umkm.images.length > 0)
		.map((umkm) => umkm.images[0])
		.slice(0, 12); // Limit to 12 images for performance

	// Track mouse position (only on desktop and if enabled)
	useEffect(() => {
		if (isMobile || !animationConfig || !animationConfig.enableMouseInteraction)
			return;

		const handleMouseMove = (e) => {
			setMousePos({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [isMobile, animationConfig]);

	// Initialize Canvas Particles (disabled on mobile for performance)
	useEffect(() => {
		if (isMobile || !animationConfig || !animationConfig.enableCanvasParticles)
			return;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		const config = animationConfig; // Store config in closure

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			initParticles();
		};

		// Particle class
		class Particle {
			constructor(image, index) {
				this.image = image;
				this.size = 40 + Math.random() * 20; // 40-60px
				this.x = Math.random() * canvas.width;
				this.y = Math.random() * canvas.height;
				this.speedX = (Math.random() - 0.5) * 0.5;
				this.speedY = (Math.random() - 0.5) * 0.5;
				this.opacity = 0.3 + Math.random() * 0.3;
				this.rotation = Math.random() * Math.PI * 2;
				this.rotationSpeed = (Math.random() - 0.5) * 0.02;
			}

			update(mouseX, mouseY) {
				// Mouse interaction - repel particles (only if enabled)
				if (config && config.enableMouseInteraction) {
					const dx = this.x - mouseX;
					const dy = this.y - mouseY;
					const distance = Math.sqrt(dx * dx + dy * dy);
					const minDistance = 150;

					if (distance < minDistance) {
						const force = (minDistance - distance) / minDistance;
						const angle = Math.atan2(dy, dx);
						this.x += Math.cos(angle) * force * 3;
						this.y += Math.sin(angle) * force * 3;
					}
				}

				// Move particles
				this.x += this.speedX;
				this.y += this.speedY;
				this.rotation += this.rotationSpeed;

				// Boundary check
				if (this.x < -this.size) this.x = canvas.width + this.size;
				if (this.x > canvas.width + this.size) this.x = -this.size;
				if (this.y < -this.size) this.y = canvas.height + this.size;
				if (this.y > canvas.height + this.size) this.y = -this.size;
			}

			draw(ctx) {
				if (!this.image.complete) return;

				ctx.save();
				ctx.globalAlpha = this.opacity;
				ctx.translate(this.x, this.y);
				ctx.rotate(this.rotation);

				// Draw circular clipped image
				ctx.beginPath();
				ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
				ctx.closePath();
				ctx.clip();

				ctx.drawImage(
					this.image,
					-this.size / 2,
					-this.size / 2,
					this.size,
					this.size
				);

				ctx.restore();

				// Optional: Add glow effect (only if enabled)
				if (config && config.enableGlowEffects) {
					ctx.save();
					ctx.globalAlpha = this.opacity * 0.5;
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.size / 2 + 2, 0, Math.PI * 2);
					ctx.strokeStyle = '#f5cb3f';
					ctx.lineWidth = 2;
					ctx.stroke();
					ctx.restore();
				}
			}
		}

		// Load images
		const loadImages = () => {
			imagesRef.current = umkmImages.map((src) => {
				const img = new Image();
				img.crossOrigin = 'anonymous';
				img.src = src;
				return img;
			});
		};

		// Initialize particles (count based on GPU capability)
		const initParticles = () => {
			particlesRef.current = [];
			const particleCount = config
				? Math.min(umkmImages.length, config.particleCount)
				: 3; // Default to 3 if config not ready

			imagesRef.current.forEach((img, index) => {
				if (index < particleCount) {
					particlesRef.current.push(new Particle(img, index));
				}
			});
		};

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particlesRef.current.forEach((particle) => {
				particle.update(mousePos.x, mousePos.y);
				particle.draw(ctx);
			});

			animationFrameRef.current = requestAnimationFrame(animate);
		};

		loadImages();
		resizeCanvas();

		// Wait for images to load before starting animation
		Promise.all(
			imagesRef.current.map(
				(img) =>
					new Promise((resolve) => {
						if (img.complete) resolve();
						else img.onload = resolve;
					})
			)
		).then(() => {
			animate();
		});

		window.addEventListener('resize', resizeCanvas);

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, [umkmImages, mousePos, isMobile, animationConfig]);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
			{/* Animated Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-custom-bg via-blue-50 to-custom-bg dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
				{animationConfig && animationConfig.enableGradientMeshAnimation ? (
					<div className="absolute inset-0 bg-gradient-mesh-animated opacity-40"></div>
				) : (
					<div
						className="absolute inset-0 opacity-40"
						style={{
							background:
								'radial-gradient(circle at 20% 50%, rgba(28, 63, 128, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 203, 63, 0.12) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
						}}></div>
				)}
			</div>

			{/* Canvas for UMKM Image Particles (hidden on mobile or if disabled) */}
			{!isMobile &&
				animationConfig &&
				animationConfig.enableCanvasParticles && (
					<canvas
						ref={canvasRef}
						className="absolute inset-0 w-full h-full"
						style={{ mixBlendMode: 'normal' }}
					/>
				)}

			{/* Liquid Blob Shapes - Morphing (animated for dedicated GPU, static for integrated) */}
			{!isMobile && animationConfig && animationConfig.enableBlobAnimations ? (
				<>
					<motion.div
						className="absolute top-20 -left-32 w-96 h-96 rounded-full blur-3xl"
						style={{
							background:
								'radial-gradient(circle, rgba(28,63,128,0.15) 0%, transparent 70%)',
						}}
						animate={{
							scale: [1, 1.3, 1.1, 1],
							x: [0, 50, -30, 0],
							y: [0, 30, -20, 0],
							borderRadius: [
								'60% 40% 30% 70%',
								'30% 60% 70% 40%',
								'50% 50% 50% 50%',
								'60% 40% 30% 70%',
							],
						}}
						transition={{
							duration: animationConfig.blobAnimationDuration || 20,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>

					<motion.div
						className="absolute bottom-32 -right-32 w-[30rem] h-[30rem] rounded-full blur-3xl"
						style={{
							background:
								'radial-gradient(circle, rgba(245,203,63,0.12) 0%, transparent 70%)',
						}}
						animate={{
							scale: [1, 1.2, 1.4, 1],
							x: [0, -60, 40, 0],
							y: [0, -40, 30, 0],
							borderRadius: [
								'40% 60% 70% 30%',
								'70% 30% 50% 50%',
								'50% 50% 30% 70%',
								'40% 60% 70% 30%',
							],
						}}
						transition={{
							duration: (animationConfig.blobAnimationDuration || 20) + 5,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>

					<motion.div
						className="absolute top-1/2 left-1/2 w-[25rem] h-[25rem] rounded-full blur-3xl"
						style={{
							background:
								'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)',
							transform: 'translate(-50%, -50%)',
						}}
						animate={{
							scale: [1, 1.5, 1.2, 1],
							rotate: [0, 180, 360],
							borderRadius: [
								'50% 50% 50% 50%',
								'30% 70% 70% 30%',
								'70% 30% 30% 70%',
								'50% 50% 50% 50%',
							],
						}}
						transition={{
							duration: (animationConfig.blobAnimationDuration || 20) + 10,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
					/>
				</>
			) : (
				// Static blobs for mobile or integrated GPU
				<>
					<div
						className="absolute top-20 -left-32 w-64 h-64 rounded-full blur-3xl opacity-30"
						style={{
							background:
								'radial-gradient(circle, rgba(28,63,128,0.1) 0%, transparent 70%)',
						}}
					/>
					<div
						className="absolute bottom-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-20"
						style={{
							background:
								'radial-gradient(circle, rgba(245,203,63,0.08) 0%, transparent 70%)',
						}}
					/>
				</>
			)}

			{/* Wave Shapes - Animated SVG (disabled on mobile or integrated GPU) */}
			{!isMobile && animationConfig && animationConfig.enableSVGWaves && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.08 }}
					transition={{ duration: 1 }}
					className="absolute top-0 left-0 w-full">
					<svg
						viewBox="0 0 1440 320"
						className="w-full h-auto"
						preserveAspectRatio="none">
						<motion.path
							fill="#1c3f80"
							fillOpacity="0.3"
							d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
							animate={{
								d: [
									'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
									'M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,117.3C960,128,1056,128,1152,106.7C1248,85,1344,43,1392,21.3L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
									'M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z',
								],
							}}
							transition={{
								duration: 15,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						/>
					</svg>
				</motion.div>
			)}

			{/* Gradient Mesh Animation CSS */}
			<style jsx>{`
				.bg-gradient-mesh-animated {
					background: radial-gradient(
							circle at 20% 50%,
							rgba(28, 63, 128, 0.15) 0%,
							transparent 50%
						),
						radial-gradient(
							circle at 80% 80%,
							rgba(245, 203, 63, 0.12) 0%,
							transparent 50%
						),
						radial-gradient(
							circle at 40% 20%,
							rgba(59, 130, 246, 0.1) 0%,
							transparent 50%
						);
					animation: gradient-mesh-move 20s ease infinite;
				}

				@keyframes gradient-mesh-move {
					0%,
					100% {
						background-position: 0% 0%, 100% 100%, 50% 0%;
						background-size: 50% 50%, 60% 60%, 40% 40%;
					}
					33% {
						background-position: 100% 100%, 0% 0%, 100% 50%;
						background-size: 60% 60%, 50% 50%, 50% 50%;
					}
					66% {
						background-position: 50% 50%, 50% 0%, 0% 100%;
						background-size: 40% 40%, 70% 70%, 45% 45%;
					}
				}
			`}</style>
		</div>
	);
};

export default UltimateAnimatedBackground;
