多入口页面webpack打包
使用 ES6 进行开发
期望使用面向对象开发（class）
自动压缩合并 CSS 和 JS 文件
使用 ESLint 进行代码检查
自动生成 HTML 文件
自动抽取 CSS 文件
使用sass || less
使用jquery
使用jquery插件

<!-- 注释很详细 -->
npm run dev 开发环境
npm run lint 开发环境加代码检测
npm run build 生产模式
npm run serve：服务器环境下预览（打开浏览器）
npm run serve2：服务器环境下预览（不打开浏览器）
http-server ./dist -p 8888 -o  === http-server ./dist --port 8888 --open 

.babrlrc 是 babel 的相关配置文件，.eslintrc.js 是 ESLint 相关的配置文件，.gitignore 是 git 仓库上传时的忽略项目，postcss.config.js 是 postcss 相关的配置。

默认情况下，使用这些命令都会先引入和 package.js 同目录下的 webpack.config.js 文件。由于我们不会将所有的配置都放在 webpack.config.js 中，而是过环境变量进行区分，在 webpack.config.js 中引用其他的配置文件。设置环境变量采用的语法：set/export NODE_ENV = xxx;(windows用set,mac用export)























感谢黑黢黢

