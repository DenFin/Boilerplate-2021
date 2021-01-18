const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/app.min.js',
    },
    mode: "development",
    resolve: {
        alias: {
            "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
            "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
            "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
            "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
            "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
            "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
            "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [],
        }, {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [{
                    loader: 'file-loader',
                    options: { outputPath: 'css/', name: '[name].min.css' }
                },
                'sass-loader'
            ]
        }]
    }
};