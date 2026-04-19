/**
 * Deteksi GPU untuk optimasi performa animasi
 * Menggunakan WebGL untuk mendeteksi apakah GPU adalah dedicated atau integrated
 */

export const detectGPU = () => {
	try {
		const canvas = document.createElement('canvas');
		const gl =
			canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

		if (!gl) {
			// WebGL tidak tersedia, asumsikan integrated/low-end
			return {
				type: 'integrated',
				renderer: 'unknown',
				vendor: 'unknown',
				tier: 'low',
			};
		}

		const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
		if (!debugInfo) {
			// Extension tidak tersedia, coba deteksi dengan cara lain
			return {
				type: 'unknown',
				renderer: 'unknown',
				vendor: 'unknown',
				tier: 'medium',
			};
		}

		const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
		const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);

		// Deteksi berdasarkan renderer string
		const rendererLower = renderer.toLowerCase();
		const vendorLower = vendor.toLowerCase();

		// Keywords untuk dedicated GPU
		const dedicatedKeywords = [
			'nvidia',
			'geforce',
			'rtx',
			'gtx',
			'amd',
			'radeon',
			'rx',
			'intel arc',
			'intel iris xe',
			'adreno 6', // High-end mobile GPU
			'adreno 7', // High-end mobile GPU
			'apple gpu', // Apple Silicon
			'm1',
			'm2',
			'm3',
		];

		// Keywords untuk integrated GPU
		const integratedKeywords = [
			'intel hd',
			'intel uhd',
			'intel iris',
			'intel graphics',
			'adreno 5', // Mid-range mobile
			'adreno 4', // Low-end mobile
			'mali', // ARM Mali (usually integrated)
			'powervr', // Usually integrated
			'swiftshader', // Software rendering
			'llvmpipe', // Software rendering
			'mesa', // Software rendering
		];

		let gpuType = 'unknown';
		let tier = 'medium';

		// Cek dedicated GPU
		const isDedicated = dedicatedKeywords.some(
			(keyword) =>
				rendererLower.includes(keyword) || vendorLower.includes(keyword),
		);

		// Cek integrated GPU
		const isIntegrated = integratedKeywords.some(
			(keyword) =>
				rendererLower.includes(keyword) || vendorLower.includes(keyword),
		);

		if (isDedicated) {
			gpuType = 'dedicated';
			tier = 'high';
		} else if (isIntegrated) {
			gpuType = 'integrated';
			// Tentukan tier berdasarkan renderer
			if (
				rendererLower.includes('iris xe') ||
				rendererLower.includes('adreno 6') ||
				rendererLower.includes('adreno 7')
			) {
				tier = 'medium';
			} else {
				tier = 'low';
			}
		} else {
			// Jika tidak terdeteksi, coba deteksi berdasarkan vendor
			if (vendorLower.includes('intel') && !rendererLower.includes('arc')) {
				gpuType = 'integrated';
				tier = 'low';
			} else if (
				vendorLower.includes('nvidia') ||
				vendorLower.includes('amd')
			) {
				gpuType = 'dedicated';
				tier = 'high';
			} else {
				// Default ke integrated untuk safety
				gpuType = 'integrated';
				tier = 'low';
			}
		}

		return {
			type: gpuType,
			renderer: renderer,
			vendor: vendor,
			tier: tier,
		};
	} catch (error) {
		console.warn('GPU detection failed:', error);
		// Default ke integrated untuk safety
		return {
			type: 'integrated',
			renderer: 'unknown',
			vendor: 'unknown',
			tier: 'low',
		};
	}
};

/**
 * Mendapatkan konfigurasi animasi berdasarkan GPU.
 * Lapisan CSS (aurora, wave, bentuk) + tsParticles (interaksi mouse resmi)
 * dengan kepadatan/fps disesuaikan per tier.
 */
export const getAnimationConfig = (gpuInfo) => {
	const { type, tier } = gpuInfo;

	if (type === 'dedicated') {
		return {
			enableTsParticles: true,
			tsParticles: {
				number: 120,
				fpsLimit: 60,
				linkDistance: 148,
				moveSpeed: 0.85,
				grabDistance: 190,
				pushQuantity: 3,
				links: true,
			},
			enableBlobAnimations: true,
			enableSVGWaves: true,
			floatingShapeCount: 8,
			enableMouseParallax: true,
			parallaxStrength: 1,
			enableParallaxSpotlight: true,
		};
	} else if (type === 'integrated' && tier === 'medium') {
		return {
			enableTsParticles: true,
			tsParticles: {
				number: 88,
				fpsLimit: 60,
				linkDistance: 138,
				moveSpeed: 0.65,
				grabDistance: 175,
				pushQuantity: 2,
				links: true,
			},
			enableBlobAnimations: true,
			enableSVGWaves: true,
			floatingShapeCount: 5,
			enableMouseParallax: true,
			parallaxStrength: 0.62,
			enableParallaxSpotlight: false,
		};
	} else {
		return {
			enableTsParticles: true,
			tsParticles: {
				number: 56,
				fpsLimit: 48,
				linkDistance: 124,
				moveSpeed: 0.5,
				grabDistance: 160,
				pushQuantity: 1,
				links: true,
			},
			enableBlobAnimations: true,
			enableSVGWaves: false,
			floatingShapeCount: 3,
			enableMouseParallax: true,
			parallaxStrength: 0.28,
			enableParallaxSpotlight: false,
		};
	}
};
