import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative base → the same build works on a GitHub Pages subpath
  // (username.github.io/repo/) and later on a root custom domain.
  base: './',
  plugins: [react()],
})
