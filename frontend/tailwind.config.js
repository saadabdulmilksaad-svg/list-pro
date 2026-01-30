/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  extend: {
  colors: {
    bg: "#0B0F19",          // خلفية داكنة
    card: "#111827",        // الكروت
    primary: "#6366F1",     // بنفسجي Neon
    secondary: "#22D3EE",   // سماوي
    accent: "#A855F7",      // بنفسجي فاتح
    text: "#E5E7EB",        // نص مريح
    muted: "#9CA3AF",       // نص ثانوي
  },
},

  plugins: [require('@tailwindcss/line-clamp')],
}
