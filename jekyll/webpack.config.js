const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const devMode = process.env.JEKYLL_ENV !== "production";

// https://webpack.js.org/configuration/
module.exports = {
    plugins: [new MiniCssExtractPlugin({
            filename: '../css/style-bundle.css'
        }
    )],
    externals: {
        jquery: 'jQuery',
    },
    entry: {
        main: path.join(__dirname, 'assets', 'js', 'main'),
    },
    output: {
        path: path.resolve(__dirname, 'assets', 'js'),
        filename: '[name]-bundle.js',
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
        modules: ['node_modules'],
    },
    optimization: {
      minimize: true,
      minimizer: [
          new TerserPlugin(),
          new CssMinimizerPlugin(),
      ],
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                "css-loader",
                {
                    loader: 'sass-loader',
                    ident: 'sass',

                    options: {
                        implementation: require("sass"),
                        sourceMap: true
                    }
                }
              ],
            }
        ],
    },
};
