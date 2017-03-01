/**
 * Created by Marlin on 2/24/2017.
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app.js',
    output: { path: __dirname, filename: 'app.all.js' },

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};