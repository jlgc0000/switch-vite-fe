import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#f0fdf4",
          "100": "#dcfce7",
          "200": "#bbf7d0",
          "300": "#86efac",
          "400": "#4ade80",
          "500": "#22c55e",
          "600": "#16a34a",
          "700": "#15803d",
          "800": "#166534",
          "900": "#14532d",
          "950": "#052e16",
        },
      },
      backgroundImage: {
        "tech-pattern": "url('./assets/images/tech.jpg')",
        "fibr-pattern": "url('./assets/images/fibr.jpg')",
        "help-pattern": "url('./assets/images/help.png')",
        "server-pattern": "url('./assets/images/server.jpg')",
        "banner-pattern": "url('./assets/images/banner.png')",
        "contact-pattern": "url('./assets/images/contact.jpg')",
      },
      textShadow: {
        glow: "0 0 8px white",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        ".text-glow": {
          textShadow: "0 0 8px white",
        },
        ".hover\\:text-glow:hover": {
          textShadow: "0 0 8px white",
        },
      });
    },
  ],
};
