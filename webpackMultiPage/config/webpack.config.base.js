const webpack = require('webpack');
const path = require("path");
// 引入插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
// 清理 dist 文件夹
const CleanWebpackPlugin = require("clean-webpack-plugin")
// 抽取 css
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// 引入多页面文件列表
const config = require("./config");
// 通过 html-webpack-plugin 生成的 HTML 集合
let HTMLPlugins = [];
// 入口文件集合
let Entries = {}

//版权说明
const BannerPlugin = new webpack.BannerPlugin('porcoMar版权所有，翻版必究');
const webpackServer = {  
    protocol:'http://',  
    host:'127.0.0.1',  
    port:'3003'  
}
const ProvidePlugin = new webpack.ProvidePlugin({//引入外部类库 这样就不用每个页面都引入jquery 了
    $: 'jquery', //package里的一定要下到dependencies 而不是dev里ependencies，一定是jquery 而不是jQuery
    jQuery: 'jquery',
  });

// 生成多页面的集合
config.HTMLDirs.forEach((page) => {
    const htmlPlugin = new HTMLWebpackPlugin({
        filename: `${page}.html`,
        template: path.resolve(__dirname, `../app/html/${page}.html`),
        chunks: [page, 'commons'],
    });
    HTMLPlugins.push(htmlPlugin);
    Entries[page] = path.resolve(__dirname, `../app/js/${page}.js`);
})

module.exports = {
    entry:Entries,
    devtool:"cheap-module-source-map",
    output:{
        filename:"js/[name].bundle.[hash].js",
        path:path.resolve(__dirname,"../dist")
    },
    // 加载器
    module:{
        rules:[
            {
                // 对 css 后缀名进行处理 (注意：s?css 的意思是scss或者css)
                test:/\.s?css$/,
                // 不处理 node_modules 文件中的 css 文件
                exclude: /node_modules/,
                // 抽取 css 文件到单独的文件夹
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    // 设置 css 的 publicPath
                    publicPath: config.cssPublicPath,
                    use: [{
                            loader:"css-loader",
                            options:{
                                // 开启 css 压缩
                                minimize:true,
                            }
                        },
                        {
                            loader:"postcss-loader",
                        },
                        {
                            loader:"sass-loader", 
                            //启用sass 虽然在这只写了sass-loader 但还要下载node-sass
                        }
                    ]
                })
            },
            {
                test: /\.js$/,
                // exclude: /^node_modules*swiper$/, //这一步是因为 页面引用了import Swiper from 'swiper'，因此必须不处理modules里面的swiper,所以这里要允许除了node_modules里面的swiper的其他所有文件
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        // 打包生成图片的名字
                        name:"[name].[ext]",
                        // 图片的生成路径
                        outputPath:config.imgOutputPath
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use:["file-loader"]
            }
        ],
    },
    //webpac-dev-server支持Hot Module Replacement，即模块热替换
    devServer: {  //设置ip地址和端口的两种方法 一种是在devServer里配一种是直接写在package.json里 这样：--host 127.0.0.1 --port 3003 --open
        host: webpackServer.host,  
        inline: true,  //inline重新加载改变的部分，不会刷新页面 可以不写
        port: webpackServer.port  
    }, 
    plugins:[
        // 自动清理 dist 文件夹
        new CleanWebpackPlugin(["dist"]),
        // 将 css 抽取到某个文件夹
        new ExtractTextPlugin(config.cssOutputPath),        
        // 自动生成 HTML 插件
        BannerPlugin,
        //打印版权归属
        ProvidePlugin,
        //引入外部插件
        //OccurrenceOrderPlugin 是系统自带 无需下载
        new webpack.optimize.OccurrenceOrderPlugin(), 
        //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        
        ...HTMLPlugins

    ],
}