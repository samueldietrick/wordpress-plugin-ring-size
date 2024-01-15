import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.111', // Define o endereço IP (0.0.0.0 significa qualquer IP disponível na máquina)
    port: 8080, // Define a porta desejada
  },
})
