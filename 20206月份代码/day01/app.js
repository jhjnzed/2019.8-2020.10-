const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, 'public')))

app.engine('art', require('express-art-template'))
// app.get('/xxx/:id/:name/:age', (req, res) => {
//     res.send(req.params)
// })



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'art');

app.locals.user={
    name:'牛b',
    age:18
}

app.get('/', (req, res) => {
    let ster = '首页'

    res.render('index', {
        title: ster
    });
})
app.get('/about', (req, res) => {
    // res.send('关于')
    let data = {
        title: "关于我们",
        list: ['羽毛球', '乒乓球', '起码', '射箭', '舞剑', '打游戏']

    }
    res.render('about', data)
})
app.get('/list', (req, res) => {
    res.send('列表')
})

app.listen(3000, function () {
    console.log('http://localhost:3000');

})