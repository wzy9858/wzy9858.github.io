# AJAX

尚硅谷3小时Ajax入门到精通。br>

就是异步的js和xml。通过AJAX可以在浏览器中向服务器发送异步请求，最大的优势:无刷新获取数据。

优点:

* 可以无需刷新页面而与服务器端进行通信。
* 允许你根据用户事件来更新部分页面内容。

缺点:

* 没有浏览历史,不能回退
* 存在跨域问题(同源)
* SEO(搜索引擎优化,页面源码没有)不友好

## 请求报文

* 请求行

GET /?...   HTTP/1.1

* 请求头

HOST:   

Cookie:  

Content-type: 

User-Agent:

请求体是什么类型的。

* 空行

* 请求体

## 响应报文

* 行

HTTP/1.1  200 OK

* 头

Content-Type:

Content-length:

Content-encoding:

* 空行
* 体

```html
<html>
....
</html>
```

***Express***

基于node.js平台,快速,开发,极简的web开发框架。

`npm init -yes`

`npm i express`(管理员)

使用express如下,也可以使用javaweb接收,注意一下跨域问题。

```js
//这一部分可以在javaweb中实现
//1.引入express
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send("HELLO,EXPRESS");
});
//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已经启动,8000端口监听中");
}
```

`node 文件名`启动(管理员)

## GET请求

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJAX GET 请求</title>
    <style>
        #result{
            width: 200px;
            height: 100px;
            border: solid 1px #90b;
        }
    </style>
</head>
<body>
    <button>点击发送请求</button>
    <div id="result"></div>

    <script>
        //获取button元素
        const btn = document.getElementsByTagName('button')[0];
        const result = document.getElementById('result');
        //绑定事件
        btn.onclick = function(){l
            //1. 创建对象
            const xhr = new XMLHttpRequest();
            //2.初始化,设置请求方法和url
            xhr.open('GET','http://127.0.0.1:8000/server');
            //3. 发送
            xhr.send();
            //4.事件绑定,处理服务端返回的结果
            //on when当什么时候 
            //readystate 是xhr对象中的属性，表示状态 0 1 2 3 4
            //change 改变
            xhr.onreadystatechange = function(){
                //判断
                if(xhr.readyState == 4){
                    //判断响应状态码 200 404 403 401 500
                    if(xhr.status >= 200 && xhr.status < 300){
                        //处理结果 行 头 空行 体
                        //1.相应行
                        // console.log(xhr.status);//状态码
                        // console.log(xhr.statusText);//状态字符串
                        // console.log(xhr.getAllResponseHeaders());//所有响应头
                        // console.log(xhr.response);//响应体

                        //设置result的文本
                        result.innerHTML = xhr.response;
                    }else {
                        
                    }
                }
            }
            console.log('test');
        }
    </script>
</body>
</html>
```

## POST请求

xhr的状态

0：请求未初始化，还没有调用 open()。

1：请求已经建立，但是还没有发送，还没有调用 send()。

2：请求已发送，正在处理中（通常现在可以从响应中获取内容头）。

3：请求在处理中；通常响应中已有部分数据可用了，没有全部完成。

4：响应已完成；您可以获取并使用服务器的响应了。
