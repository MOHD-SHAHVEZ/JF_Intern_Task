import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

// Tailwind plugin add kardiya hai.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
