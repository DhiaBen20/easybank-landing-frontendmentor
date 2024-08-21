import defaulTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{tsx,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Public Sans', ...defaulTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    'green': 'hsl(136 65% 51% / <alpha-value>)',
                    'cyan': 'hsl(192 70% 51% / <alpha-value>)',
                    'blue': 'hsl(233 26% 24% / <alpha-value>)',
                }
            }
        },
    },
    plugins: [],
};
