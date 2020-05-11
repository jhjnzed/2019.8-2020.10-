const http = require('http');
const url = require('url')
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const app = http.createServer();
app.on('request', (req, res) => {
    let pathname = url.parse(req.url).pathname;

    let absolutePath = path.join(__dirname , pathname);
    fs.readFile(absolutePath, (err, data) => {
        if (err != null) {
            res.writeHead(200, {
                // text/html代表服务器向浏览器发送了什么类型的文件
                'Content-Type': 'text/plain;charset=utf8'
            })
            res.end('Not found')
            return;
        }
        let type = mime.getType(absolutePath)
        res.writeHead(200, {
            // text/html代表服务器向浏览器发送了什么类型的文件
            'Content-Type': type
        })
        res.end(data)
    })
    res.end('data');
})

app.listen(80, () => {
    console.log('打开 http://localhost')
})