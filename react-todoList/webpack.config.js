const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const {join} = require("path");

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },{
                        loader: "css-loader",
                    }
                ]
            },{
                test: /\.(js|jsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                    }
                ],
                exclude: join(__dirname,"node_modules")
            }
        ]
    },
    resolve: {
        extensions: [".js",".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: "index.html",
        }),
        new CleanWebpackPlugin(),
    ]
}