/* eslint-env node */
import path from 'path';
import webpack from 'webpack';
import NyanProgressPlugin from 'nyan-progress-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const env = process.env.NODE_ENV === 'production' ? 'production' : 'dev';

const cfg = {
    devtool: 'eval',
    entry: [
        './src/index'
    ],

    output: {
        path: __dirname,
        publicPath: "/build/",
        filename: 'bundle.js'
    },

    plugins: [
        new NyanProgressPlugin(),
        new ExtractTextPlugin('app.css', { allChunks: true })
    ],

    module: {
        loaders: [
            {
                test: /\.css/,
                loader: ExtractTextPlugin.extract('style-loader',
                                                  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') //eslint-disable-line
            },
            {
                test: /\.less/,
                loader: ExtractTextPlugin.extract('style-loader',
                                                  'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!less') //eslint-disable-line
            }
        ]
    },

    postcss: () => {
        return [autoprefixer, cssnano];
    }
};

const jsLoader = {
    test: /\.js$/,
    loaders: ['babel'],
    include: path.join(__dirname, 'src')
};

if (env !== 'production') {
    cfg.debug = true;
    cfg.devtool = '#eval-source-map';

    cfg.entry.push(
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client'
    );

    cfg.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    );

    jsLoader.loaders.unshift('react-hot');
}

cfg.module.loaders.push(jsLoader);

module.exports = cfg;
