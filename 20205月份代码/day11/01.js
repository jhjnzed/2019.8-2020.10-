const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_datanase', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('数据库连接成功了')
    })
    .catch((err) => {
        console.log(err, '数据失败了')
    })