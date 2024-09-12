import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'resources/js', // This is where your source files are located
  build: {
    outDir: '../../public/build', // Output directory for the build files
    emptyOutDir: true, // Clear the output directory before building
    rollupOptions: {
      input: {
        main: 'resources/js/index.js' // Your entry point file
      }
    }
  },
});
