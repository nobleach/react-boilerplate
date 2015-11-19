var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const SRCDIR = path.resolve(__dirname, 'src');
const SERVERDIR = path.resolve(__dirname, 'server/generated');
const DIST = path.resolve(__dirname, 'dist');

const loaders = [{
    test: /\.js$/,
    include: SRCDIR,
    loader: 'babel-loader',
    query: {
        presets: ['es2015', 'react']
    }
},
{
    test: /\.less$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
}
];

// module.exports = {
//     entry: [
//         'babel-polyfill',
//         './src/index'
//     ],
//     output: {
//         publicPath: 'dist',
//         filename: 'bundle.js'
//     },
//     devtool: 'source-map',
//     module: {
//         loaders: [
//             {
//                 test: /\.js$/,
//                 include: path.join(__dirname, 'src'),
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ["es2015", "react"],
//                 }
//             },
//             { test: /\.less$/,
//                 loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
//             }
//         ]
//     },
//     debug: true
// };

module.exports = [{
    name: 'client',
    target: 'web',
    context: SRCDIR,
    entry: './index.js',
    output: {
        path: DIST,
        filename: 'bundle.js'
    },
    module: {
        loaders: loaders
    },
    resolve: {
        alias: {
            components: path.resolve(SRCDIR, 'components')
        }
    },
    plugins: [
        new ExtractTextPlugin('bundle.css', {allChunks: true})
    ]
},
{
    name: 'server',
    target: 'node',
    context: SRCDIR,
    entry: {
        app: 'components/app.js'
    },
    output: {
        path: SERVERDIR,
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
        loaders: loaders
    },
    resolve: {
        alias: {
            components: path.resolve(SRCDIR, 'components')
        }
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
}];
