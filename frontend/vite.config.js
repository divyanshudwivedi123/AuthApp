import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://authapp-u514.onrender.com',
        secure: true,
      },
    },
  },
  plugins: [react()],
});