const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./www",
        hot: true,
        historyApiFallback: true,
        host: process.env.HOST || 'localhost',
        port: process.env.PORT || 1990,
    },
    plugins: [
        
        // set 'process.env.NODE_ENV'
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'global.GENTLY' : false,
            'process.env.API_END_POINT': JSON.stringify('http://localhost:4000/'),
        }),

        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),
    ]
})