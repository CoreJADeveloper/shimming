const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: require.resolve('./src/index.js'),
                use: 'imports-loader?wrapper=window',
            },
            {
                test: require.resolve('./src/globals.js'),
                use:
                    'exports-loader?type=commonjs&exports[]=file&exports[]=multiple|helpers.parse|parse',
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            join: ['lodash', 'join'],
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
};
