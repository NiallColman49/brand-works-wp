module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('@fullhuman/postcss-purgecss')({
            content: ['./views/*.twig', './views/**/*.twig'],
            defaultExtractor: (content) =>
                content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
    ],
};
