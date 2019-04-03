const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map',
    module: {
        // rules: [{
        //     test: /\.(sa|sc|le|c)ss$/,
        //     use: [
        //         MiniCssExtractPlugin.loader,
        //         'css-loader',
        //         'sass-loader',
        //         'less-loader',
        //         'postcss-loader'
        //     ],
        // }]
    },
    optimization: {
        minimize: true,
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
                styles: {
                    name: 'styles',
                    test: 'css',
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js($|\?)/i,
                include: /\/src/,
                sourceMap: true,
                parallel: true,
                cache: true,
                uglifyOptions: {
                    ie8: false,
                    ecma: 8,
                },
            }),
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "css/[name].[hash].css",
        //     chunkFilename: "css/[id].[hash].css"
        // })
    ]
})