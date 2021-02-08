// webpack 라이브러리에 대한 설정 파일

const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
  entry: {
    main: '@/main'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname + '/dist')
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {'@': path.join(__dirname, 'src/')}
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [path.join(__dirname, 'src/')]
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),          // vue loader Plugin 생성
    new HtmlWebPackPlugin({         // HTML 파일 지정
      template: './index.html'
    }),
    new CopyWebpackPlugin({         // asset 파일들 복사
      patterns: [
        {
          from: "src/assets/",
          to: "assets/"
        }
      ]
    })
  ]
}
