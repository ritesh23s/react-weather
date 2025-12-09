import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Important for github pages deployment
export default defineConfig({
  plugins: [react()],
  base: '/react-weather/'
})