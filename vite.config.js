import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import the new v4 plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Inject it into the pipeline
  ],
  css: {
    devSourcemap: false, 
  },
  build: {
    sourcemap: false,
    minify: 'terser', // Cleaner code reduction engine for strict CSP rules
  },
  server: {
    // Ensures hot reloads run cleanly without injecting eval blocks
    hmr: {
      overlay: false,
    }
  },
  base: '/Portfolio/', // Keep your GitHub Pages sub-path base config
  
})