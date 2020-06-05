const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://66.112.215.31:27017/LOL_blog', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('数据库连接成功');
    }).catch((err) => {
        console.log(err)
    })
