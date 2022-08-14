/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '974px',
      xl: '1440px',
    },

    colors: {
      'primary': '#00934B',
      'red': '#F42A41',
      'secondary':'#008041',
      'green': '#13ce66',
      'white': '#fff',
      'gray-dark': '#273444',
      'black': '#000',
      'gray-light': '#d3dce6',
    },

    fontSize: {
      'mdp': '1rem',
      'mdh': '2rem',
      'smh': '1rem',
      'smp': '.5rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },

    fontFamily: {
    
    }
 
  },
  plugins: [],
}
