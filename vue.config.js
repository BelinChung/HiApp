const backEndServer = 'https://raw.githubusercontent.com'

module.exports = {
  runtimeCompiler: true,
  publicPath: '',
  outputDir: 'www',
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: backEndServer,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/BelinChung/api-mock/master/HiApp',
        },
      }
    }
  }
}
