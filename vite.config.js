import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Optimization for production build
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
