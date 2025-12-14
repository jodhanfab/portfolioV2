/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				orbit: 'orbit calc(var(--duration)*1s) linear infinite',
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
				grid: 'grid 15s linear infinite'
			},
			keyframes: {
				'border-beam': {
					'100%': {
						'offset-distance': '100%'
					}
				},
				grid: {
					'0%': { transform: 'translateY(-50%)' },
					'100%': { transform: 'translateY(0)' }
				},
				orbit: {
					'0%': {
						transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
					}
				}
			}
		}
	},
	plugins: []
};
