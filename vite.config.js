import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // The 'base' option is typically for deploying to a sub-path, like on GitHub Pages.
  // Vercel deploys to the root of a domain, so this line is not needed and can cause a 404 error.
  // base: '/my-portfolio/',
});
