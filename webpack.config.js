const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const dev = 'development';

module.exports = {
    mode: dev,
    entry: {
        main: path.resolve(__dirname, './src/script/index.ts'),
        another: path.resolve(__dirname, './src/script/script.ts'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),

        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, './src/assets/image'),
                to: path.resolve(__dirname, 'dist/'),
            }]
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, 'dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,

    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                use: ['babel-loader', 'ts-loader'],
                exclude: /node_modules/,

            },
            {
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                use: 'file-loader',
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-url-loader',
                }, ],
            },
            {
                test: /\.(?:ico|gif|png|svg|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            // CSS, Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: ['file-loader'],
            },
        ],

    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
};
