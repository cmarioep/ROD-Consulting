
export default {
  base: '/',
  resolve: {
    alias: {
      '~bootstrap': './node_modules/bootstrap',
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
}