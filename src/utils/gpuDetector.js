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
				rendererLower.includes(keyword) || vendorLower.includes(keyword)
		);

		// Cek integrated GPU
		const isIntegrated = integratedKeywords.some(
			(keyword) =>
				rendererLower.includes(keyword) || vendorLower.includes(keyword)
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
 * Mendapatkan konfigurasi animasi berdasarkan GPU
 */
export const getAnimationConfig = (gpuInfo) => {
	const { type, tier } = gpuInfo;

	if (type === 'dedicated') {
		// Dedicated GPU - Full animasi
		return {
			particleCount: 6,
			enableCanvasParticles: true,
			enableBlobAnimations: true,
			enableSVGWaves: true,
			blobAnimationDuration: 20,
			enableGlowEffects: true,
			enableMouseInteraction: true,
			enableGradientMeshAnimation: true,
		};
	} else if (type === 'integrated' && tier === 'medium') {
		// Integrated GPU medium (Iris Xe, Adreno 6/7) - Animasi bagus dengan optimasi
		return {
			particleCount: 5,
			enableCanvasParticles: true,
			enableBlobAnimations: true,
			enableSVGWaves: true,
			blobAnimationDuration: 30, // Lebih lama = lebih smooth, kurang berat
			enableGlowEffects: true,
			enableMouseInteraction: true,
			enableGradientMeshAnimation: true,
		};
	} else {
		// Integrated GPU low atau GPU lemah - Animasi tetap bagus tapi lebih ringan
		return {
			particleCount: 4, // Sedikit lebih banyak dari sebelumnya
			enableCanvasParticles: true,
			enableBlobAnimations: true, // Tetap enable tapi dengan optimasi
			enableSVGWaves: true, // Tetap enable
			blobAnimationDuration: 35, // Lebih lama = lebih smooth, kurang berat GPU
			enableGlowEffects: true, // Tetap enable
			enableMouseInteraction: true, // Tetap enable
			enableGradientMeshAnimation: true, // Tetap enable
		};
	}
};
