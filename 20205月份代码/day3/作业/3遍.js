// const http = require('http');
// const url = require('url')
// // 使用http模块创建服务
// let app = http.createServer();

// // 监听事件
// app.on('request', function (req, res) {
//     res.writeHead(200, {
//         // text/html代表服务器向浏览器发送了什么类型的文件
//         'Content-Type': "text/html;charset=utf-8"
//     })
//     console.log(req.url)
//     let params = url.parse(req.url, true);
//     console.log(params.query.username, params.query.password)
//     if (params.query.username == 'TOM' && params.query.password == '123456') {
//         res.write('欢迎您' + params.query.username)
//     } else {
//         res.write('请注册')
//     }
// })
// // 监听指定端口并启动服务
// app.listen(3000, function () {
//     console.log('请访问http://127.0.0.1:3000')
// })




// const http = require('http');
// const url = require('url')
// // 使用http模块创建服务
// let app = http.createServer();

// // 监听事件
// app.on('request', function (req, res) {
//     res.writeHead(200, {
//         // text/html代表服务器向浏览器发送了什么类型的文件
//         'Content-Type': "text/html;charset=utf-8"
//     })
//     console.log(req.url)
//     let params = url.parse(req.url, true);
//     console.log(params.query.username, params.query.password)
//     if (params.query.username == 'TOM' && params.query.password == '123456') {
//         res.write('欢迎您' + params.query.username)
//     } else {
//         res.write('请注册')
//     }
// })
// // 监听指定端口并启动服务
// app.listen(3000, function () {
//     console.log('请访问http://127.0.0.1:3000')
// })

















// const http = require('http');
// const url = require('url')
// // 使用http模块创建服务
// let app = http.createServer();

// // 监听事件
// app.on('request', function (req, res) {
//     res.writeHead(200, {
//         // text/html代表服务器向浏览器发送了什么类型的文件
//         'Content-Type': "text/html;charset=utf-8"
//     })
//     console.log(req.url)
//     let params = url.parse(req.url, true);
//     console.log(params.query.username, params.query.password)
//     if (params.query.username == 'TOM' && params.query.password == '123456') {
//         res.write('欢迎您' + params.query.username)
//     } else {
//         res.write('请注册')
//     }
// })
// // 监听指定端口并启动服务
// app.listen(3000, function () {
//     console.log('请访问http://127.0.0.1:3000')
// })



























// const http = require('http');
// // 使用http模块创建服务
// let app = http.createServer();

// // 监听事件
// app.on('request', function (req, res) {
//     res.writeHead(200, {
//         // text/html代表服务器向浏览器发送了什么类型的文件
//         'Content-Type': "text/html;charset=utf-8"
//     })
//     // console.log(req.url)
//     if (req.url == '/' || req.url == '/index') {
//         res.end('首页')
//     }
//     if (req.url == '/list') {
//         res.end('列表')
//     }
//     if (req.url == '/article') {
//         res.end('登录')
//     }
// })
// // 监听指定端口并启动服务
// app.listen(3000, function () {
//     console.log('请访问http://127.0.0.1:3000')
// })











// const http = require('http');
// // 使用http模块创建服务
// let app = http.createServer();

// // 监听事件
// app.on('request', function (req, res) {
//     res.writeHead(200, {
//         // text/html代表服务器向浏览器发送了什么类型的文件
//         'Content-Type': "text/html;charset=utf-8"
//     })
//     // console.log(req.url)
//     if (req.url == '/' || req.url == '/index') {
//         res.end('首页')
//     }
//     if (req.url == '/list') {
//         res.end('列表')
//     }
//     if (req.url == '/article') {
//         res.end('登录')
//     }
// })
// // 监听指定端口并启动服务
// app.listen(3000, function () {
//     console.log('请访问http://127.0.0.1:3000')
// })








// const http = require('http');
// // 使用http模块创建服务
// let app = http.createServer();

// // 监听事件
// app.on('request', function (req, res) {
//     res.writeHead(200, {
//         // text/html代表服务器向浏览器发送了什么类型的文件
//         'Content-Type': "text/html;charset=utf-8"
//     })
//     // console.log(req.url)
//     if (req.url == '/' || req.url == '/index') {
//         res.end('首页')
//     }
//     if (req.url == '/list') {
//         res.end('列表')
//     }
//     if (req.url == '/article') {
//         res.end('登录')
//     }
// })
// // 监听指定端口并启动服务
// app.listen(3000, function () {
//     console.log('请访问http://127.0.0.1:3000')
// })













// const http = require('http');
// const querystring = require('querystring')
// // 使用http模块创建服务
// let app = http.createServer();

// // 监听事件
// app.on('request', function (req, res) {
//     res.writeHead(200, {
//         // text/html代表服务器向浏览器发送了什么类型的文件
//         'Content-Type': "text/html;charset=utf-8"
//     })
//     let postDate = ''
//     req.on('data', (chunk) => {
//         // console.log(chunk)
//         postDate += chunk
//     })
//     req.on('end', () => {
//         let finalData = querystring.parse(postDate)
//         console.log(postDate)
//     })
// })
// // 监听指定端口并启动服务
// app.listen(3000, function () {
//     console.log('请访问http://127.0.0.1:3000')
// })














// const http = require('http');
// const querystring = require('querystring')
// // 使用http模块创建服务
// let app = http.createServer();

// // 监听事件
// app.on('request', function (req, res) {
//     res.writeHead(200, {
//         // text/html代表服务器向浏览器发送了什么类型的文件
//         'Content-Type': "text/html;charset=utf-8"
//     })
//     let postDate = ''
//     req.on('data', (chunk) => {
//         // console.log(chunk)
//         postDate += chunk
//     })
//     req.on('end', () => {
//         let finalData = querystring.parse(postDate)
//         console.log(postDate)
//     })
// })
// // 监听指定端口并启动服务
// app.listen(3000, function () {
//     console.log('请访问http://127.0.0.1:3000')
// })


















const http = require('http');
const querystring = require('querystring')
// 使用http模块创建服务
let app = http.createServer();

// 监听事件
app.on('request', function (req, res) {
    res.writeHead(200, {
        // text/html代表服务器向浏览器发送了什么类型的文件
        'Content-Type': "text/html;charset=utf-8"
    })
    let postDate = ''
    req.on('data', (chunk) => {
        // console.log(chunk)
        postDate += chunk
    })
    req.on('end', () => {
        let finalData = querystring.parse(postDate)
        console.log(postDate)
    })
})
// 监听指定端口并启动服务
app.listen(3000, function () {
    console.log('请访问http://127.0.0.1:3000')
})