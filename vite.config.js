import { defineConfig } from 'vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  base: './',
  preview: {
    port: 5000
  },
  plugins: [
    imagetools()
  ]
})
