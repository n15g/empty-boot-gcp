const path = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

function pathTo(...pathSegments) {
    return path.resolve(__dirname, ...pathSegments);
}

const input = {
    src: pathTo("src/main/client"),
    app: pathTo("src/main/client/app")
};

const output = {
    base: pathTo("build/resources"),
    statics: pathTo("build/resources/main/static"),
    templates: pathTo("build/resources/main/templates")
};

module.exports = {
    entry: [
        path.resolve(input.app, "index.ts")
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: ['angularjs-annotate'],
                        cacheDirectory: true,
                        babelrc: false,
                        presets: [
                            ["@babel/preset-env", {
                                "modules": false,
                                "loose": true
                            }]
                        ]
                    }
                }, 'ts-loader']
            },
            // Load library CSS styles
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: {sourceMap: true}},
                ],
                include: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    devServer: {
        port: 3000,
        proxy: {
            '/api': 'http://localhost:8080'
        },
        contentBase: output.templates,
        index: "index.html",
        writeToDisk: true,
        overlay: {
            errors: true
        },
        historyApiFallback: {
            index: 'index.html'
        }
    },

    plugins: [
        // Ensure old builds are cleaned out
        new CleanWebpackPlugin(),
        new FaviconsWebpackPlugin({
            logo: path.resolve(input.src, 'images/favicon/original.png'),
            prefix: 'images/favicon-[hash]/',
            persistentCache: false,
            inject: true,
        }),

        // Rewrite index.html
        new HtmlWebpackPlugin({
            title: 'SETME',
            template: path.resolve(input.src, 'index.html'),
            filename: `${output.templates}/index.html`,
        }),

        //Globals
        new webpack.ProvidePlugin({
            "$": "jquery",
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        }),
    ],

    output: {
        filename: '[name].[chunkhash].js',
        path: output.statics,
        publicPath: '/static/',
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: true,
    },
};
