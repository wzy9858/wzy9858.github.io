---
title: javaWeb
date: 2024-6-07
tag:
  - javaweb
category:
  - java
---

[TOC] 


> 前言:
>
> 本笔记根据哔哩哔哩黑马教学视频来的，在这里仅仅大致了解一下开发流程，仅供参考。



# javaWeb

学习路线
```java
HTML,CSS,JS
Ajax,Axios
Vue,Element
前端工程化
Maven
SpringBott基础
SpringBoot,SpringMVC基础
Mysql
JDBC,Mybatis
Web案例
会话跟踪技术
Filter,Interceptor
AOP
```

## 前端相关
HTML负责网页的结构
CSS负责网页的表现
JS负责网页的行为

### HTMl
可以查看文档
网站 w3school

HTML不区分大小写
单双引号都可以使用
html语法结构松散不严格

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML学习</title>
    <link rel="stylesheet" href="index.css"> <!--使用外部css-->
</head>
<body style="background-color:rgb(223, 223, 222)">
    <h1 style="text-align:center">一级标题</h1>
    <p>第一段落</p>
    <body>第二段落</p>
    <a href="http://www.w3school.com.cn">这是学习文档的连接</a>
    <!--target="-self"当前页面 target="-blank" 空白页面-->
    <img src="2.jpg" width="900px" height="526px" />这是一张图片 <!--可以不设置高度，自动缩放，px可以换成%半分比-->
    <br/>    <!--换行-->
    <hr/>   <!--水平线-->
    一行小字 
    <hr/>
    
    <h2 style="background-color:red">标题</h2>
    <p style="background-color:green">段落.</p>

    <h1 style="font-family:verdana">又一个标题</h1>
    <p style="font-family:arial;color:rgb(9, 6, 222);font-size:20px;">又一个段落.</p>


    <b>粗体</b>
    <sub>下标字</sub>
    <sup>上标字</sup>
    <ins>插入字</ins>
    <del>删除字</del>
    
    <p><abbr title="World Health Organization">WHO</abbr> 成立于 1948 年。</p> <!--鼠标悬停显示信息-->

    <details>
        <summary>未来世界中心（Epcot Center）</summary>
        <p>Epcot 是华特迪士尼世界度假区的主题公园，拥有令人兴奋的景点、国际展馆、屡获殊荣的烟花和季节性活动。</p>
    </details>

    <p><cite>The Scream</cite>是一本书</p><!--city定义著作的标题-->
    <address><!--定义文档的联系信息，斜体-->
        2024,5,20<br/>
        于宿舍<br/>
    </address>
    <span>没有任何语义的标签，可以用来设置样式</span>

</body>
</html>
```

***列表***

```html
   <ol>
            <li>我是第一项</li>
            <li>我是第二项</li>
            <li>我是第三项</li>
        </ol>
        <ul>
            <li>我是无序的1</li>
            <li>我是无序的2</li>
            <li>我是无序的3</li>
        </ul>
```


***表格***
`<table>`定义表格整体，可以包裹多个`<tr>` `border` 规定表格边框的宽度
`width` 规定表格的宽度
`cellspacing` 规定单元之间的空间
`<tr>` 表格的行 可以包裹多个`<td>`
`<td>` 表格单元格，可以包裹内容 如果是表头单元格可以为`<th>`

```html
     <table border="1" cellspacing="0">
            <th>第一行</th>
            <th>第二行</th>
            <th>第三行</th>
            <tr>
                <td>111</td>
                <td>222</td>
                <td>333</td>
            </tr>

            <tr>
                <td>444</td>
                <td>555</td>
                <td>666</td>
            </tr>
            
            <tr>
                <td>777</td>
                <td>888</td>
            </tr>
    </table>
```

***表单标签***
`<form>`
场景 在网页中主要负责数据采集功能，如注册，登录等数据采集

**表单项**
不同类型的`input`元素，下拉列表，文本域等。

1. `<input>` 定义表单项，通过type属性控制输入形式
2. `<select>` 定义下拉列表
3. `<textarea>` 定义文本域

**input后面的type可以跟**
`text` 默认值，定义单行输入的字段
`password` 密码字段 <br/>

`radio` 单选按钮<br/>

`checkbox` 定义复选框<br/>

`file` 定义文件上传按钮<br/>
`data/time/datetime-local` 定义日期/时间/日期时间<br/>
`number` 定义数字输入框<br/>
`email` 定义邮件输入框<br/>
`hidden` 定义隐藏域<br/>
`submit/reset/button` 定义提交按钮/重置按钮/可点击按钮<br/>

```html
    <form action="" method="post">
        <label><input type="radio" name="gender" value="1" >男</label>    
        <label><input type="radio" name="gender" value="2" >女</label>    
    </form>

    <form>
        <select name="degree">
            <option value="1">大专</option>
            <option value="2">本科</option>
            <option value="3">硕士</option>
        </select>
    </form>

     <form>
        <textarea name="description" cols="30" rows="10"></textarea> <br/>
    </form>
```
加上`laber`标签之后，点击标签内的文字就可以聚焦
**属性**
`ation` 规定当提交表单时向何处发送表单数据，`URL `
如果不指定，默认提交到当前页面
`method` 规定用于发送表单数据的方式 `GET，POST`



```html
  <form action="" method="post">
         <!--在url后面拼接表单数据，比如?user=TOm&age=12,URl长度有限制的-->
         <!--换成post 在消息体中(请求体)传递，参数大小无限制的 -->
        用户名: <input type="text" name="username">
        年龄: <input type="text" name="age">
        <input type="submit" value="提交">
    </form>
```



### CSS
引入CSS样式
行内样式: 写在标签的`style`属性中，不推荐
内嵌样式: 卸载`style`标签中,可以写在页面任何位置，但通常约定写在`head`标签中
外联样式: 卸载一个单独的`.css`文件中，需要通过`link`标签在网页中引入
```css
css选择器
元素选择器 h1 {} <h1>sss</h1>
id选择器 #id属性值 {} <h1 id="id"> </h1>
类选择器 .class属性值{} <h1 class="cls"> </h1>
```
css中的盒子模型
盒子:页面中的所有元素（标签），都可以看作是一个盒子，由盒子将页面中的元素包含在一个矩形区域内
通过盒子的视角更方便的进行页面布局
盒子模型的组成: 
内容区域(content)
内边距区域(padding)
边框区域(border) 
外边距区域(margin)

上面的是从小到大的
#### 布局标签
布局标签：实际开发网页中，会频繁的使用`div`和`span`这两个没有语义的布局标签
1. `div` 
一行只显示一个(独占一行)
宽度默认是父元素的宽度，高度默认由内容撑开
可以设置宽高
2. `span`
一行可以显示多个
宽度和高度默认由内容撑开
不可以设置宽高

```css
<style>
    div {
    width: 200px;
    height: 200px;
    box-sizing: border-box;/*指定width height为盒子的高度*/
    background-color:aquamarine; /*背景色*/

    padding: 20px;/*内边距 上 右下左*/
    border: 10px solid red;/*边框 宽度 线条类型  颜色*/
    margin: 30px;/*外边距 上 右下左*/
    /*auto 自动计算页边距*/
}
</style>
```


### JS
跨平台面向对象的脚本语言
不编译
是用来控制网页行为的，它能使网页可交互

***引入方式***
内部脚本:将js代码定义在HTML页面中

* JacaScript代码必须位于`<script></script>`标签之间
* 在HTML文档中，可以在任意地方，放置任意数量的`<script>`
* 一般会把脚本置于`<body>`元素的底部,可改善显示速度
```js
    <script>
        alert("hello js"); 显示警告框
    </script>
```
外部脚本
* 将js代码定义在外部JS文件中，然后引入到HTML页面中
* 外部js文件中，只包含js代码，不包含`<script>`标签
* `<script>`标签不能自闭合

#### JS语法
1. 区分大小写
2. 结尾分号可有可无 建议加上
3. 单行注释// 多行注释/**/
4. 大括号代表代码块

输出语句
```javascript
window.alert("hello,js"); //浏览器弹出警告

document.write("你好,js");//写入HTML在浏览器展示

console.log("hello,js");//写入浏览器控制台
```

***变量***
var关键字来声明变量 是全局变量
js时一门弱类型语言，变量可以存放不同类型的值
变量名需要遵循的规则
1. 组成字符可以是任何字母，下划线，或美元符号
2. 数字不能开头
3. 建议使用驼峰命名

ES6中新增了let关键字，他的用法类似var，只在let关键字所在的代码块内有效，且不允许重复声明

ES6新增了const关键字，用来声明一个只读的常量，一旦声明，常量的值就不能改变

***数据类型，运算符，流程控制语句***
* 数据类型分为：原始数据类型和引用数据类型
**原始类型**
number 数字（整数，小数，NaN(Not a Number)）
string 字符串 单双引皆可
boolean 布尔，true false
null 对象为空
underfined 当声明的变量未初始化时，该变量的默认值是undefined


使用typeof运算符可以获取数据类型
`alert(typeof 3.14);`
null的数据类型是object
使用var没有初始化 类型是underfined
**运算符**
算数运算符`+ - * / % ++ --`
赋值运算符`= += -+ *= /= %=`
比较运算符`> < >= <= != == ===` 
== 会进行类型转化 === 不会进行类型转换
逻辑运算符 `&& || !`
三元运算符`条件表达式?true_value:false_value`

**类型转换**
字符串类型转数字
> 将字符串字面值转为数字，如果字面值不是数字，则转为NaN
parseInt(字符串);字符串转化为数字
parseInt("123A13");//转化为123
parseInt("A123");//NaN


其他类型转boolean
Number： 0和NaN为false 其他均为true
String 空字符串为false其他均为true
Null和undefined 均转为false


***流程控制***
if...else.. if..else
switch..
for..
while..
do ..while..


#### JS函数

格式
```js
function functionName(参数1，参数2){
    要执行的代码
}
方式2
var functionName=function(参数1,参数2){
    要执行的代码
}
```
注意
* 形式参数不需要类型，因为javaScript是弱类型语言
* 返回值也不需要定义类型，可以在函数内部直接使用return返回即可

调用: 函数名称(实际参数列表)

在js中函数调用可以传递任意个数的参数
#### JS对象

***Array数组***
Array对象用于定义数组
定义
1. var 变量名= new Array(元素列表);
2. var 变量名=[元素列表];
访问
arr[索引]=值

特点:长度可变，类型可变

属性 length 设置或返回数组中元素的数量
方法:
forEach() 遍历数组中每个有值的元素，并调用一次传入的函数
push() 将新元素添加到数组的末尾，并返回新的长度
splice(3,2) 从数组中删除元素`从3开始删除2个` 返回删除后的
`arr.forEach(function(e){console.log(e)});`
简化 `arr.forEach((e) => {console.log(e)});`
for循环不管有值无值都遍历
forEach() 只遍历有值的

***String字符串***
创建字符串的方式有两种
var 变量名=new String("");//方式一
var 变量名="-";//方式二

属性和方法
length 字符串的长度

charAt() 返回指定位置的字符
indexOf() 检索字符串位置
trim() 去除字符串两边的空格
substring(start,end) 提取字符串中指定的索引号之间的字符
含头不含尾
***JSON***
js中自定义对象
```
var 对象名={
    属性1:属性值1,
    属性2:属性值2,
    属性3:属性值3,
    函数名称:function(形参列表){}
    函数名称(){}
};
```
调用格式:
对象名.属性名;
对象名.函数名();


什么是JSON
json是通过js对象标记法书写的**文本**;
由于语法结构简单，层次结构鲜明，现多用于作为数据载体，
在网络中进行传输


**定义**
var 变量名 = `'{"key":value1,"key2":value2}'`;
eg
`var userStr = '{"name":"Jerry","age":18,"addr":["北京","上海]};'`
value 的数据类型为
数字（整数或浮点数），字符串（在双引号中），逻辑值（true或false），数组（在方括号中），对象（在花括号中），null

js对象转为JSON对象
`var jsObject = JSON.parse(userStr);`
JS对象转为JSON字符串
`var jsonStr = JSON.stringify(jsObject);`

***BOM***
概念:Browser Object Model 浏览器对象模型，允许javaScript与浏览器对话，javaScript将浏览器的各个组成部分封装成对象。

组成
1. Window；浏览器窗口对象
2. Navigator: 浏览器对象
3. Screen: 屏幕对象
4. History 历史记录对象
5. Location 地址栏对象

**Window 浏览器窗口对象**
获取: 直接使用`window. `可以省略
属性
1. history 对history对象的只读引用
2. location 用于窗口或框架location对象
3. navigator 对navigator对象的只读引用

方法
1. alert() 显示带有一段消息和一个确认按钮的警告框
2. confirm() 显示带有一段消息和确认按钮的警告框，
有返回值的，点击确定返回true 取消false
3. setlnterval() 按照指定的周期(以毫秒计)来调用函数或计算表达式
传递两个参数 (函数 时间)
4. setTimeout() 在指定的毫秒数后调用函数或计算表达式
延迟指定时间执行一次(函数 时间),会延迟指定时间后执行一次函数

**Location**
window.location.属性
location.属性
属性
href: 设置或返回完整的URL
`location.href`
`location.href = "https://www.baidu.cn"`
设置后会跳转到指设置的url

***DOM对象***
概念 Document Object Model 文档对象模型
将标记语言（html）的各个部分封装成对应的对象
1. Document 整个文档对象
2. ELemen 元素对象
3. Attribute 属性对象
4. Text 文本对象
5. Comment 注释对象

JS通过DOM，就能对HTML进行操作
1. 改变HTML元素的内容
2. 改变HTML元素的样式(CSS)
3. 对HTML DOM事件做出反应
4. 添加和删除HTML元素

DOM是W3C的标准，定义了访问HTML和XML文档的标准，分为三个不同的部分
1. Core DOM 所有文档类型的标准模型
* Document 整个文档对象
* ELemen 元素对象
* Attribute 属性对象
* Text 文本对象
* Comment 注释对象
2. XML DOM-XML文档标准模型
3. HTML DOM-HTML文档的标准模型
* `image:<img>`
* `Button:<input type="butoon">`

HTML中的Element对象可以通过Document对象获得，而Document对象是通过windows对象获得的。
Document对象中提供了以下获取Element对象的函数

1. 根据id属性值获取，返回单个Element对象
`var h1 = document.getElementById('h1')`
2. 根据标签名称获取，返回Element对象数组
`var divs = documnet.getElementsByTagName('div');`
3. 根据name属性值获取，返回Element对象数组
`var hobbys = document.getElementByName('hobby');`
4. 根据class属性值获取，返回Element对象数组
`var class = documnent.getElementsByClassName('cls');`

然后查操作手册w3school，属性，方法



#### JS事件监听
js可以在事件被检测到时执行代码

***事件绑定***
方式一
通过HTML标签中的事件属性进行绑定
```html
<input type="button" onclick="on()" value="按钮1">

<script>
    function on(){
        alert("我被点击了");
    }
</script>
```

方式二 
通过DOM元素属性绑定
```html
<input type="button" id="btn" value="按钮2">

<script>

    document.getElementById('btn').onclick=function(){
        alert("我被点击了");
    }
</script>
```
***常见事件***
```js
onclick 鼠标单击事件
onblur 元素失去焦点
onfocus 元素获得焦点
onload 某个页面或图像被完成加载
onsubmit 当表单提交时触发该事件
onkyrdown 某个键盘的键被按下
onmouseover 鼠标被移到某元素之上
onmouseout 鼠标从某元素移开
```


### VUE
vue是一套前端框架，免除原生的JS中的DOM操作,简化书写.
基于MVVM思想，实现数据的双向绑定，将编程的关注点放在数据上
新建HTML页面引入Vue.js文件
`<script src="js/vue.js"></script>`
在JS代码区域,创建Vue核心对象,定义数据模型
```js
<script>
    new Vue({
        e1:"#app"
        data: {
            message:"hello Vue!"
        }
    })
</script>
```
编写视图
```js
<div id="app">
    <input type="text" v-model="message">
    {{message}}
</div>
```
`{{}} `插值表达式
内容可以是
* 变量
* 三元运算符
* 函数调用
* 算数运算


#### Vue中的常用指令
```js
v-bind 为HTML标签绑定属性值，如设置href,css样式
v-model 在表单元素上创建双向数据绑定
v-on 为HTML标签绑定事件
v-if
v-else-if 条件性的渲染某元素，判定为true时渲染，否则不渲染
v-else
v-show 根据条件展示某元素，区别在于切换的是display属性的值
v-for 列表渲染，遍历容器的元素或者对象的属性
```

```js
<body>
    <div id="app">
        <a v-bond:href="url">链接1</a>
        <a:href="url">链接2</a>
        <input type="text" v-model="url">/*改变文本框内容，链接也会变*/
    </div>
</body>

<script>
    new Vue({
        e1:"#app"
        data:{
            url="https://www.baidu.com"
        }
    })
</script>
```

通过v-bind 后者v-model 绑定的变量，必须在数据模型中声明

***v-on***
```js
<body>
    <div id="app">
        <input type="button" value="点我一下" v-on:click="handle()">
    </div>
</body>

<script>
    new Vue({
        e1:"#app"
        data:{
        }
        methods:{
            handle:function(){
                alert("你点我了一下");
            }
        }
    })
</script>

```


***v-else-if v-show***

```js
<span v-if="age <=35">年轻人</span>
<span v-else-if="age>35 && age <60">中年人</span>
<span v-else>老年人

<span v-show="age <35">年轻人</span>
```
```js
<body>
    <div id="app">
        年龄<input type="text" v-model="age">经判定，为
        <span v-if="age<=35">年轻人</spqn>
        <span v-else-if="age>35&&age<60">中年人</spqn>
        <span v-else>老年人</spqn>
        <br><br>
    </div>
</body>

<script>
    new Vue({
        e1:"#app"
        data:{
            age:20
        }
        methods:{
        }
    })
</script>
```

***v-for***

```java
<div v-for="addr in addrs">{{addr}}</div>
<div v-for="(addr,index) in addrs">{{index + 1}} : {{addr}}</div>
index是下标 索引
data:{
    ...
    addrs:["北京","上海","成都"]
},
```

***通过vue完成表格数据的渲染展示***
#### Vue的声明周期
生命周期:指一个对象从创建到销毁的整个过程
声明周期的八个阶段: 每触发一个生命周期事件,会自动执行一个生命周期方法（钩子）
```Vue
beforeCreate 创建前
created 创建后
beforeMount 挂载前
mounted 挂载完成
beforeUpdate 更新前
uodated 更新后
beforeDestroy 销毁前
destroyed 销毁后
```

```js

<script>
    new Vue({
        e1: "#app"
        data:{

        },
        methods: {

        },
        mounted() {
            alert("vue挂载完成，发送请求到服务端")
        }

    })

</script>

```

### Ajax
Asynchronous JavaScript And XML 异步的JavaScript和XML
**作用**
* 数据交换,通过Ajax可以给服务器发送请求,并获取服务器响应的数据
* 异步交互,可以在不重新加载整个页面的情况下,与服务器交换并更新部分网页的技术,如搜索联想,用户名是否可用的校验等等.



***原生Ajax(已经基本不用)***

1. 准备数据地址(该地址返回一个json数据，视频中地址已失效)
2. 创建一个XMLHttpReuest对象,用于和服务器交换数据
3. 向服务器发送请求
4. 获取服务器响应数据

```javascript
<script>
    function getData(){
        //1.创建XMLHttpRequest
        var xmlHttpRequest = new XMLHttpRequest();
        //2. 发送异步请求
        xmlHttpRequest.open('GET','返回json数据的网址');
        xmlHttpRequest.send();//发送请求

        //3.获取服务响应数据
        xmlHttpRequest.onreadystatechange = function(){
            if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
                document.getElementById('div1').innerHTML = 				        
                    xmlHttpRequest.responseText;
            }
        }
    }
    </script>
```



***Axios***

* 对原生Ajax进行了封装

* [Axios中文文档 | Axios中文网 (axios-http.cn)](https://www.axios-http.cn/)

**步骤**

1. 引入Axios的js文件

`<script src="js/axios-0.18.0.js"></script>`

2. 使用Axios发送请求，并获取响应结果

```javascript
axios({
    method:"get"
    url:""
}).then((result)=>{
    console.log(result.data);
})
```



**请求方式别名**

* `axios.get(url,[,config])`
* `axios.delete(url,[,config])`
* `axios.post(url,[,data[,config]])`
* `axios.put(url,[,data[,config]])`

```javascript
axios.get("url").then((result)=>{
    console.log(result.data);
})
```

### YAPI-API管理平台

YAPI是高效，易用，功能强大的api管理平台，旨在为开发，<br>

产品，测试人员提供更优雅的接口管理服务。

自行百度一下官网地址。

### 前端开发工程化

* 模块化
* 组件化
* 规范化
* 自动化

#### 1. 环境准备

Vue-cli是Vue官方提供的一个脚手架，用于快速生成一个Vue的项目模板。

Vue-cli提供了如下功能

1. 统一的目录结构
2. 本地调试
3. 热部署
4. 单元测试
5. 继承打包上线

依赖环境；`NodeJs`<br>

需要安装：`vue-cli`<br>

#### 2. Vue项目简介

Vue项目-创建<br>

命令行`vue create vue-project01`<br>

图形化页面`vue vi`<br>

***vue项目-目录结构***<br>

基于Vue脚手架创建出来的工程，有标准的目录结构<br>

`node_modules` 整个项目的依赖包<br>

`public`存放项目的静态文件<br>

`src`存放项目的源代码<br>

`package.json`模块的基本信息，项目开发所需要模块，版本信息<br>

`vue.config.js`保存cue配置的文件，如：代理，端口的配置等。<br>

**src下的文件**

`assets`静态资源<br>

`components`可重用的组件<br>

`route`路由配置<br>

`views`视图组件(页面)<br>

`App.vue`入口组件(跟组件)<br>

`main.js`入口js文件<br>

***运行***

`npm run serve`



### Vue组件库Element

* Element:是饿了么团队研发的，一套为开发者，设计师，和产品经理<br>准备的基于Vue2.0的桌面端组件库。
* 组件:组成网页的部件，例如，超链接，按钮，图片，表格，表单等



安装ElementUi组件库(在当前工程的目录下)，在命令行执行指令<br>

`npm install element-ui@2.15.3`

在main.js中引入ElementUI组件库<br>

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElemnetUI)
```

访问官网，复制组件代码。

#### 常用组件

* 表格组件
* 分页组件
* Dialog对话框组件
* 表单组件

Vue项目中使用Axios;<br>

在项目目录下安装axios:`npm install axios`;<br>

需要使用axios时，导入axios`import axios from 'axois';`

#### Vue路由

前端路由:URL中的hash(#号)与组件之间的对应关系<br>

VueRouter是Vue的官方路由。

 组成

* VueRouter:路由器类，根据路由请求在路由视图中动态渲染选中的组件
* `<router-link>`:请求链接组件，浏览器会解析成`<a>`
* `<router-view>`:动态视图组件，用来渲染展示与路由路径对应的组件

安装(创建项目时已选择)<br>

`npm install vue-route@3.5.1`

定义路由<br>

在router下的index.js配置路由信息。<br>

在main.js里是否导入了路由`import router from './router'`<br>

#### 打包部署

 使用nginx部署<br>

nginx配置(服务器上的配置)

``` 
events{}
http {
        include /etc/nginx/mime.types;
        include /etc/nginx/conf.d/*.conf;
    server {
        listen 80;
        server_name localhost;
    location / {
           root   /root/blog/;
           index  index.html index.htm;
           try_files $uri $uri/ /index.html;
       }
    }
}
```

## Web开发

#### Maven

Maven时apache旗下的一个开源项目,是一款用于管理和构建java项目的工具。<br>

***Maven的作用***

* 依赖管理，避免版本冲突问题
* 统一项目结构，各idea文件目录统一
* 标准跨平台自动化项目构建方式



***仓库***

* 本地仓库,自己计算机上的一个目录
* 中央仓库:由Mave团队维护的全球唯一的。[地址](https://repo1.maven.org/maven2/)
* 远程仓库(私服):一般由公司团队搭建的私有仓库

##### 安装

1. 解压apache-maven-3.6.1-bin.zip
2. 配置本地仓库:修改`conf/setting.xml`中的`<localRepository>`为指定一个目录
3. 配置阿里云私服:修改`conf/setting.xml`中的`<mirrors>`标签，为其添加如下子标签

```xml
<mirror>
	<id>alimaven</id>
	<name>aliyun maven</name>
	<url>http://maven.aliyun.com/nexus/content/groups/public/</url>
	<mirrorOf>central</mirrorOf>
</mirror>
```

4. 配置环境变量:`MAVEN_HOME`为maven的解压目录，并将其bin目录加入PATH环境变量。

`mvn -v`

#### IDEA集成Maven

1. 创建Maven环境

* 选择IDEA中`file-->Settings-->Build,Execution,Deployment-->Build Tools-->Maven`
* 设置IDEA使用本地安装的Maven,并修改配置文件及本地仓库路径

也可全局配置:自行百度

2.  创建Maven项目

* 创建模块，选择Maven，点击Next

* 填写模块名称，坐标信息，点击finish，创建完成

3. 导入Maven项目

* 打开IDEA，选择右侧Maven面板，点击+号，选中对应项目的pom.xml文件，双击导入

##### Maven坐标

什么是坐标?<br>

* Maven中的坐标是资源的唯一标识，通过该坐标可以唯一定位资源位置
* 使用坐标来定义项目或引入项目中需要的依赖

Maven坐标的主要组成?<br>

* groupld:定义当前Maven项目隶属组织名称(通常是域名反写，例如:com.itheima)
* artifactld:定义当前Maven项目名称(通常是模块名称，例如:order-service,goods-service)
* version:定义当前项目版本号

```xml
    <groupId>org.example</groupId>
    <artifactId>java_maven</artifactId>
    <version>1.0-SNAPSHOT</version>
```



#### Maven依赖管理

* 依赖配置
* 依赖传递
* 依赖范围
* 生命周期



1. 依赖配置

依赖:指当前项目运行所需要的jar包，一个项目中可以引入多个依赖。

配置:<br>

* 在`pom.xml`中编写`<dependencies>`标签
* 在`<dependencies>`标签中使用`<dependency>`引入坐标
* 定义坐标的`groupid,artifactld,version`
* 点击刷新按钮，引入最新加入的坐标

如果引入的依赖本地不存在将会远程仓库/中央仓库下载

不知道坐标信息可以在[这里查询](https://mvnrepository.com/)

```xml
    <dependencies>
        <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.2.3</version>
        </dependency>
    </dependencies>
```

2. 依赖传递

* 依赖具有传递性
* * 直接依赖:在当前项目中通过依赖配置建立的依赖关系
  * 间接依赖；被依赖的资源如果依赖其他资源，当前项目间接依赖其他资源
* 排除依赖
* * 排除依赖指主动断开依赖的资源,被排除的资源无需指定版本。

```xml
      <dependency>
            <groupId>ch.qos.logback</groupId>
            <artifactId>logback-classic</artifactId>
            <version>1.2.3</version>
            <!--排除依赖-->
            <exclusions>
                <exclusion>
                    <groupId>junit</groupId>
                    <artifactId>junit</artifactId>
                </exclusion>
            </exclusions>>
        </dependency>
```



3. 依赖范围

依赖的jar包，默认情况下，可以在任何地方使用。可以通过`<scope>..</scope>`<br>

设置其作用范围。

作用范围:<br>

* 主程序范围有效。(main文件夹范围内)
* 测试程序有效。(test文件范围内)
* 是否参与打包运行。(package指令范围内)

| scope值       | 主程序 | 测试程序 | 打包(运行) | 范例        |
| ------------- | ------ | -------- | ---------- | ----------- |
| compile(默认) | Y      | Y        | Y          | log4j       |
| test          | -      | Y        | -          | junit       |
| provided      | Y      | Y        | -          | servelt-api |
| runtime       | -      | Y        | Y          | jdbc驱动    |

```xml
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.10</version>
            <scope>test</scope>
        </dependency>
```





4. 生命周期

Maven的生命周期就是为了对所有的Maven项目构建过程进行抽象和统一。<br>

Maven中有三套项目独立的生命周期<br>

* clean:清理工作
* defaultL:核心工作，如:编译，测试，打包，安装，部署等。
* site：生成报告，发布站点等。

每套生命周期包含一些阶段(phase),阶段是有顺序的吗，后面的阶段依赖于前面的阶段。<br>

* clean:移除上一次构建生成的文件
* compile:编译项目源代码
* test:使用合适的单元测试框架运行测试(junit)
* package:将编译后的文件打包，如:jar,war等
* install:安装项目到本地仓库

***执行指定生命周期的两种方式***<br>

* 在idea中，右侧的maven工具栏，选中对应的生命周期，双击执行
* 在命令行中，通过命令执行eg:`mvn compile`



## Web后端开发

***Spring***<br>

* [官网](spring.io)
* Spring发展到今天已经形成了一开发生态圈，Spring提供了若干个子项目，每个项目用于完成特定的功能。

Spring Boot简化了Spring配置，开发<br>

### SpringBootWeb入门

需求:使用SpringBoot开发一个web应用，浏览器发起请求`/hello`后，给浏览器返回字符串`"hello world~"`<br>

1. 创建springboot工程，并勾选web开发相关依赖
2. 定义HeloController类，添加方法hello，并添加注解
3. 运行测试

```java
@RestController
public class Hello {
    @RequestMapping("/hello")
    public String hello(){
        System.out.println("hello,world");
        return "hello world";
    }
}
```

运行自带的主类在浏览器访问`/hello`即可看到结果

### HTTP协议

HTTP超文本传输协议，规定了浏览器和服务器之间数据传输的规则。<br>

特点：

* 基于TCP协议：面向连接，安全
* 基于请求-响应模型的；一次请求对应一次响应
* HTTP协议是无状态的协议:对于事务处理没有记忆能力。每次请求都是独立的。
* * 缺点:多次请求间不能共享数据
  * 优点:速度快

#### 请求协议

1. 请求行(请求方式,资源路径,协议)
2. 请求头(格式key:value)
3. 请求体

| key             | value                                            |
| --------------- | ------------------------------------------------ |
| Host            | 请求的主机名                                     |
| User-Agent      | 浏览器版本                                       |
| Accept          | 浏览器能接收资源类型                             |
| Accept-Language | 浏览器偏好语言，服务器可根据此返回不同语言的网页 |
| Accept-Encoding | 表示浏览器可以支持的压缩类型，例如gzip,deflate等 |
| Content-Type    | 请求主体的数据类型                               |
| Content-length  | 请求主体的大小(单位:字节)                        |

* GET请求:请求参数在请求行中，没有请求体，如`/brand/findAll?name=OPPO&status=1`请求大小有限制
* 请求参数在请求体中，POST请求大小没有限制



#### 响应协议

1. 响应行(响应数据第一行(协议，状态码，描述))
2. 响应头(第二行开始,格式key:value)
3. 响应体(最后一部分，存放响应数据)

* 1xx响应中-临时状态码。表示请求已经接收，告诉客户端应该继续请求或者它已经完成则忽略它
* 2xx成功-表示请求已经被成功接受，处理已完成
* 3xx重定向-重定向到其他地方，让客户端在发起一次请求以完成整个处理
* 4xx客户端错误-处理发生错误，责任在客户端，如:请求了不存在的资源，客户端未被授权禁止访问等
* 5xx服务器错误-处理发生错误，责任在服务端。如程序抛出异常等
* 200请求成功
* 404资源不存在，一般是url输入错误或者资源被删
* 500服务器发生不可预期的错误

[状态码大全]([HTTP 状态码 | 菜鸟教程 (runoob.com)](https://www.runoob.com/http/http-status-codes.html))



***常见的响应头***



| type             | 意思                                                  |
| ---------------- | ----------------------------------------------------- |
| ConTent-Type     | 表示该响应内容的类型，eg`test/html,application/json `   |
| Content-Length   | 表示该响应内容的长度(字节数)                          |
| Content-Encoding | 表示该响应压缩算法，eg `gzip `                          |
| Cache-Control    | 指示客户端应如何缓存，eg:`max-age=300`表示最多缓存300秒 |
| Set-Cookie       | 告诉浏览器为当前页面所在的域设置cookie                |

### Web服务器-Tomacat

Web服务器是一个软件程序，对http协议的操作进行封装，使得程序员不必直接对协议进行操作，让web开发更加便捷。

* 主要功能是"提供网上信息浏览服务"。
* Tomcat是Apache软件基金会一个核心项目，是一个开源免费的轻量级web服务器
* Tomcat也被称为Web容器，Servelt容器，servlet程序需要依赖于Tomcat才能运行



配置Tomcat端口号(conf/server.xml)<br>

HTTP协议默认端口号为80，如果将Tomcat端口号改为80，则将来访问Tomcat时，将不用输入端口号。<br>

* Tomcat部署项目:

将项目放置到webapps目录下，即部署完后。

##### Tomcat入门程序

起步依赖:

* spring-boot0starter-web:包含了web应用开发所需要的常见依赖
* spring-boot-starter-test:包含了单元测试所需要的常见依赖

### 请求响应

* 请求(HttpServetRequest):获取请求数据
* 响应(HttpServletResponse):设置响应数据
* BS架构:Browser/Server,浏览器/服务器架构模式。客户端只需要浏览器，应用程序的逻辑和数据都存储在服务端。
* CS架构，客户端/服务器架构模式



##### 请求

`@RestController`类最前边。

***postman***

Postman是一款功能强大的网页调试与发送网页HTTP请求的Chrome插件<br>

作用:常用于进行接口测试<br>

***简单参数***

* 原始方式

在原始的web程序中，获取请求参数，需要通过HttpServletRquest对象手动获取。

```java
    @RequestMapping("/simpleParam")
    public String simpleParam(HttpServletRequest request){
        //获取请求参数
        String name = request.getParameter("name");
        String ageStr = request.getParameter("age");

        int age = Integer.parseInt(ageStr);
        System.out.println(name+" "+age);
        return "OK";
    }
```



* SpringBoot方式

```java
    @RequestMapping("/simpleParam")
    public String simpleParam(String name , Integer age){
        System.out.println(name+" "+age);
        return "OK";
    }
```

要保持请求参数命名一致。参数对应不一致可以使用`@RequestParam`完成映射<br>

` public String simpleParam(@RequestParam(name="name",required=false)String username , Integer age){ `<br>

声明了这个默认`required`是`true`不传参数会报错，可以改为`false`不报错<br>

post请求参数写在请求体里面即可。<br>



***实体参数***

* 简单实体对象:请求参数名与形参对象属性名相同，定义POJO接收即可

```java
    @RequestMapping("/simplePojo")
    public String simplePojo(User user){//User是一个类，需要与这个类里的属性名对应
        System.out.println(user);
        return "Ok";
    }
```

* 复杂实体对象:请求参数与形参对象属性名相同，按照对象层次结构关系即可接受嵌套POJO属性参数<br>

一个类里面的属性是另一个类。<br>

记得写对应的set和get和tostring方法<br>

那么传递参数时需要`http://localhost:8080/simplePojo?name=TOM&age=100&adress.city=北京`这样传递。<br>

***数组集合参数***

数组参数:请求参数名与参数组名称相同，且请求参数为多个，定义数组类型形参即可接收参数。<br>

eg:爱好有多个，传输多个爱好.<br>

* 可以使用数组进行接收

集合参数:请求参数名与形参集合名称相同且请求参数为多个。`@RequestParam`绑定参数关系。

```java
@RequestMapping("/listParam")
public String listParam(@RequestParam List<String> hobby){
    System.out.println(hobby);
    return "OK";
}
```

***日期参数***

日期参数:使用`@DateTimeFormat`注解完成日期参数格式转换<br>



```java
@RequestMapping("/dateParam")
public String dateParam(@DateTimeFormat(pattern="yyyy-MM-dd HH:mm:ss")LocalDateTime updateTime){
	System.out.println(updateTime);
    return "OK";
}
```



***Json参数***

* Json参数:Json数据键名与形参对象属性名相同,定义POJO类型形参即可接受参数,需要使用`@RequestBody`标识<br>

```json
{
    "name":"",
    "age":16,
    "address":{
        "province":"beijing",
        "city":"beijing"
    }
}
```

```java
    @RequestMapping("/jsonParam")
    public String jsonParam(@RequestBody User user){
        System.out.println(user);
        return "OK";
    }
```

`User`是一个类，有属性`name`和`age`和`Address(类)`

***路径参数***

* 路径参数:通过请求URL直接传递参数，使用{...}来标识该路径参数，需要使用`@PathVariable`获取路径参数

```java
    @RequestMapping("/path/{id}")
    public String pathParam(@PathVariable Integer id){
        System.out.println(id);
        return "OK";
    }
```

​	

`@RequestMapping("/path/{id}",method = RequestMethod.GET)`指定请求方式为GET<br>

也可以写为(更加简单)

`GetMapping("/path/{id}")`

`PostMapping("")`等等...

可以有多个路径参数

```java
    @RequestMapping("/path/{id}/{name}")
    public String pathParam2(@PathVariable Integer id,@PathVariable String name){
        System.out.println(id+" "+name);
        return "OK";
    }
```



##### 响应

'@ResponseBody'

* 类型:方法注解，类注解
* 位置:Controller方法上/类上
* 作用:将方法返回值直接响应，如果返回值类型是实体对象/集合，将会转换为JSON格式响应
* 说明:`@RestController=@Controller+@ResponseBody;`

***同一的响应结果***

定义一个Result的类，使其有统一的fan

* `private Integer code;`响应码,1代表成功，0代表失败
* `private String msg;`提示信息
* `private Object data;`返回的数据



### 分层解耦

#### 三层架构

1. controller:控制层，接收前端发送的请求，对请求进行处理，并响应数据。
2. service:业务逻辑层，处理具体的业务逻辑
3. dao:数据访问层(Data Access Object)(持久层)，负责数据访问操作，包括数据的增，删，改，查。

#### 分层解耦

* 内聚:软件中各个功能模块内部的功能联系。
* 耦合:衡量软件中各个层/模块之间的依赖，关联的程度。

* 软件设计原则高内聚低耦合



* 控制反转:inversion Of Control,简称IOC。对象的创建控制权由程序自身转移到外部(容器),这种思想成为控制反转。
* 依赖注入:Dependency Injection,简称DI。容器为应用程序提供运行时，所依赖的资源，称之为依赖注入。
* Bean对象:IOC容器中创建，管理的对象，称之为bean.

##### IOC & DI 入门

1. Service层及Dao层的实现类，交给ICO容器管理。
2. 为Controller及Service注入运行时，依赖的对象。
3. 启动测试

在类的上面加上注解`@Component`将当前类交给IOC容器管理，成为IOC容器中的bean。<br>

在类里面加上注解`Autowired`运行时，IOC容器为提供该类型的bean对象，并赋值给该变量--依赖注入<br>

##### IOC详解

Bean的声明:<br>

要把某个对象交给IOC容器管理，需要在对应的类上加上如下注解之一:<br>

| 注解        | 说明                 | 位置                                           |
| ----------- | -------------------- | ---------------------------------------------- |
| `@Component`  | 声明`bean`的基础注解   | 不属于以下三类时，用此注解                     |
| `@Controller` | `@Component`的衍生注解 | 标注在控制器类上                               |
| `@Service`    | `@Component`的衍生注解 | 标注在业务类上                                 |
| `@Repository`| `@Component`的衍生注解 | 标注在数据访问类上(由于与mybatis整合，用的少i) |

Controller(请求处理，响应数据)---->Service(逻辑处理)---->Dao(数据访问)



声明bean的时候，可以通过value属性指定bean的名字，如果没有指定，默认为类名首字母小写。

使用以上四个注解都可以声明bean，但在springboot集成web开发中，声明控制器bean只能用`@Controller`

***Bean的组件扫描***

* 前面声明bean的四大注解，要想生效，还需要被组件扫描注解@ComponentScan扫描
* `@ComponentScan`注解虽然没有显示配置，但是实际上已经包含在了启动类声明注解`@SpringBootApplocation`中，默认扫描的范围时启动类所在包及其子包。

##### DI详解

* `@Autowire`注解，默认是按照类型进行的，如果存在多个相同类型的bean，将会报出如下错误:<br>

通过一下几种方案来解决:

1. `@Primary` 设置优先级
2. `@Qualifier` 指定bean的名字 默认是类名首字母小写
3. `@Resource` `name=名字 `





## Mybatis

* MyBatis是一款优秀的持久层框架，用于简化JDBC的开发
……

1. 引入依赖，配置相关信息(application.properties)
```
# 配置数据库的连接信息- 四要素
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
# 连接数据库的url
spring.datasource.url=jdbc:mysql://localhost:3306/tem
# 连接数据库的用户名
spring.datasource.username=root
#连接数据库的密码
spring.datasource.password=kdyq1108
```
2. 编写SQL语句
```java
@Mapper
public interface UserMapper {

    @Select("select * from user")
    public List<User> list();
}
```

### 配置SQl提示
* idea和数据库没有建立连接，不识别表的信息，
* 在idea中高配置mysql数据库连接



### 数据库连接池

* 数据库连接池是个容器，负责分配，管理数据库连接(Connection)
* 它允许应用程序重复使用一个现有的数据库连接，而不是再重新建立一个。
* 释放空间时间超过最大空闲时间的连接，来避免因为没有释放连接而引起的数据库连接遗漏。

***标准接口:DataSource***

* 官方(sun)提供的数据库连接池接口，由第三方组织实现此接口。
* 功能:获取连接,`Connection getConnection() throws SQLException`

* 常见产品:Druid,Hikari



切换Druid数据库连接池:

1. 引入起步依赖

```xml
    <!--druid连接池-->
        <dependency>
            <groupId>com.alibaba</groupId>
            <artifactId>druid-spring-boot-3-starter</artifactId>
            <version>1.2.22</version>
        </dependency>
```

### lombok

* lombok是一个实用的java类库,能通过注解的形式自动生成构造器,getter/setter,equals,hashcode,toString等方法,并可以自动化生成日志变量，简化java开发，提高效率。、

| 注解                | 作用                                                         |
| ------------------- | ------------------------------------------------------------ |
| `@Getter/@Setter`     | 为所有属性提供`get/set`方法                                    |
| `@ToString`           | 会给类自动生成易于阅读的`toString`方法                         |
| `@EqualsAndHashCode`  | 根据类所拥有的非静态字段自动重写`equals`方法和`hashCode`方法     |
| `@NoArgsConstructor`  | 为实体类生成无参的构造器方法                                 |
| `@AllArgsConstructor` | 为实体类生成除了`static`修饰的字段之外带有各参数的构造器方法。 |
| `@Data `              | 提供了更综合的生成代码功能`(@Getter+@Setter+@ToString+@EqualsAndHashCode)` |

pom配置

```xml
 <dependency>
	<groupId>org.projectlombok</groupId>
	<artifactId>lombok</artifactId>
</dependency>
```

* Lombok会在编译时,自动生成对应的java代码,我们使用lombok时,还需要安装一个lombok的插件(idea自带)



### Mybatis基础操作

***准备***

* 准备数据表emp
* 创建一个新的`springboot`工程,选择引入对应的起步依赖(`mybatis,mysql,lmbok`)
* `application.properties`中引入数据库连接信息
* 创建对应的实体类Emp(实体类属性采用驼峰命名)
* 准备`Mapper`接口`EmpMapper`

***删除***

```java
@Mapper
public interface UserMapper {
    @Delete("delete from user where id = #{id}")//#{}占位符
    public int delete(Integer id);//返回值表示删除的记录数
}
```

日志输出

可以在application.properties中,打开mybatis的日志,并指定输出到控制台。

```
#配置mybatis的日志,指定输出到控制台
mybatis.configuration.log-impl=org.apache.ibatis.logging.stdout.StdOutImpl
```

预编译SQL(?占位符):

* 性能更高
* 更安全(防止SQL注入)

#### 占位符

* #{...}
* * 执行SQl时，会将#{..}替换为?,生成预编译SQl,会自动设置参数值。
  * 使用时机:参数传递,都使用#{...}
* ${...}
* * 拼接SQL。直接将参数拼接在SQL语句中,存在SQL注入问题
  * 使用时机:如果对表名，列表进行动态设置时使用。

***插入***

使用实体类将多个参数封装起来。

```java
    @Insert("insert into user(id, name, age, gender, phone) values(#{id},#{name},#{age},#{gender},#{phone});")
    public int insert(User user);
```



主键返回

:在数据添加成功后,需要获取插入数据库数据的主键。<br/>

如:在添加套餐数据时,还需要维护套餐菜品关系表数据。

插入数据的时候不设置id,使用这个返回主键.<br/>

```
    @Options(useGeneratedKeys = true,keyProperty = "id")#获取返回的主键
```

***更新***

```java
    @Update("update user set name=#{name},age=#{age},gender=#{gender},phone=#{phone} where id =#{id}")
    public void update(User user);
```

***查询***

```java
    @Select("select * from user where id=#{id};")
    public User getById(Integer id);
```

数据封装:

* 实体类属性名和数据库表查询返回结果一致,`mybatis`会自动封装。
* 如果实体类属性名和数据库表查询返回的字段名不一致,不能自动封装。

方案一:给字段起别名,让别名与实体类属性一致。

`select dept_id depId from emp where id = #{id}`

方案二:通过@Results,@Result注解手动映射封装

````java
@Results({
@Result(column = "dept_id",property = "deptId")
})
@Select(select dept_id depId from emp where id = #{id})
````

方案三:开启`mybatis`的驼峰命名自动映射开关 `---a_cloumn --->aColumn`

在`application.properties`中

`mybatis.configuration.map-underscore-to-camel-case=true`



***条件查询***

思考一下为什么使用`$`

```java
    @Select("select * from user where name like '%${name}%' and gender = #{gender} order by gender desc")
    public List<User> list(String name,short gender);
```

* concat字符串拼接函数
* * `select concat('hello','world');`拼接成`helloworld`,
  * 可以使用这个方法解决上面的问题。
  * `@Select("select * from user where name like concat('%',#{name},'%') and gender = #{gender} order by gender desc")`

* 参数名说明,在springBoot的1.x版本/单独使用mybatis中在接口中的每个属性上加`@Param`





### XML映射文件



***规范***

* XML映射文件的名称与Mapper接口名称一致,并且将XML映射文件和Mapper接口放置在相同包下(同包同名)
* XML映射文件的namespace属性为Mapper接口全限定名一致
* XML映射文件中sql语句的id与Mapper接口中的方法名一致,并保持返回类型一致。

```java
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.database.UserMapper">
    <select id="list" resultType="com.wzy.User">
        select *
        from user
        where name like concat('%', #{name}, '%')
          and gender = #{gender}
        order by gender desc
    </select>
</mapper>
```



目录结构:



<img src="./assets/image-20240710143627878.png" alt="image-20240710143627878" style="zoom:33%;" />

使用注解来映射简单语句会使代码显得更加整洁,但对于稍微复杂一点的语句,Java注解不仅力不从心,还会让你本就复杂的SQL语句更加混乱不堪,因此，如果你需要做一些很复杂的操作,最好用XML来映射语句。

选择何种方式来配置映射,以及认为是否应该要统一映射语句定义的形式,完全取决于你和你的团队,换句话说,永远不要拘泥于一种方式,你可以很轻松的在基于注解和XML的语句映射方式间自由移植和切换。

#### Mybatisx插件

* 一款基于IDEA的快速开发Mybatis的插件,为效率而生。



### Mybatis动态SQL-if

随着用户的输入或外部条件的变化而变化的SQL语句,我们称为动态SQL.<br>

`<if>&<where>`

`<if>`用于判断条件是否成立,使用test属性进行条件判断,如果条件为true,则拼接SQl。

`<where>`元素只会在子元素有内容的情况下才插入where字句,而且会自动去除字句开头的AND或OR.

```xml
        <select id="list" resultType="com.wzy.User">
        select *
        from user
        <where>
        <if test="name!=null">
            name like concat('%', #{name}, '%')
        </if>
        <if test="gender!=null">
            and gender = #{gender}
        </if>
        </where>
            order by gender desc
    </select>
```



更新操作也要设置为动态的SQL

* 动态更新员工信息,如果更新时有值传递更新有值的。
* `<set>`动态地在行首插入SET关键字,并会删掉额外的逗号.(用在update语句中)

#### `<foreach>`

批量删除

`delete from user where id in(1,2);`

```xml
--      co
llection:遍历的集合
--      item:遍历出来的元素
--      separator:分隔符
--      open:遍历开始前拼接的SQL片段
--      close:遍历结束后拼接的SQL片段  
	<delete id="deleteById">
        delete from user where id in
        <foreach collection="ids" item="id" separator="," open="(" close=")">
            #{id}
        </foreach>

    </delete>
```



```java
 public void deleteById(List<Integer> ids);
```



#### `<sql><include>`

* `<sql>`定义可重用的SQL片段
* `<include>`通过属性refid,指定包含的sql片段

```xml
<sql id="">
</sql>
-------
<include refid=""/>
```

* `@Slf4j`日志小技巧

* 分页查询依赖pageHelper



## 文件上传







## 基础登录功能

### 会话技术

* 会话:用户打开浏览器,访问web服务器的资源,会话建立,直到有一方断开连接,会话结束.在一次会话中可以包含多次请求和响应。



* 会话跟踪:一种维护浏览器状态的方法,服务器需要识别多次请求是否来自于同一浏览器,以便在同一次会话的多次请求间共享数据。



* 会话跟踪方案:
* * 客户端会话跟踪技术:Cookie
  * 服务端会话跟踪技术:Session
  * 令牌技术

#### Cookie

```java
   @GetMapping("/c1")//设置cookie
    public Result cookie1(HttpServletResponse response) {
        response.addCookie(new Cookie("login_username", "itheima"));
        return Result.success();
    }

    @GetMapping("/c2")//获取cookie
    public Result cookie2(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();//获取所有cookie
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("login_username")) {
                System.out.println("login_username:" + cookie.getValue());
            }
        }
        return Result.success();
    }
```

* 优点:HTTP协议中支持的技术
* 缺点:移动端APP无法使用Cookie
* 不安全,用户可以自己禁用Cookie
* Cookie不能跨域，跨域区分三个维度:协议,ip/域名,端口

#### Session

```java
    @GetMapping("/s1")//往HttpSession中存储值
    public Result session1(HttpSession session){
        log.info("HttpSession-s1:{}",session.hashCode());
        session.setAttribute("loginUser","tom");//往Session中存储数据
        return Result.success();
    }
    @GetMapping("/s2")//从HttpSession中获取值
    public Result session2(HttpServletRequest request){
        HttpSession session = request.getSession();
        log.info("HttpSession-s2:{}",session.hashCode());
        
        Object loginUser = session.getAttribute("loginUser");//从session中获取数据
        login.info("loginUser:{}",loginUser);
        return Result.success(loginUser);
    }
```

* 优点:存储在服务端,安全
* 缺点:
* * 服务器集群环境下无法直接使用Session
  * Cookie的缺点

#### 令牌技术(主流)

* 优点:
* * 支持pc端,移动端
  * 解决集群环境下的认证问题
  * 减轻服务器端的存储压力
* 缺点:需要自己实现

全称:`JSON web Token`<br>

定义了一种简洁的,自包含的格式,用于在通信双方以json数据格式安全的传输信息,由于数字签名的存在,这些信息是可靠的。

* 组成
* * 1. Header(头),记录令牌类型,签名算法等.eg:`{"alg":"HS256","type":"JWT"}`
    2. Payload(有效载荷),携带一些自定义信息,默认信息等.eg:`{"id":"1","username":"tom"}`
    3. Signature(签名),防止Token被篡改,确保安全性.将header,payload,并加入指定密钥,通过指定签名算法计算而来。

Base64:是一种基于64个可打印字符`(A-Z,a-z,0-9 +/)`来表示二进制数据的编码格式

引入依赖:

```xml
  <dependency>
        <groupId>io.jsonwebtoken</groupId>
        <artifactId>jjwt</artifactId>
        <version>0.9.1</version>
 </dependency>
```



生成JWG令牌:

```java
    @Test
    public void testJwt(){
        Map<String ,Object> claims = new HashMap<>();
        claims.put("id",1);
        claims.put("name","tom");
        String jwt = Jwts.builder()
                .signWith(SignatureAlgorithm.HS256,"itheima")//签名算法
                .setClaims(claims)//自定义内容(载荷)
                .setExpiration(new Date(System.currentTimeMillis() + 3600*1000))//设置有效期为1h
                .compact();
        System.out.println(jwt);
    }
```

如果上面的报错,可以尝试引入依赖:

```xml
    <dependency>
            <groupId>javax.xml.bind</groupId>
            <artifactId>jaxb-api</artifactId>
            <version>2.3.1</version>
    </dependency>
```

解析JWT令牌:

```java
    @Test
    public void testParseJwt(){
        Claims claims = Jwts.parser()
                .setSigningKey("itheima")
                .parseClaimsJws("eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoidG9tIiwiaWQiOjEsImV4cCI6MTcyMDg5Njg3MH0.IY-phYW_l5Z04jMC-FxKpLFgTG0MubR9nTttQ158-og")
                .getBody();
        System.out.println(claims);
    }
```

* JWT校验时使用的签名密钥,必须和生成JWT令牌使用的密钥是配套的
* 如果JWT令牌解析校验时错误,则说明JWT令牌被篡改或失效了,令牌非法。





***使用***

* 引入JWT令牌操作工具类

* 登录完成后,调用工具类生成JWT令牌,并返回

工具类对上面的生成和解析代码进行了封装。<br>

登录成功,生成令牌并返回(字符串类型)。<br>

登录失败,返回错误提示信息。<br>

### 过滤技术Filter

* Filter过滤器,是javaWeb三大组件(Servlet,Filter,Listener)之一
* 过滤器可以把对资源的请求拦截下来,从而实现一些特殊的功能
* 过滤器一般完成一些通用的操作,比如:登录校验,同一编码处理,敏感字符处理等。



1. 定义Filter:定义一个类,实现Filter接口,并重写其所有方法。
2. 配置Filter:Filter类上面加`@WebFilter`注解,配置拦截资源路径。引导类上加`@ServletComponentScan`开启`ServletComponentScan`开启Servlet组件支持。

初始化方法和销毁方法都只调用一次。doFilter可调用多次。
```java
@WebFilter(urlPatterns = "/*")//拦截所有请求
public class DemoFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        Filter.super.init(filterConfig);
    }
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
    }
    @Override
    public void destroy() {
        Filter.super.destroy();
    }
}
```
在doFilter中添加`filterChain.doFilter(servletRequest,servletResponse);`放行。

放行后访问对应资源,资源访问完成后,会返回到Filter中,继续执行放行后的逻辑。

拦截路径:
* 拦截具体路径:`/login`只有访问`/login`路径时,才会被拦截
* 目录拦截:`/emps/*`访问`/emps`下的所有资源,都会被拦截
* 拦截所有`/*`访问所有资源都会被拦截

***过滤器链***
一个web应用中,配置多个过滤器,这多个过滤器就形成了一个过滤器链。

优先级是按照过滤器类名的自然排序。


***登录校验功能***
登录请求不需要校验令牌。<br>
步骤:
* 获取url
* 判断请求url中是否包含login,如果包含,说明是登录操作,放行
* 获取请求头中的令牌(token)
* 判断令牌是否存在,如果不存在,返回错误结果(未登录)
* 解析token,如果解析失败,返回错误结果(未登录)。
* 放行

doFilter中的request。
```java
HttpServletRequest req = (HttpServletRequest)request;
HttpServletResponse resp = (HttpServletResponse)response;

String url = req.getRequestURL().toString();
if(url.contains("login")){
    log.info();
    chain.doFilter(request,response);
    return;
}

String jet = req.getHeader("token");

if(!StringUtils.hasLength(jwt)){
    Result error = Result.error("NOT_LOGIN");
    //手动转换-->阿里巴巴fastJson
    String notLogin = JSONNObject.toJSONObject.toString(error);
    resp.getWriter().write(notLogin);
    return;
}
//校验
try{
    JetUtils.parseJWT(jwt);
}catch(Exception e){
    e.printStackTrace();
    String notLogin = JSONNObject.toJSONObject.toString(error);
    resp.getWriter().write(notLogin);
    return;
}

chain.doFilter(request,response);
```


### 拦截器Interceptor

概念:是一种动态拦截方法调用的机制,类似于过滤器。Spring框架中提供的,用来动态拦截控制器方法的执行。
作用:拦截请求,在指定的方法调用前后,根据业务需要执行预先设定的代码。

使用
1. 定义拦截器,实现Handlerlntereptor接口,并重写其所有方法
2. 注册拦截器

```java
@Component
public class LoginCheckInterceptor implements HandlerInterceptor {
    @Override//目标资源方法运行前运行,返回true放行
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //return HandlerInterceptor.super.preHandle(request, response, handler);
        return true;
    }
    @Override//目标方法运行后运行
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
    }
    @Override//视图渲染完毕后运行,最后运行
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }
}
```

```java

@Configuration//配置类
public class WebConfig implements WebMvcConfigurer {
    @Autowired
    private LoginCheckInterceptor loginCheckInterceptor;
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(loginCheckInterceptor).addPathPatterns("/**");//加上.excludePathPatterns("/login")不拦截的
    }
}
```

* `/*`一级路径
* `/**`任意级路径
* `/depts/*`/depts下的一级路径
* `/depts/**`dptes下的任意级路径


两者的区别:
* 接口规范不同:过滤器需要实现Filter接口,而拦截器需要实现HandlerInterceptor接口
* 拦截范围不同:过滤器Filter会拦截所有的资源,而Interceptor只会拦截Spring环境中的资源。

#### 登录校验

```java
 public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object handler) throws Exception {
        String url = req.getRequestURL().toString();
        if(url.contains("login")){
            return true;
        }

        String jwt = req.getHeader("token");

        if(!StringUtils.hasLength(jwt)){
            Result error = Result.error("NOT_LOGIN");
            //手动转换-->阿里巴巴fastJson
            String notLogin = JSONObject.toJSONString(error);
            resp.getWriter().write(notLogin);
            return false;
        }
//校验
        try{
            JwtUtils.parseJWT(jwt);
        }catch(Exception e){
            e.printStackTrace();
            String notLogin = JSONNObject.toJSONObject.toString(error);
            resp.getWriter().write(notLogin);
            return false;
        }
        return true;
    }
```

### 异常处理

* 程序开发过程中不可避免的会遇到异常现象。
* 方案一:在Controller的方法中进行tyr..catch处理(不推荐)
* 方案二:全局异常处理器。(推荐)

```java
@RestControllerAdvice//=@ControllerAdvice+@ResponseBody
public class GlobalExceptionHandler {
    @ExceptionHandler(Exception.class)//捕获所有异常
    public Result ex(Exception ex){
        ex.printStackTrace();
        return Result.error("操作失败,请联系管理员");
    }
}
```

## 事务管理

* 开启事务(一组操作开始前,开启事务):start tranction / begin;
* 提交事务(这组操作全部成功后,提交事务):commit
* 回滚事务(中间任何一个操作出现异常,回滚事务):rollback;



Spring事务管理

* 注解:`@Transactional`
* 位置:业务(service)层的方法上,类上,接口上
* 作用:将当前方法交给spring进行事务管理,方法执行前,开启事务,成功执行完毕,提交事务;出现异常,回滚事务。



配置一下日志开关:(application.yml中)

```xml
logging:
	level:
		org.springframework.jdbc.support.JdbxTransactionManage:debug
```

### 事务进阶

* rollbackFor
* propagation

默认情况下,只有出现RuntimeException才回滚异常,rollbackFor属性用于控制出现何种异常类型,回滚事务。

`@Transactional(rollbackFor=Exception.class)`





* propagation

事务传播行为:指的就是当一个事务方法被另一个事务方法调用时,这个事务方法应该如何进行事务控制。

| 属性值        | 含义                                                         |
| ------------- | ------------------------------------------------------------ |
| REQUIRED      | 默认值,需要事务,有则加入,无则创建新事务                      |
| REQUIRES_NEW  | 需要新事务,无论有无,总是创建新事务                           |
| SUPPORTS      | 支持事务,有则加入,无则在无事务状态中运行                     |
| NOT_SUPPORTED | 不支持事务,在无事务状态下运行,如果当前存在已有事务,则挂起当前事务 |
| MANDATORY     | 必须有事务,否则抛异常                                        |
| NEVER         | 必须没事务,否则抛异常                                        |

两个方法共用一个事务,发生异常都会回滚。比如往表中插入日志操作,1号事务出现异常,2号事务也会回滚,不执行。

`@Transactional(propagation = Propagation.REQUIRES_NEW)`在2号事务方法前加上。这样有了两个事务,第一个事务出错,第二个事务不会回滚。

* REQUIRES_NEW:当我们不希望事务之间相互影响时,可以使用该传播行为,比如:下订单前需要记录日志,不论订单保存成功与否,都需要日志记录能够记录成功。





## AOP

面向切面编程,面向方面编程.就是面向特定方法编程。

场景:

案例部分功能运行较慢,定位执行耗时较长的业务方法,此时需要统计每一个业务的执行耗时。

实现:

动态代理是面向切面编程最主流的实现,而SpringAOP是Spring框架的高级技术,旨在管理bean对象的过程中,主要通过底层的动态代理机制,对特定的方法进行编程。

### AOP快速入门

统计各个业务方法的执行耗时。

1. 导入依赖:在pom.xml中引入AOP依赖

```xml
 <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-aop</artifactId>
        </dependency>
```

2. 编写AOP程序:针对于特定方法根据业务需要进行编程。

```java
@Aspect//AOP类
@Component
public class TimeAspect {
    @Around("execution(* com.wzy.controller.*.*(..))")//切入点表达式
    public Object recodeTime(ProceedingJoinPoint joinPoint) throws Throwable {
        //1.获取方法运行开始时间
        long begin = System.currentTimeMillis();
        //2.运行原始方法
        Object result = joinPoint.proceed();
        //3.获取方法运行结束时间,计算计算执行耗时
        long end = System.currentTimeMillis();
        System.out.println(joinPoint.getSignature()+" 方法执行耗时:"+(end-begin));

        return result;
    }
}
```



* 记录操作日志
* 权限控制
* 事务管理

### AOP核心概念

* 连接点:JoinPoint,可以被AOP控制的方法(暗含方法执行时的相关信息)
* 通知:Advice,指哪些重复的逻辑,也就是共性功能(最终体现为一个方法)
* 切入点:PointCut,匹配连接点的条件,通知仅会在切入点方法执行时被应用
* 切面:Aspect,描述通知与切入点的对应关系(通知+切入点)
* 目标对象:Target,通知所应用的对象

### AOP进阶

通知类型

* `@Around`环绕通知.此注解标准的通知方法在目标方法前,后都被执行
* `@Before`前置通知,此注解标注的通知方法在目标方法前被执行
* `@After`后置通知,此注解标注的通知方法在目标方法后执行,无论是否有异常都会执行
* `AfterReturning`返回后通知,此注解标注的通知方法在目标方法后被执行,有异常不会执行
* `AfterThrowing`异常后通知,此注解标注的通知方法发生异常后执行



<p style="color: blue;text-align: center;font-size: large;">未完待续~~~</p>

