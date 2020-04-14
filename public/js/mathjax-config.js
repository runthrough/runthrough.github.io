window.MathJax = {
	showProcessingMessages: false,
	extensions: ['tex2jax.js'],
	jax: ['input/TeX', 'output/SVG'],
	tex2jax: {
		inlineMath: [
			['$', '$'],
			['\\(', '\\)'],
		],
		displayMath: [
			['$$', '$$'],
			['\\[', '\\]'],
		],
		processEscapes: true,
		preview: 'none',
		skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
	},
	SVG: {
		font: 'Neo-Euler',
		linebreaks: { automatic: true },
		scale: 90,
		useFontCache: true,
		useGlobalCache: true,
		blacker: 15,
	},
	options: {
		renderActions: {
			addMenu: [],
		},
	},
	'fast-preview': {
		disabled: true,
	},
};
