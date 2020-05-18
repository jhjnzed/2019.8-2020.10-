# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)
```js
     POST 和 GET
    GET应该多用于前端从后端获取数据使用 使用get不需要设置请求头

    POST多用于前端提交数据到后端使用(例如提交表单数据)
    使用post要设置请求头
```

2. 原生的ajax怎么发请求?(get和post的方式都写出来,每行写上注释)
```js
// GET
// 前端：
    // 创建xhr对象
    let xhr = new XMLHttpRequest()
    // 使用xhr对象的open方法设置请求方式和请求地址
    xhr.open('GET','/xxx'){
        // 发送请求
        xhr.send()
        // 通过xhr对象的onreadystatechange方法等待数据接收完毕 
        xhr.onreadystatechange = function(){
            // 使用xhr.responseText获得数据
            console.log(xhr.responseText)
        }
    }
// 后端：
    //引入包
    const express = require('express')
    const path = require('path')
    // 使用express()函数创建服务器
	const app =express()
	// 把public作为静态资源目录
	app.use(express.static(path.join(__dirname,'public')))
    // 添加接口 前端从后端获取数据 则使用get
	app.get('/xxx',(req,res)=>{
        // 发送响应
  	  res.send('HelloWorld')
	})
    // 设置端口
	app.listen(80,function(){
 	   console.log('http://localhost')
	})
    


// POST
// 前端：
    // 创建xhr对象
    let xhr = new XMLHttpRequest()
    // 设置post需要的请求头
    xhr.setRequestHeader("Content-Type",'application/x-www-form-urlencoded')
    // 使用xhr对象的open方法设置请求方式和请求地址
    xhr.open('POST','/xxx'){
        // 发送请求数据
        xhr.send('xxx')
        // 通过xhr对象的onreadystatechange方法等待数据接收完毕 
        xhr.onreadystatechange = function(){
            // 判断状态是否成功
            if(xhr.readyState == 4 && xhr.status == 200){
            // 5.把数据显示在页面上
            console.log(xhr.responseText)
            }
        }
    }

// 后端：
    //引入包
    const express = require('express')
    const path = require('path')
    // 使用express()函数创建服务器
	const app =express()
	// 把public作为静态资源目录
	app.use(express.static(path.join(__dirname,'public')))
    // 添加接口 前端从后端获取数据 则使用get
	app.post('/xxx',(req,res)=>{
        // 响应内容
  	  res.send(req.body)
	})
    // 设置端口
	app.listen(80,function(){
 	   console.log('http://localhost')
	})


        
```

3. jq的ajax的语法是什么?并且写出来目前你用到的属性每个的含义?
```js
    $.ajax({
        // 请求数据的方式
        type:'GET'
        // 记载数据的url地址 
        type:'/xxx',
        // 请求服务器的数据
        data:xxx,
        // 成功时的回调函数
        success:function(data){
            console.log(data)
        }
    })
```

4. 使用art-template模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)
```js
    1.导入template的包
    <script id="tpl" type="text/html">
	<div class="box"></div>
	</script>
    2.创建模板
    var html = template("tpl",{username:"zhangsan",age:"20"});
    3.告诉模板和哪一个数据继续拼接
    documen.getElenmentById("container").inerHTML = html;
```

5. art-template模板引擎的语法你知道的有哪些，并且总结出来?
```js
    // 填入数据
    <h2>{{user.name}}</h2>
    // 判断语法：
    {{if user}}
        <h2>{{user.name}}</h2>
    {{/if}}
    // 循环语法：
    {{each user}}
        {{$index}}{{$value}}
    {{/each}}
```

6. 客户端和服务端的通信过程是怎么样的？
```js
前端 触发事件后 以某种请求方式和请求地址 对应到后端  并发送请求数据，
如果后端接收顺利则返回数据
```

7. express怎么开放静态资源?
```js
    app.use(express.static('public'))
```

8. express怎么读文件和写文件?
```js
const fs = require('fs') // 引包
fs.readFile('路径', '编码方式', 回调函数) // 读文件
fs.writeFile('路径', 写入数据, 回调函数) // 写文件
```

9. JSON对象和JSON字符串是怎么进行相互转换的?
```js
JSON.parse('JSON字符串') -> JSON对象
JSON.stringify('JSON对象') -> JSON字符串
```

10. form表单怎么的属性有哪些？分别是什么意思？
```js
// action：接口地址
// method：提交方法
```

11. form表单怎么序列化获取值表单的值？
```js
// 获取表单中的值 并且按照:name1=value1&name2=value2的形式排列
let formDate = $('#form').serialize();
```

12. form表单怎么阻止默认的提交行为?
```js
// 阻止事件默认行为
event.preventDefault() // 调用该方法
```

13. 在客户端怎么由login.html页面跳转到首页index.html?
```js
// 在login.html的js中写入
location.href = '/index.html' 
// 触发事件后跳转至/index.html
```