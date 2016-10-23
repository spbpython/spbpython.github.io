var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: "./sources/main.js",
    output: {
        path: path.resolve(__dirname, "assets"),
        filename: "app.js",
        publicPath: "/assets/",
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
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ],
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:4000/',
                secure: false
            }
        },
        progress: true,
        colors: true,
        inline: true,
        hot: true,
        contentBase: __dirname
    }
};

