// 16.var arr = ['张三'，'李四'，‘王五’]
// 要求，将数组中的每一个数据拼接在一起，每个数据之间用 | 符合拼接。 如：‘张三|李四|王五




var arr = ['张三', '李四', '王五'];
// 创建一个空的字符串
var str = '';
// 遍历数组
for (var i = 0; i < arr.length; i++) {

    // 使用|拼接数组
    // 判断是否为最后一个元素，如果不是，使用 | 拼接，如果是，则直接输出元素
    if(i != arr.length - 1){

        str =  str + arr[i] + '|'
    }else{
        str = str + arr[i]
    }
}
console.log(str);


