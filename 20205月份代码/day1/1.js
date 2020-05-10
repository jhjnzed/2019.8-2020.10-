// let fs=require('fs')

// fs.readFile('./gaodx.txt','utf8',function(err,data){
//     console.log(err);
//     console.log(data);
// })


// const fs = require('fs');
// let content = '<h2>死亡如风常伴吾身</h2>';

// fs.writeFile('./index.html', content, function (err) {
//     if (err != null) {
//         console.log(err);
//         return;
//     }
//     console.log('可以');
// })

// fs.mkdir('./dong', {
//     recursive: true
// }, function (err, path) {
//     if (err != null) {
//         console.log(arr);
//         return;
//     }
//     console.log(path)
// })
 
 

// const path=require('path');
// let fina=path.join('public','gdx.jpg')
// console.log(fina)

const fs = require('fs');
const path = require('path');
// console.log(__dirname);
// console.log(path.join(__dirname,'gaodx.txt'))

fs.readFile(path.join(__dirname, 'gaodx.txt'), 'utf8', function (err, data) {
    console.log(err);
    console.log(data)
})