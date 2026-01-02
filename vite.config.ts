import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // This ensures assets work correctly on GitHub Pages
  build: {
    outDir: 'dist',
  },
  define: {
    // Vite does not define `process.env` by default, so we define it to avoid "process is not defined" errors
    'process.env': {}
  }
});
