var webpack = require("webpack");

module.exports = {
    entry: {
        app: ['webpack/hot/dev-server', './src/index.js']
    },
    output: {
        path: __dirname,
        publicPath: "/build/",
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    optional: ['runtime'],
                    stage: 0
                }
            },
            {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            'es6-promise': 'es6-promise',
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ],
    eslint: {
        formatter: require('eslint/lib/formatters/stylish'),
        failOnWarning: false
    }
};
