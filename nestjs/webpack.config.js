const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
module.exports = (options, webpack) => {
  const lazyImports = [
    '@nestjs/swagger',
    // ref https://github.com/nestjs/mapped-types/issues/486#issuecomment-932715880
    'class-transformer/storage',
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
  ];

  return {
    ...options,
    externals: [],
    optimization: {
      // この設定がないと、webpack がコードを最適化しようとして、勝手に出力ファイルを分割してしまう
      splitChunks: {
        chunks: 'all',
        name: 'main',
      },
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            keep_classnames: true,
          },
        }),
      ],
    },
    plugins: [
      ...options.plugins,
      new webpack.IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
    experiments: {
      outputModule: true,
    },
    output: {
      ...options.output,
      path: path.resolve(__dirname, 'dist'),
      chunkFormat: 'module',
      //filename: `${name}.plugin.js`,
      library: {
        type: 'module',
      },
      module: true,
    },
  };
};
