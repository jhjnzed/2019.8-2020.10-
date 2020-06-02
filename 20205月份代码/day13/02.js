const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log(54545645);
    next()
})
app.use('/', (req, res, next) => {
    console.log(12124);
    next()
})

app.get('/', (req, res) => {
    console.log('路由');
    res.send('我是路由/请求')
})
app.listen(80)