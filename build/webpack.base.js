const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueLoaderConf = require('./vue-loader.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const hljs = require('highlight.js')

module.exports = {
    entry: {
        app: './src/main.js',
        // vendor2: ['vue', 'vue-router', 'axios']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss', '.less', '.css'],
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
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    // {
                    //     loader: 'css-loader',
                    //     options: {
                    //         modules: true,
                    //         localIdentName: '[local]_[hash:base64:8]'
                    //     }
                    // },
                    'postcss-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'images/[name].[hash:7].[ext]',
                    }
                }]
            },
            {
                test: /\.(woff2|woff|eot|ttf|otf|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'fonts/[name].[hash:7].[ext]',
                    }
                }]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'media/[name].[hash:7].[ext]',
                }
            },
            {
                test: /\.md$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    'vue-loader',
                    {
                        loader: 'markdown-to-vue-loader',
                        options: {
                            componentNamespace: 'mkui',
                            componentWrapper: '<section class="mkui-demo"></section>',
                            tableClass: 'mkui-table',
                            preClass: 'mkui-code',
                            markdownItOptions: {
                                typographer: false,
                                highlight(str, lang) {
                                    if (lang && hljs.getLanguage(lang)) {
                                        try {
                                            return hljs.highlight(lang, str).value;
                                        } catch (__) {}
                                    }
                                    return ''; // use external default escaping
                                }
                            }
                        },
                    },
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        })
    ]

};