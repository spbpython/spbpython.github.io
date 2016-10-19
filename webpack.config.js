var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: "./sources/assets/js/main.js",
    output: {
        path: path.resolve(__dirname, "sources/bundles"),
        filename: "app.js"
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: "file"
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
};