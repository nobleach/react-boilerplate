var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
    include: SRCDIR,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
}
];
module.exports = [{
    name: 'client',
    target: 'web',
    context: SRCDIR,
    entry: './components/index.js',
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
        routes: 'components/routes',
        app: ['components/app'],
        contact: ['components/contact'],
        product: ['components/product'],
        productOptions: ['components/product-options'],
        header: ['components/header'],
        overstockLogo: ['components/overstock-logo'],
        cartButton: ['components/cart-button'],
        menuButton: ['components/menu-button'],
        reviewStars: ['components/review-stars'],
        searchResults: ['components/search-results'],
        searchResultTile: ['components/search-result-tile'],
        searchResultListing: ['components/search-result-listing']
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
        new ExtractTextPlugin('styles/[name].css')
    ]
}];
