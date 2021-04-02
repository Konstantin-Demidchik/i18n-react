const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;
module.exports = {
   mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
      port: 3001,
      hot: isDev
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: [
                    ["@babel/preset-env", { "modules": false }],
                    "@babel/preset-react"
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties'
                ]
              }
            }
          },
          {
            test: /\.css$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
               "css-loader"
            ],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
              },
               "css-loader",
               "sass-loader",
            ],
          },
          {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.(ttf|woff|woff2|eot)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
        ]
    },
    plugins: [
      new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public/favicon.ico'),
          to: path.resolve(__dirname, 'dist'),
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    })
  ],
}