module.exports = {
  // 基本路径
  baseUrl: './',
  outputDir: 'dist',
  pages: { 
    main:
      { template: './public/index.html',
        entry: './src/main.ts',
        filename: 'main.html' 
      },
    mod0:
      { template: './public/index.html',
        entry: './pages/zeropage/main.ts',
        filename: 'zero.html' 
      },

    }
}