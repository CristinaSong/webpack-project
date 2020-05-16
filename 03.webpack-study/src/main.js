// 如何在webpack构建的项目中，使用Vue进行开发

// 在普通网页中如何使用vue
// 1. 使用script标签，引入vue包
// 2. 在index页面，创建一个id为app的div容器
// 3. 通过new Vue 得到一个vm的实例

import Vue from 'vue'

// import Vue from '../node_modules/vue/dist/vue'
// 回顾包的查找规则：
// 1. 找node_modules文件夹
// 2. 根据包名，找对v应的vue文件夹
// 3. 找package.json的包配置文件
// 4. 在package.json文件中，找main属性[main属性指定了这个包在被加载时候的入口文件夹]

import login from './login.vue'

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123'
    },
    // components: { // 这种写法在仅运行时不能实现
    //     login
    // }

    // // 在webpack中，如果想通过vue把一个组件放到页面中去展示，vm实例中的render函数剋实现
    // render: function (createElements) {
    //     return createElements(login)
    // }

    // 简写
    render: c => c(login)
})

import m1, {title as title123, content} from './test.js'
console.log(m1);
console.log(title123);
console.log(content);


