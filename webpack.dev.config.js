const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js',
    publicPath: '/'
  },
  plugins:  [
    new HtmlWebpackPlugin({
      title: 'Vicom Test',
      template: 'index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|otf|svg|webp)$/i,
        use: [
          'file-loader',
          'webp-loader'
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    publicPath: '/'
  },
  
};

