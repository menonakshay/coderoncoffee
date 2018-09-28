const path = require('path')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
// const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
    src: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'www'),
}

module.exports = {
    entry: [ 'babel-polyfill', PATHS.src + '/index.js'],
    
    output: {
      path: PATHS.build,
      filename : 'bundle.js'
    },

    node: {
        fs: "empty"
    },

    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      // alias: {
      //   ['~']: path.resolve(__dirname),
      //   app: path.resolve(__dirname, 'app')
      // }
    },

    module: {
        rules : [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
          },
          {
              test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
              loader: 'url-loader?limit=100000&name=[name].[ext]'
          }
        ]
    }
}