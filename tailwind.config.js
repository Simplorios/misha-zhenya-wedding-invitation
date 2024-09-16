/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,html}'
    ],
    theme: {
        fontFamily: {
            sans: ['EB Garamond', ...fontFamily.sans],
        },
        extend: {
            colors: {
                pink: '#E49EB3',
                gray: '#454545',
            }
        },
    },
    plugins: [],
}

