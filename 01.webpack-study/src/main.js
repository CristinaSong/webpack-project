console.log('444');

import './css/index.css'
import './css/index.scss'
// 注意：如果要通过路径形式取引入node_moudles中相关的文件，可以直接省略路径前面的node_modules这一层目录，直接写包的名称，然后跟上具体的文件路径
// 不写node_moudles这一层目录，默认就会去node_moudles中查找
import 'bootstrap/dist/css/bootstrap.css'


// class关键字，是ES6中提供的新语法，是用来实现ES6中面向对象编程的方式
class Person{
    // 使用static关键字可以定义静态属性：可以直接通过类名访问的属性
    // 实例属性：只能通过类的实例来访问的属性
    
    // 每一个类，都有一个构造器，如果我们程序员没有手动指定构造器，那么,可以认为类内部有个隐形的、看不见的空构造器，类似于constructor(){}
    // 构造器的作用就是每当new这个类的时候，必然会优先执行构造器中的代码
    constructor(name, age) {
        // 实例属性
        this.name = name
        this.age = age
    }
    static info = {name:'zs',age:20}
}
// 访问Person类身上的 info 静态属性
console.log(Person.info) // {name: "zs", age: 20}
// Java C#  实现面向对象的方式完全一样了，class是从后端语言中借鉴过来的，来实现面向对象
var p1 = new Person("实例属性", 23)
// 访问Person类实例属性
console.log(p1.name)

//ES6之前版本的静态属性和实例属性表示
// function Animal(name){
//     this.name=name
// }
// Animal.info=123

// var a1=new Animal('小花')

// // 这是静态属性：
// console.log(Animal.info)
// // 这是实例属性：
// console.log(a1.name)