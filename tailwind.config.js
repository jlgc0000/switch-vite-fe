import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#22c55e","600":"#16a34a","700":"#15803d","800":"#166534","900":"#14532d","950":"#052e16"}
      },
      backgroundImage: {
        'tech-pattern': "url('./src/assets/images/tech.jpg')",
        'fibr-pattern': "url('./src/assets/images/fibr.jpg')",
        'help-pattern': "url('./src/assets/images/help.png')",
        'server-pattern': "url('./src/assets/images/server.jpg')",
        'banner-pattern': "url('./src/assets/images/banner.png')",
        'contact-pattern': "url('./src/assets/images/contact.jpg')"
      
      }
    },
  },
  plugins: [flowbite.plugin()],
};
