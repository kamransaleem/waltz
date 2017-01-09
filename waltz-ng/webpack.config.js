var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');
var git = require('git-rev-sync');


var basePath = path.resolve(__dirname);


function isExternal(module) {
    // this inspects the userRequest field of the require request
    // e.g. require('lodash').default() will like have a userRequest like the following:
    // node_modules/lodash/lib...
    var userRequest = module.userRequest;

    if (typeof userRequest !== 'string') {
        return false;
    }

    return userRequest.indexOf('node_modules') >= 0;
}


module.exports = {
    entry: {
        app: './client/main.js',
        vendor: []
    },
    devtool: 'cheap-source-map',
    output: {
        path: path.join(basePath, '/dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Waltz',
            filename: 'index.html',
            template: 'index.template.html',
            favicon: path.join(basePath, 'images', 'favicon.ico'),
            hash: true,
        }),
        new webpack.DefinePlugin({
            '__ENV__': JSON.stringify(process.env.BUILD_ENV || 'dev'),
            '__REVISION__': JSON.stringify(git.long()),
        }),
        new Visualizer(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: function(module) {
                return isExternal(module);
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=8192' },
            { test: /\.png$/, loader: 'url-loader?mimetype=image/png&limit=16384' },
            { test: /\.html?$/, loader: 'html-loader' },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=8192&minetype=application/font-woff' },
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=8192&minetype=application/font-woff2' }
        ],
        noParse: []
    }

};
