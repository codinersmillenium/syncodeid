import { defineConfig } from 'vite';
import path from 'path';
import dotenv from 'dotenv'

dotenv.config();

// Vite config
export default defineConfig({
  define: {
    'process.env': process.env
  },
  // Entry point
  root: path.resolve(__dirname, 'src/frontend/assets/view'),

  // Output configuration
  build: {
    outDir: path.resolve(__dirname, 'src/frontend/assets/view/dist'),
    rollupOptions: {
      input: path.resolve(__dirname, 'src/frontend/assets/view/index.html'),
    },
  },

  // Server Development Configuration
  server: {
    open: false,
    port: 3001,
    hot: true,
    watch: {
      usePolling: true,
    },
    fs: {
      strict: false,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
    },
  },

  // Plugin
  plugins: [
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          /<title>(.*?)<\/title>/,
          '<title>Bionec</title>'
        );
      },
    },
  ],

  // Resolve Alias
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});