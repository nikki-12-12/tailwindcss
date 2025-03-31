module.exports = {
    content: [
      './src/**/*.html',
      './src/**/*.js',
      // Agrega aquí otros paths si es necesario
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('@tailwindcss/forms'), // Plugin para formularios
      require('@tailwindcss/typography'), // Plugin para tipografía
    ],
  }