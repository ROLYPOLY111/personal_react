const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './pages/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // jsx/js文件的正则
                exclude: /node_modules/, // 排除 node_modules 文件夹
                use: {
                    // loader 是 babel
                    loader: 'babel-loader',
                    options: {
                        // babel 转义的配置选项
                        babelrc: false,
                        presets: [
                            // 添加 preset-react
                            require.resolve('@babel/preset-react'),
                            [require.resolve('@babel/preset-env'), { modules: false }]
                        ],
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: 'index.html',
            inject: true
        })
    ]
}