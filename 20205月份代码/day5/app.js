const express = require('express');
const path = require('path')
const app = express();
// console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
app.get('/simple', (req, res) => {
    res.send('hello ,  world')
})
app.get('/getParam', (req, res) => {
    res.send(req.query)
})

app.post('/postPraram', (req, res) => {
    res.send('我是post请求的响应')
})
app.listen(80, () => {
    console.log('  打开:  http://localhost')
})