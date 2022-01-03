const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    devServer: {
        hot: true,
    },
    entry: { index: path.resolve(__dirname, "src", "index.js") },
    output: { 
        path: path.resolve(__dirname, "build"), filename: "main.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  publicPath: 'assets',
                },
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
};