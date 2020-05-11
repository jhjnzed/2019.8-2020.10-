
const http = require('http');
const url = require('url')
let app = http.createServer();
app.on('request', (req, res) => {
    // console.log(req.method);
    res.writeHead(200, {
        'Content-Type': "text/html;charset=utf8"
    })

    // console.log(req.url);
    let params = url.parse(req.url, true)
    console.log(params.query.username, params.query.password)
    if (params.query.username == 'tom' && params.query.password == '123456') {
        res.write(' 你很棒棒哦 ' + params.query.username)
    } else {
        res.write('你怕是输错了吧 憨憨')
    }
    res.end()
    // res.writeHead(200,{
    //     'Content-Type':"text/html;charset=utf8"
    // })
    // res.end('成功')
})
app.listen(80, () => {
    console.log(' 请发文:  http://localhost')
})
