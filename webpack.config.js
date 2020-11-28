const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/main.js'),
    path.resolve(__dirname, 'src/styles/main.scss'),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/main.min.js'
  },
  module: {
    rules: [{
      test: /\.(scss|css)$/,
      exclude: '/node_modules/',
      use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'css/',
            name: '[name].min.css'
          }
        },
        'sass-loader'
      ]
    }]
  }
};