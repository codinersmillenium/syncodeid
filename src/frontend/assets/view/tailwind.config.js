/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.html", "assets/js/*.js"],
    theme: {
        container: {
            center: true,
            padding: "1rem",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1322px",
            "2xl": "1536px",
        },
        fontFamily: {
            unbounded: ["Unbounded", "cursive"],
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#FFFFFF",
            black: "#000000",
            primary: "#19FB9B",
            secondary: "#A250FF",
            tertiary: "#00B9E9",
        },
        extend: {
            fontSize: {
                lg: ["18px", { lineHeight: "22px" }],
                40: ["40px", { lineHeight: "50px" }],
            },
            zIndex: {
                1: "1",
                5: "5",
            },
            animation: {
                marquee: "marquee 25s linear infinite",
                "spin-slow": "spin 5s linear infinite",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
};
