// // 10.var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
//     要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
//     var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];







// 创建一个新数组
var oldArr = [1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5];
var newArr = [];
// 遍历旧数组
for(var i = 0; i < oldArr.length; i++){
    // 判断数组里面是否等于0，如果不等于0，push到新数组
    if(oldArr[i] != 0){
        newArr.push(oldArr[i]);
    }
    
}
console.log(newArr);
