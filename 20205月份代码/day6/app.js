const express = require('express');
const path = require('path')
// const sss = require('querystring')
const app = express();
// const bodyp = require('body-parser')

// console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
// app.use(bodyp.json())
// app.post('/json', (req, res) => {
//     console.log(req.body)
//     res.send('你吼')
// })
// app.use(express.urlencoded());
app.get('/reqGet', (req, res) => {
    console.log(req.query);
    res.send('好像成功了')
})
app.listen(80, () => {
    console.log('  打开:  http://localhost')
})