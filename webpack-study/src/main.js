// 这是main.js是我们项目的JS入口文件

// 1. 导入Jquery
// import *** from *** 是ES6中导入模块的方式
// 由于ES6的代码太高级了，浏览器解析不了，所以这一行执行会报错
import $ from 'jquery'
// const $ = require('jquery') // node语法

import './css/index.css' // 不手动安装一些合适的第三方loader加载器会报错
// 注意： webpack默认只能处理JS类型的文件，无法处理其他的非JS类型的文件；
// 如果要处理非JS类型的文件，我们需要手动安装一些合适的第三方loader加载器；
// 如果要打包处理css文件，需要安装cnpm i style-loader css-loader --save-dev
import './css/index.less'
import './css/index.scss'


$(function () {
    $('li:odd').css('backgroundColor', 'blue') // 偶数
    $('li:even').css('backgroundColor', function () { // 奇数
        return '#' + 'ff5722'
    })
})

// webpack可以做什么事情？？
// 1. 处理JS文件的互相依赖关系；(直接导入到main.js，然后打包引用)
// 2. 处理JS的兼容问题，把高级的、浏览器不是别的语法，转为低级的，浏览器能正常识别的语法

// 刚才运行的命令格式： webpack 要打包的文件的路径 打包好的输出文件的路径
// 如果想直接通过webpack命令打包需要配置webpack.config.js文件

// 存在问题：每次都改动代码需要重新运行webpack命令
