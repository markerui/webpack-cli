module.exports = {
    // parser: 'sugarss',
    plugins: [
        require('autoprefixer'),
        require('postcss-minify-gradients'),
        require('postcss-minify-selectors'),
        require('postcss-minify-font-values'),
        require('postcss-import')
    ]
}