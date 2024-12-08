module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html', 
  ],
  theme: {
    extend: {
      backgroundImage: {
        'crop-price-bg': "url('/BG.jpg')", // Ensure this path matches the location of your image
      },
      colors: {
        green: {
          600: '#4CAF50',
        },
        'forest-green': '#228B22',
      },
      height: {
        '16': '4rem',
      },
      boxShadow: {
        'custom': '0 0 10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
