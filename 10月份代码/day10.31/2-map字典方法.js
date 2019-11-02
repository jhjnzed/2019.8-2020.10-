// let map=new Map([
//     ['键','值']，
//     ...
// ])

// let map =new Map();


// console.log(map)


let map = new Map([
    ['name', 'hanhan'],
    ['age', 99]


])




    // // console.log(map)

    // //  查看 长度    size
    // // console.log(map.size);

    // //  增加数据set (去重)

    // console.log(map.set('name', '憨憨'));
    // console.log('____________________________________________________________________________________________________');
    // console.log(map.set('socrs', 99));
    // console.log('____________________________________________________________________________________________________')
    // console.log(map.set('bad', 'double'));


    // // 判断 这个键是否存在  has

    // console.log(map.has('bad'));
    // console.log(map.has('hanahn'));

    // //  get 获取键对应的值  


    // console.log(map.get('bad'))

    // //  删除  dellete成功会显示true      清空 clear  返回 空字符串
    // console.log('____________________________________________________________________________________________________');



    // console.log(map.delete('bad'));
    // console.log(map.delete('hanhan'));

    // //  直接 放在输出里面会显示 undefined
    // map.clear()
    // console.log(map);



    //map  set 可以用for... of  遍历



    // //获取  键    值
    // for (let key of map.keys()) {
    //     console.log(key)
    // }
    // for (let value of map.values()) {
    //     console.log(value)
    // }
    // //遍历   键值 2种    entries()      foreach


    // for (let item of map.entries()) {
    //     console.log(item[0] + '~~~~~~~~~~~~~~~~' + item[1])
    // }



    // map.forEach(function (value, key) {
    //     console.log(key + '·········' + value)
    // })




    `
总结
map.size  查看 长度
map.has   判断 在 否

map.delete  删除
 map.claer  清空

 map.set()  添加 键值

for  ...  of 

获取键
for(key of  map.keys){

}

获取值
for(value of  map.values){
    
}

for(let of map.entries()){

}

map.foeach(function(value,key){
    输出
})



****set 集合 也是 和map一样 的方法****
Array也可以


`