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
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src", "auth.html")
        })
    ],
};