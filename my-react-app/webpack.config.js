let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack=require('webpack')
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: 'build.js',
        // 必须是一个绝对路径
        path: require('path').resolve('dist')
    },
    resolve:{
        alias:{
            src:require('path').resolve('src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
           template:'./src/index.html',
        }),
        //热替换插件，更改后局部刷新
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {



    port:8000,

        //实现支持browser路由
        historyApiFallback:true,
        //热更新
        hot:true
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /.(jpg|png|gif)$/, use: 'url-loader?limit=8000' }
        ]
    },

};
