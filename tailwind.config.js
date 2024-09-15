/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(246, 80%, 60%)",
        neutral_hover: "#33397A",
        primary_work: "#FF8C65",
        primary_play: "hsl(195, 74%, 62%)",
        primary_study: "hsl(348, 100%, 68%)",
        primary_exercise: "hsl(145, 58%, 55%)",
        primary_social: "hsl(264, 64%, 52%)",
        primary_selfCare: "hsl(43, 84%, 65%)",
        neutral_veryDark: "hsl(226, 43%, 10%)",
        neutral_darkBlue: "hsl(235, 46%, 20%)",
        neutral_desaturated: "hsl(235, 45%, 61%)",
        neutral_paleBlue: "hsl(236, 100%, 87%)",
      },
      keyframes: {
        "zoom-in": {
          "0%": {
            opacity: 0,
            transform: "scale3d(0.3, 0.3, 0.3)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale3d(1.1, 1.1, 1.1)",
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation:{
        zoomIn: 'zoom-in 1s ease-out 0s 1',
      }
    },
  },
  plugins: [],
};
