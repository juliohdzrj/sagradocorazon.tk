const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const apiMocker = require('connect-api-mocker');

const getMocksConfig = server => {
  if (!server) {
    throw new Error('webpack-dev-server is not defined');
  }
  server.app.use(apiMocker('/products', '/mocks/products'));
};

const rulesDevTools = {
  test: /\.js$/,
  enforce: 'pre',
  use: [
    {
      loader: 'source-map-loader',
      options: {
        filterSourceMappingUrl: (url, resourcePath) => {
          if (/broker-source-map-url\.js$/i.test(url)) {
            return false;
          }

          if (/keep-source-mapping-url\.js$/i.test(resourcePath)) {
            return 'skip';
          }

          return true;
        },
      },
    },
  ],
};

//Rules of how webpack will take our files, complie & bundle them for the browser
const ruleForJavaScript = {
  //Babel loader for interpreting react
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
};

const ruleFonts = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  ],
};

const rulesForCss = {
  test: /\.s?css$/i,
  use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
};

// const rulesForImgs = {
//   test: /\.(png|svg|jpg|jpeg|gif)$/i,
//   use: {
//     loader: 'url-loader',
//   },
// };

// const rulesForImgs = {
//   test: /\.(png|svg|jpg|jpeg|gif)$/i,
//   use: [
//     {
//       loader: 'url-loader',
//     },
//   ]
// };

const rulesForImgs = {
  test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
  loader: 'img-optimize-loader',options: {
    compress: {
      webp: true,
      disableOnDevelopment: true
    }
  }, };

// const rules =[ruleForJavaScript, rulesForScss, rulesForCss, rulesDevTools];
const rules = [ruleForJavaScript, rulesForCss, rulesDevTools, ruleFonts, rulesForImgs];

module.exports = (env, argv) => {
  //The webpack configuration can not only be an object but also a function that returns an object.
  const { mode } = argv;
  const isProduction = mode === 'production';
  return {
    //Where files should be sent once they are bundled
    // entry: './src/index.js',
    entry: ['regenerator-runtime/runtime.js', './src/index.js'],
    output: {
      path: path.join(__dirname, './src/dist'),
      filename: isProduction ? '[name].[contenthash].js' : 'index.bundle.js',
    },
    resolve: {
      extensions: ['*', '.js'],
    },
    devServer: {
      onBeforeSetupMiddleware: devServer => {
        getMocksConfig(devServer);
      },
      client: {
        logging: 'info',
        // Can be used only for `errors`/`warnings`
        //
        // overlay: {
        //   errors: true,
        //   warnings: true,
        // }
        overlay: true,
        progress: true,
      },
      static: {
        // directory: path.resolve(__dirname, "static"),
        // staticOptions: {},
        // Don't be confused with `devMiddleware.publicPath`, it is `publicPath` for static directory
        // Can be:
        // publicPath: ['/static-public-path-one/', '/static-public-path-two/'],
        // publicPath: "/static-public-path/",
        // Can be:
        // serveIndex: {} (options for the `serveIndex` option you can find https://github.com/expressjs/serve-index)
        // serveIndex: true,
        // Can be:
        // watch: {} (options for the `watch` option you can find https://github.com/paulmillr/chokidar)
        watch: true,
      },
      historyApiFallback: true,
      hot: true,
      open: true,
      port: 3003,
      proxy: {
        '/api': {
          target: 'http://localhost:3003',
          router: () => 'http://localhost:8080',
          logLevel: 'debug' /*optional*/,
        },
      },
    },
    devtool: isProduction ? 'hidden-source-map' : 'source-map',
    module: { rules },
    optimization: {
      minimizer: [new CssMinimizerPlugin()],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
  };
};
// //const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const apiMocker = require('connect-api-mocker');

// const getMocksConfig = (server) => {
//   if (!server) {
//     throw new Error('webpack-dev-server is not defined');
//   }
//   // server.app.use(apiMocker('/api/v1/session', '/mocks/get-session-redis'));
//   // server.app.use(apiMocker('/messages', '/mocks/messages'));
//   // server.app.use(apiMocker('/api/users/', '/mocks/api/users')); //wildcard
//   // server.app.use(apiMocker('/api/v1/customer-export', '/mocks/api/v1/customer-export')); //wildcard con cambio de id
//   server.app.use(
//     apiMocker('/api/v1/customer-export/', '/mocks/api/v1/customer-export')
//   );
//   server.app.use(
//     apiMocker(
//       '/api/v1/customer-export/fields-transactions',
//       '/mocks/api/v1/customer-export/fields-transactions'
//     )
//   );
//   server.app.use(
//     apiMocker(
//       '/api/v1/bff/data-customer-export',
//       '/mocks/api/v1/bff/data-customer-export'
//     )
//   );
//   server.app.use(apiMocker('/api/1.0/users', '/mocks/testmock'));
// };

// const port = process.env.PORT || 3002;

// module.exports = {
//   mode: 'development',
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.[hash].js',
//   },
//   devtool: 'inline-source-map',
//   module: {
//     rules: [
//       {
//         test: /\.(js)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//       {
//         test: /\.css$/i,
//         use: [MiniCssExtractPlugin.loader, 'css-loader'],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin(),
//     new HtmlWebpackPlugin({
//       template: 'public/index.html',
//       //favicon: 'public/favicon.ico'
//     }),
//   ],
//   devServer: {
//     host: 'localhost',
//     onBeforeSetupMiddleware: (devServer) => {
//       getMocksConfig(devServer);
//     },
//     port: port,
//     historyApiFallback: true,
//     open: true,
//   },
// };
