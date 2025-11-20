import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_GEMINI_API_KEY':
      mode === 'development'
        ? `"${process.env.VITE_GEMINI_API_KEY}"`
        : undefined,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lucide: ['lucide-react'],
        },
      },
    },
  },
}));