/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    './App.tsx',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './navigation/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      backgroundImage: {
        'fit-gradient': `
          radial-gradient(282.64% 106.92% at 0% 100%, rgba(33, 196, 93, 0.05) 0%, rgba(33, 196, 93, 0) 50%),
          radial-gradient(282.64% 106.92% at 100% 0%, rgba(33, 196, 93, 0.15) 0%, rgba(33, 196, 93, 0) 60%)
        `,
      },
    },
  },
  plugins: [],
};
