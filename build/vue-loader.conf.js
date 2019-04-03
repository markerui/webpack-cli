'use strict'

module.exports = {
    hotReload: true,
    transformAssetUrls: {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href'
    }
}