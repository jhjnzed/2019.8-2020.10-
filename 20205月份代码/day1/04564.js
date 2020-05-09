// const http=require('http');

// let app=http.createServer();
// app.on('request',(req,res)=>{
//     res.end('<h1>jiangzima</h1>')
// })
// app.listen(3000,function(){
//     console.log(' 打开 http://127.0.0.1:3000')
// })

// const http = require('http');
// const url = require('url')
// let app = http.createServer();
// app.on('request', (req, res) => {
//     // console.log(req.method);
//     res.writeHead(200, {
//         'Content-Type': "text/html;charset=utf8"
//     })

//     // console.log(req.url);
//     let params = url.parse(req.url, true)
//     console.log(params.query.username, params.query.password)
//     if (params.query.username == 'tom' && params.query.password == '123456') {
//         res.write(' 你很棒棒哦 ' + params.query.username)
//     } else {
//         res.write('你怕是输错了吧 憨憨')
//     }
//     res.end()
//     // res.writeHead(200,{
//     //     'Content-Type':"text/html;charset=utf8"
//     // })
//     // res.end('成功')
// })
// app.listen(80, () => {
//     console.log(' 请发文:  http://localhost')
// })







const http = require('http');
const querystring = require('querystring')
// 使用http模块创建服务
let app = http.createServer();

// 监听事件
app.on('request', function (req, res) {
    res.writeHead(200, {
        // text/html代表服务器向浏览器发送了什么类型的文件
        'Content-Type': "text/html;charset=utf-8"
    })
    let postDate = ''
    req.on('data', (chunk) => {
        // console.log(chunk)
        postDate += chunk
    })
    req.on('end', () => {
        let finalData = querystring.parse(postDate)
        console.log(postDate)
    })
})
// 监听指定端口并启动服务
app.listen(80, function () {
    console.log('请访问http://localhost')
})




const http = require('http');
let app = http.createServer();
app.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': "text/html;charset=utf8"
    })
    console.log(req.url);
    if (req.url == '/' || req.url == '/index') {
        res.
        end('首页');
    }
    if (req.url == '/list') {
        res.
        end('列表项');
    }
    if (req.url == '/article') {
        res.
        end('文章页');
    }
    if (req.url == '/login') {
        res.
        end('登录页面');
    }
})
app.listen(80, function () {
    console.log('请访问http://localhost')
})