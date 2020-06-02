const express = require('express');
const app = express();
//
app.use('/admin', (req, res, next) => {
    // 用户登录标识
    let islogin = true;
    if (islogin) {
        next();
    } else {
        res.send('你还未登录')
    }
})
//
app.get('/admin', (req, res) => {
    res.send('已登录，可以访问当前页面')
})
//

app.use((req, res) => {
    res.status(404).send(`<img src="http://img1.imgtn.bdimg.com/it/u=3136626573,2216251976&fm=26&gp=0.jpg">`)
})
app.listen(3000, function () {
    console.log('http://localhost:3000');

})