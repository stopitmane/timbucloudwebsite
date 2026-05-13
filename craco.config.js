const webpack = require('webpack');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Fix for ajv compatibility issues
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
      };
      
      // Add plugin to ignore ajv warnings
      webpackConfig.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /^\.\/locale$/,
          contextRegExp: /moment$/,
        })
      );

      return webpackConfig;
    },
  },
};