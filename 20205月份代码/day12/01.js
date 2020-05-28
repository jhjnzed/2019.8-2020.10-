const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/db_blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('数据连接成功')
}).catch((err) => {
    console.log('数据连接失败')
})


// 创建越苏

// const userschma = new mongoose.Schema({
// name :{
//     type:String
// }
// })


// 应用越苏

const User = new mongoose.model('User', new mongoose.Schema({
    name: {
        type: String
    }
}));


User.create({

    name: '排位老输'
})
const Post = new mongoose.model('Post', new mongoose.Schema({
    // 文章标题
    title: {
        type: String
    },
    // 作者
    author: {
        //用户id(如果你的数据是用户的id就这样搞)
        type: mongoose.Schema.Types.ObjectId,

        ref: "User"
    }
}))


Post.create({
    title: '队友没点b数还怪我',
    author: 'idnengnnuanshuma'
})

// Post.find().then((result) => {
//     console.log(result)
// })

Post.find().populate('author').then((result) => {
    console.log(result)
})