import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Change "my-portfolio" to your repo name
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/',
});
