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
      alias: {
        ['~']: path.resolve(__dirname),
        app: path.resolve(__dirname, 'app'),
        css: path.resolve(__dirname, 'app/dist/css'),
        js: path.resolve(__dirname, 'app/dist/js'),
        actions: path.resolve(__dirname, 'app/redux/actions'),
        components: path.resolve(__dirname, 'app/components'),
        config: path.resolve(__dirname, 'app/config'),
        containers: path.resolve(__dirname, 'app/containers'),
        hoc: path.resolve(__dirname, 'app/hoc'),
        reducers: path.resolve(__dirname, 'app/redux/reducers'),
        sagas: path.resolve(__dirname, 'app/redux/sagas'),
        utils: path.resolve(__dirname, 'app/utils'),
      }
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