const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        // set 'process.env.NODE_ENV'
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'global.GENTLY' : false,
            'process.env.API_END_POINT': JSON.stringify('https://dnxt-node.herokuapp.com/'),
        })      
    ]
    
})
