/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            // oswald: '"Oswald", sans-serif',
            // didact: '"Didact Gothic", sans-serif',
         },
         colors: {
            // ourAsh: "#a9a9a9", // Ash
            ourBlack: `#1D232A`, // Black
            ourPrimary: "#DDB263", // Gold
            ourDeeperGold: "#8E6D45",
            // ourLighterBlack: "#1B1B1B",
         },
      },
   },
   plugins: [require("daisyui")],
};
