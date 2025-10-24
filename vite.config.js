import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    target: 'es2020', // desarrollo: navegadores modernos
  },
  build: {
    target: 'es2020', // salida moderna
    modulePreload: { polyfill: false }, // no incluir polyfill para navegadores desactualizados
    cssTarget: ['chrome90', 'edge90', 'firefox90', 'safari14'],
  },
})
