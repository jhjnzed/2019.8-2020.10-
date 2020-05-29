// 1.引入模块
const mongoose = require('mongoose');
// 2.连接数据库
mongoose.connect('mongodb://localhost/db_system', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => {
    console.log("数据库连接成功")
});

const User = new mongoose.model('User', new mongoose.Schema({
    username: {
        type: String,
        required: [true, '请输入用户名'],
        minlength: [2, '长度最少2个字符'],
        maxlength: [6, '长度最大6个字符']
    },
    password: {
        type: String,
        require: true
    },
    hobbies: {
        type: [String],
        enum: {
            values: ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头']
        }
    }
}))