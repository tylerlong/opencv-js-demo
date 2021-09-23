/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-unpublished-import */
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

const config: Configuration = {
  entry: './src/index.ts',
  plugins: [new HtmlWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(png|jpe?g)$/i,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
      fs: false,
    },
  },
};

export default config;
