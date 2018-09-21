const path = require('path')
const webpack = require('webpack')

const packageOptions = require('./package.json')

const packageAuthor = packageOptions.author
const packageName = packageOptions.name

function generateConfiguration(name, mode = 'development') {
  return {
    devtool : 'source-map',
    entry   : packageOptions.main,
    mode,

    output: {
      filename          : `${name}.js`,
      library           : packageName,
      libraryTarget     : 'umd',
      path              : path.resolve(__dirname, 'dist'),
      sourceMapFilename : `${name}.map`,
    },

    module: {
      rules: [
        {
          test    : /\.js$/,
          exclude : /node_modules/,

          use: {
            loader: 'babel-loader',
          },
        },
      ],
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.BannerPlugin({
        banner    : `${packageName} v${packageOptions.version}\n© ${(new Date()).getFullYear()} by ${packageAuthor.name}`,
        entryOnly : true,
      }),
    ],
  }
}

module.exports = (env) => {
  if (env && env.dev) {
    return generateConfiguration(packageName)
  }

  return [
    generateConfiguration(packageName),
    generateConfiguration(`${packageName}.min`, 'production'),
  ]
}
