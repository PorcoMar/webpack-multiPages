const webpackBase = require("./webpack.config.base");
const webpackMerge = require("webpack-merge");
const config = require("./config");
module.exports = webpackMerge(webpackBase,{
    module:{
        rules:[
            {
                test: /\.js$/,
                // 强制先进行 ESLint 检查
                enforce: "pre", //这个选项表示在处理 JavaScript 之前先启用 ESLint 代码检查，然后再使用 babel 等 loader 对 JavaScript 进行编译。设置了自动修复和启用警告信息，这样当我们的代码出现问题时，ESLint 会首先尝试自动修复（如将双引号改为单引号），对于无法自动修复的问题，将以警告或错误的信息进行展示。
                // 不对 node_modules 和 lib 文件夹中的代码进行检查
                exclude: /node_modules|lib/,
                loader: "eslint-loader",
                options: {
                    // 启用自动修复
                    fix:true,
                    // 启用警告信息
                    emitWarning:true,
                }
            },
        ]
    },
    devServer:{
        contentBase:config.devServerOutputPath,
        overlay:{
            errors:true,
            warnings:true
        }
    }
});
