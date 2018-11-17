/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: path.join(
        __dirname,
        'static',
        'src',
        'javascripts',
        'projects',
        'common',
        'modules',
        'crosswords',
        'crossword.js'
    ),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'lib'),
        libraryTarget: 'commonjs2'
    },
    resolve: {
        modules: [
            path.join(__dirname, 'static', 'src', 'javascripts'),
            path.join(__dirname, 'static', 'src', 'stylesheets'),
            'node_modules', // default location, but we're overiding above, so it needs to be explicit
        ],
        alias: {
            common: 'projects/common',
            svgs: path.join(__dirname, 'static', 'src', 'inline-svgs')
        },
    },
    resolveLoader: {
        modules: [
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // TODO: @guardian/dotcom-rendering is not properly published or pre-transpiled, so we have to
                // transpile it as part of the frontend build step for now
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                loader: 'svg-inline-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ]
};
