// const express = require('express');
// const app = express();

// // app.use((req, res) => {
//     // res.write('nh');
//     // res.end()
//     // res.send('<h1>真不会乱码？</h1>')
//     app.get('/', (req, res) => {
//         res.send('<h1>首页</h1>')
//     })
//     app.get('/index', (req, res) => {
//         res.send('<h1>首页</h1>')
//     })

//     app.get('/list', (req, res) => {
//         res.send('<h1>列表项</h1>')
//     })

//     app.get('/artlicle', (req, res) => {
//         res.send('<h1>文章</h1>')
//     }) 
//     app.get('/login', (req, res) => {
//         res.send('<h1>登录</h1>')
//     })

// // })
// app.listen(80, () => {
//     console.log(' 开  ：  http://localhost')
// })





















// const express = require('express');
// const app = express();

// app.use((req, res) => {
//     // res.write('nh');
//     // res.end()
//     // res.send('<h1>真不会乱码？</h1>')
//     app.get('/', (req, res) => {
//         res.send('首页')
//     })
//     app.post('/login', (req, res) => {

//         res.send('这是表单在搞事情')
//     })


// })
// app.listen(80, () => {
//     console.log(' 搞起来  ：  http://localhost')
// })















const express = require('express');
const app = express();

app.use('/gaoxq', express.static('gaoxq'))
app.listen(80, () => {
    console.log(' 搞起来  ：  http://localhost')
})