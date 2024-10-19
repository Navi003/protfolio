/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'primary-10': '#FFEFD4',
  			'primary-20': '#FFCF7F',
  			'primary-30': '#FFBF54',
  			'primary-40': '#FFAF29',
  			'primary-50': '#FFAF29',
  			'primary-60': '#E69E25',
  			'primary-70': '#B37A1D',
  			'primary-80': '#805815',
  			'primary-90': '#4C340C',
  			'primary-100': '#332308',
  			'primary-110': '#191104',
  			'secondary-10': '#E7F0F5',
  			'secondary-20': '#E7F0F5',
  			'secondary-30': '#9EC2D7',
  			'secondary-40': '#86B3CD',
  			'secondary-50': '#5595B8',
  			'secondary-60': '#3D85AE',
  			'secondary-70': '#0C679A',
  			'secondary-80': '#08486C',
  			'secondary-90': '#06344D',
  			'secondary-100': '#02151F',
  			'secondary-110': '#010A0F',
  			'base-dark': '#0B0A0A',
  			'base-light': '#333646',
  			'base-medium': '#20222E',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
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
};
