// 引入mongoose包
const mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/db_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("数据库连接成功")
}).catch((err) => {
    console.log("数据库连接失败")
})


const User = new mongoose.model('User',
    new mongoose.Schema({
        name: {
            type: String
        }
    }));

const Post = new mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}))

Post.create({
    title: '为什么输没点b数吗？',
    author: '5ecf80ea93548c28a43a58d6'
})
Post.find().populate('author').then((result) => {
    console.log(result)

})