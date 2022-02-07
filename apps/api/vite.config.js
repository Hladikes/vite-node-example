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
      // Since this is a node application, we don't have to resolve and bundle 
      // dependencies such as fs, axios or express. They will get installed by npm install.
      // Only thing we want to get bundled and resolved is our shared package.
      external: ['fs', 'axios', 'express']
    }
  }
})