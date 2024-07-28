/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./views/*.twig', './views/**/*.twig'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        fontFamily: {
            primary: ['Gill Sans', 'sans-serif'],
        },
        extend: {},
        colors: {
            'light-green': '#C6D92C',
            'dark-green': '#003C3F',
        },
    },
    plugins: [],
};
