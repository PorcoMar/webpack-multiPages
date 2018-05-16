// 引入基础配置文件
const webpackBase = require("./webpack.config.base");
// 引入 webpack-merge 插件
const webpackMerge = require("webpack-merge");
// 引入配置文件
const config = require("./config");
// 合并配置文件
module.exports = webpackMerge(webpackBase,{
    // 配置 webpack-dev-server
    devServer:{
        // 项目根目录
        contentBase:config.devServerOutputPath,//devServer 配置项的 contentBase 项是项目的根目录，也就是我们的 dist 目录，区别在于这个 dist 目录不是硬盘上的 dist 目录，而是存在于内存中的 dist 目录。在使用 webpack-dev-server 时，将会以这个内存中的 dist 目录作为根目录。
        // 错误、警告展示设置
        overlay:{
            errors:true,
            warnings:true
        }
    }
});
