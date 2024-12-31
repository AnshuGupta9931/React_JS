import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1', // Bind explicitly to 127.0.0.1
    port: 5173,        // Ensure the port matches your setup (default: 5173)
  },
})
