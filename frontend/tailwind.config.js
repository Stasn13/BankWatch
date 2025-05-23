/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			'spin-loader': 'spin 1200ms linear infinite'
  		},
  		colors: {
  			'ui-accent': {
  				'400': 'rgb(var(--ui-accent-400))',
  				'500': 'rgb(var(--ui-accent-500))',
  				'600': 'rgb(var(--ui-accent-600))',
  				'500-50': 'rgba(var(--ui-accent-500), 0.5)',
  				'500-40': 'rgba(var(--ui-accent-500), 0.4)',
  				'500-20': 'rgba(var(--ui-accent-500), 0.2)'
  			},
  			neutral: {
  				'10': '#ffffff',
  				'50': '#fafafa',
  				'100': '#f5f5f5',
  				'200': '#E5E5E5',
  				'300': '#D4D4D4',
  				'400': '#A3A3A3',
  				'500': '#6B6B6D',
  				'600': '#525252',
  				'700': '#404040',
  				'800': '#262626',
  				'900': '#171717',
  				'1000': '#0A0A0A'
  			},
  			brand: {
  				'50': '#FFF7ED',
  				'100': '#FFEDD5',
  				'200': '#FED7AA',
  				'300': '#FDBA74',
  				'400': '#FB923C',
  				'500': '#F97316',
  				'600': '#EA580C',
  				'700': '#C2410C',
  				'800': '#9A3412',
  				'900': '#7C2D12',
  				'950': '#431407'
  			},
  			blue: {
  				'50': '#E5F4FF',
  				'100': '#C4DDF2',
  				'200': '#A6C4E8',
  				'300': '#8DAFE2',
  				'400': '#6F96CE',
  				'500': '#4F82DB',
  				'600': '#2F62C6',
  				'700': '#1C49AF',
  				'800': '#1E3268',
  				'900': '#13234C',
  				'950': '#081530'
  			},
  			error: {
  				'50': '#FEF2F2',
  				'100': '#FEE2E2',
  				'200': '#FECACA',
  				'300': '#FCA5A5',
  				'400': '#F87171',
  				'500': '#EF4444',
  				'600': '#DC2626',
  				'700': '#B91C1C',
  				'800': '#991B1B',
  				'900': '#7F1D1D',
  				'950': '#450A0A'
  			},
  			success: {
  				'50': '#F0FDF4',
  				'100': '#DCFCE7',
  				'200': '#BBF7D0',
  				'300': '#86EFAC',
  				'400': '#4ADE80',
  				'500': '#22C55E',
  				'600': '#16A34A',
  				'700': '#15803D',
  				'800': '#166534',
  				'900': '#14532D',
  				'950': '#052E16'
  			},
  			warning: {
  				'50': '#FEFCE8',
  				'100': '#FEF9C3',
  				'200': '#FEF08A',
  				'300': '#FDE047',
  				'400': '#FACC15',
  				'500': '#EAB308',
  				'600': '#CA8A04',
  				'700': '#A16207',
  				'800': '#854D0E',
  				'900': '#713F12',
  				'950': '#422006'
  			},
  			purple: {
  				'50': '#F9EBFF',
  				'100': '#F1D6FD',
  				'200': '#E2ADFB',
  				'300': '#D484F9',
  				'400': '#C55BF7',
  				'500': '#B732F5',
  				'600': '#9228C4',
  				'700': '#6E1E93',
  				'800': '#491462',
  				'900': '#250A31',
  				'950': '#1A0423'
  			},
  			pink: {
  				'500': '#FF44D4'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'theme-primary': {
  				DEFAULT: 'var(--theme-primary)',
  				text: 'var(--theme-primary-text)',
  				hover: 'var(--theme-primary-hover)',
  				active: 'var(--theme-primary-active)',
  				focus: 'var(--theme-primary-focus)',
  				'outline-hover': 'var(--theme-primary-outline-hover)'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				text: 'var(--primary-text)',
  				hover: 'var(--primary-hover)',
  				active: 'var(--primary-active)',
  				focus: 'var(--primary-focus)',
  				badge: 'var(--primary-badge)',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				text: 'var(--secondary-text)',
  				hover: 'var(--secondary-hover)',
  				focus: 'var(--secondary-focus)',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				text: 'var(--destructive-text)',
  				hover: 'var(--destructive-hover)',
  				active: 'var(--destructive-active)',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			accept: {
  				DEFAULT: 'var(--accept)'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				text: 'var(--muted-text)',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				text: 'var(--accent-text)',
  				active: 'var(--accent-active)',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			ghost: 'var(--ghost)',
  			invert: 'var(--invert)',
  			'dialog-overlay': 'rgba(23, 23, 23, 0.50)',
  			'card-secondary-text': 'var(--card-secondary-text)',
  			'card-opacity-background': 'var(--card-opacity-background)',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

