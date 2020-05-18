// 引入框架
const express = require('express');
// 路径处理模块
const path = require('path');
const bodyParser = require('body-parser')
// 创建web服务器
const app = express();
// 静态资源访问功能
// app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))
// ajax入门
app.get('/first', (req, res) => {
    res.send('Hello');
})
app.get('/responseData', (req, res) => {
    res.send({ 'name': 'zs' })
})
// get请求参数
app.get('/get', (req, res) => {
    res.send(req.query);
})
// post请求参数
app.post('/post', (req, res) => {
    res.send(req.body);
})
// json请求参数
app.post('/json', (req, res) => {
    res.send(req.body);
    // console.log(req.body);
})
// 创建路由
app.get('/readystate', (req, res) => {
    res.status(400).send('hello')
})
// ajax错误处理
app.get('/error', (req, res) => {
    res.status(400).send('not ok');
})
// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('服务器启动成功');
