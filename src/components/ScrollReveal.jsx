import { motion, useReducedMotion } from 'framer-motion';

/**
 * Muncul saat masuk viewport, redup/naik saat keluar (once: false).
 * Hemat beban: hanya animasi transform + opacity (GPU-friendly).
 */
export default function ScrollReveal({
	children,
	className = '',
	style,
	variant = 'fadeUp',
	delay = 0,
	duration = 0.42,
	amount = 0.12,
	y = 26,
}) {
	const reduceMotion = useReducedMotion();

	const x = Math.min(48, Math.max(24, y * 1.6));
	const presets = {
		fadeUp: { hidden: { opacity: 0, y }, visible: { opacity: 1, y: 0 } },
		fadeDown: { hidden: { opacity: 0, y: -y }, visible: { opacity: 1, y: 0 } },
		fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
		fadeLeft: { hidden: { opacity: 0, x: -x }, visible: { opacity: 1, x: 0 } },
		fadeRight: { hidden: { opacity: 0, x }, visible: { opacity: 1, x: 0 } },
		scale: {
			hidden: { opacity: 0, scale: 0.96, y: y * 0.35 },
			visible: { opacity: 1, scale: 1, y: 0 },
		},
	};

	const preset = presets[variant] || presets.fadeUp;

	if (reduceMotion) {
		return (
			<div className={className} style={style}>
				{children}
			</div>
		);
	}

	return (
		<motion.div
			className={className}
			style={style}
			initial={preset.hidden}
			whileInView={preset.visible}
			viewport={{
				once: false,
				amount,
				margin: '0px 0px -7% 0px',
			}}
			transition={{
				duration,
				delay,
				ease: [0.33, 0, 0.2, 1],
			}}>
			{children}
		</motion.div>
	);
}
