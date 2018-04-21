// 引入基础配置
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
// 引入 webpack
const webpack = require("webpack"); //虽然在webpack.config.base中引入了但是在这里不可用还是要引入一遍
// 合并配置文件
module.exports = webpackMerge(webpackBase,{
    plugins:[
        // 代码压缩
        new webpack.optimize.UglifyJsPlugin({ //UglifyJsPlugin是系统自带 无需下载
            // 开启 sourceMap
            sourceMap: true
        }),
        // 提取公共 JavaScript 代码
        new webpack.optimize.CommonsChunkPlugin({
            // chunk 名为 commons
            name: "commons",
            filename: "[name].bundle.js",
        }),
    ]
});
