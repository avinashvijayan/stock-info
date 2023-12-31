const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      async_hooks: false,
      fs: false,
      net: false
    }
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node'
}
