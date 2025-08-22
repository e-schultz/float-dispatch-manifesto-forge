
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// FLOAT.dispatch imprint colors (HSL format)
				techcraft: {
					DEFAULT: "210 100% 7%",      /* #0a1520 converted to HSL */
					accent: "210 66% 53%",       /* #4A90E2 converted to HSL */
					light: "210 85% 76%",        /* #8AB4F8 converted to HSL */
					border: "210 66% 53%"        /* #4A90E2 with opacity handled by Tailwind */
				},
				sigil: {
					DEFAULT: "0 0% 0%",          /* #000000 */
					accent: "331 66% 53%",       /* #E24A90 converted to HSL */
					light: "331 100% 70%",       /* #ff6eb4 converted to HSL */
					border: "331 66% 53%"        /* #E24A90 with opacity handled by Tailwind */
				},
				activate: {
					DEFAULT: "0 0% 0%",          /* #000000 */
					accent: "162 100% 50%",      /* #00ff9f converted to HSL */
					border: "162 100% 50%"       /* #00ff9f with opacity handled by Tailwind */
				},
				interface: {
					DEFAULT: "0 0% 0%",          /* #000000 */
					accent: "267 100% 50%",      /* #8b00ff converted to HSL */
					border: "267 100% 50%"       /* #8b00ff with opacity handled by Tailwind */
				},
				// Cyberpunk zine colors using HSL variables
				'sigil-light': 'hsl(var(--sigil-light))',
				'sigil-accent': 'hsl(var(--sigil-accent))',
				'sigil-error': 'hsl(var(--sigil-error))',
				'sigil-boundary': 'hsl(var(--sigil-boundary))',
				'sigil-dim': 'hsl(var(--sigil-dim))',
				
				// Shadow Walker colors
				'shadow-purple': 'hsl(var(--shadow-purple))',
				'contradiction-red': 'hsl(var(--contradiction-red))',
				'paradox-cyan': 'hsl(var(--paradox-cyan))',
				'extraction-gold': 'hsl(var(--extraction-gold))',
				'contamination-green': 'hsl(var(--contamination-green))'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'scan-line': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' }
				},
				'glitch': {
					'0%, 100%': { opacity: '0.1' },
					'50%': { opacity: '0.3' }
				},
				'spin-slow': {
					'from': { transform: 'rotate(0deg)' },
					'to': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'scan-line': 'scan-line 8s linear infinite',
				'glitch': 'glitch 4s ease-in-out infinite',
				'spin-slow': 'spin-slow 10s linear infinite'
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
