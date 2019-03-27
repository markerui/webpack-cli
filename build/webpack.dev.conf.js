const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        clientLogLevel: 'none',
        historyApiFallback: {
            rewrites: [{
                from: /.*/,
                to: '/index.html'
            }]
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        })
    ]
})