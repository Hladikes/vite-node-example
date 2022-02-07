// vite.config.js
const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'MyLib',
      formats: ['cjs'],
      fileName: (format) => `main.${format}.js`,
    },
    rollupOptions: {
      external: ['fs', 'axios']
    }
  }
})