const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: path.join(__dirname, 'src/js', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader', 'sass-loader',
                ],
            },
            {
                test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },            
            {
                test: /\.svg$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf)$/i,
                type: 'asset/inline',
            },
        ],
    },
    devServer: {
        watchFiles: path.join(__dirname, 'src'),
        port: 8800,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico',
            inject: 'body',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[contenthash].css',
        }),
    ],
}
