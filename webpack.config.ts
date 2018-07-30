import * as path from 'path';
import * as webpack from 'webpack';

const basicConfig: webpack.Configuration = {
  entry: './app-ui/index.tsx',
  output: {
    path: path.resolve(__dirname, `public`),
    // publicPath: '/__built__/',
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              logLevel: 'warn',
              transpileOnly: true,
              compilerOptions: {
                'module': 'es6',
                'target': 'es5',
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.html'],
  },
};

export = basicConfig;
