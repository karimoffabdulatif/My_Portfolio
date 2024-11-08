const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        slate: {
          930: "#020F18", 
        },
      },
      keyframes: {
        fadeInAndClear: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        skewSpin: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        fadeInAndClear: 'fadeInAndClear 0.5s ease-out',
        'skew-spin-once': 'skewSpin 4s linear 1',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
