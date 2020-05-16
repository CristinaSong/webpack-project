// 由于webpack是基于node进行构建，所有webpack的配置文件中，任何合法的node代码都是支持的
var webpack = require('webpack')
var path = require('path')
// 在内存中，根据指定的模版页面生成一份内存中的首页，同时自动把打包好的bundle.js注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂在一个plugins节点
var htmlWebpackPlugin = require('html-webpack-plugin')

// 当以命令形式运行webpack或webpack-dev-serve的时候，我们并没有提供要打包文件的入口和出口文件，此时工具会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个配置对象，然后根据这个对象，进行打包构建
module.exports = {
    entry: path.join(__dirname, './src/main.js'), // 入口文件
    output: { // 指定输出选项
        path: path.join(__dirname, './dist'), // 输出路径
        filename: 'bundle.js', // 指定输出文件的名称
    },
    plugins: [ // 所有webpack插件的配置节点
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定模版文件路径
            filename: 'index.html', // 设置生成的内存页面的名称
        })

    ],
    module: { // 用来配置第三方loader模块的
        rules: [  // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 处理css文件的规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 处理sass文件的规则
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=10000&name=[hash:8]-[name].[ext]' }, 
            // 处理图片路径的loader，当loader只有一个use对应当值直接传字符串就好，多个就传数组；拼参数的方式和url上拼参数的方式一样
            // 将小的，即低于limit的图片进行base64编码，以减少http请求；为减少js或html文件的体积等于或者超过则不会编码
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'}, // 处理字体文件的loader
            { test: /\.js$/, use: 'babel-loader', exclude: /node_moudles/} 
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'], // 表示这几个文件的后缀名导入的时候可以省略不写
        alias: {
            '@': path.join(__dirname, './src'), // 这样@就表示项目根目录中src这一层路径
            'assets': path.resolve(__dirname, './src/assets')
        }
    }
}