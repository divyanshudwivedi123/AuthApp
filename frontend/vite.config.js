import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://authapp-zeu0.onrender.com',
        changeOrigin: true,
        secure: false
      },
    },
  },
  plugins: [react()],
});
