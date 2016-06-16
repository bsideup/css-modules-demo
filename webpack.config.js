const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const targetPath = path.join(__dirname, "dist");

module.exports = {
    debug: true,
    cache: true,
    devtool: "source-map",
    entry: {
        app: path.join(__dirname, "src")
    },
    output: {
        path: targetPath,
        filename: "[name]-[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015-loose", "react", "stage-0"]
                }
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.eot$|\.woff$|\.woff2$|\.ttf|\.svg$/,
                loader: "url-loader?limit=81920"
            },
            {
                test: /\.(le|c)ss$/,
                loaders: [
                    "style",
                    "css?modules&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap",
                    "less?sourceMap"
                ]
            }
        ]
    },
    resolve: {
        root: [
            path.resolve(__dirname, "node_modules")
        ],
        extensions: ["", ".css", ".less", ".js", ".jsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
            inject: "head"
        })
    ],
    devServer: {
        port: 3000,
        host: "0.0.0.0",
        contentBase: targetPath
    }
};
