/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-blue': {
                    DEFAULT: '#0F2B5C',
                    dark: '#0A1E40',
                    light: '#183C7A',
                },
                'brand-green': {
                    DEFAULT: '#0D9488',
                    dark: '#0F766E',
                    light: '#14B8A6',
                }
            }
        },
    },
    plugins: [],
}