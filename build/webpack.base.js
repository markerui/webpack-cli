const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueLoaderConf = require('./vue-loader.conf')

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: "vue-loader",
                options: VueLoaderConf
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.(css|sass|less)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
        // new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //     title: 'Prodution'
        // })
    ]

};