import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    host: '0.0.0.0', // Important: allows access from external devices
    port: 5173,
    allowedHosts: ['204d527c32bb.ngrok-free.app'],
  }
})
