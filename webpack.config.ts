/* eslint-disable node/no-unpublished-require */
/* eslint-disable node/no-unpublished-import */
import {Configuration} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: Configuration = {
  entry: './src/index.ts',
  plugins: [new HtmlWebpackPlugin()],
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
      fs: false,
    },
  },
};

export default config;
