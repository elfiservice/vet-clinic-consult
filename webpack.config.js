const webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 5000
    }
}