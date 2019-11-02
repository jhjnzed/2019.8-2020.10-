// 11.  var arr = [1,888,4,66,7,8]
// 要求，可以把数组中的下标为 3 的元素移到数组的开头  


var arr = [1,888,4,66,7,8];  // 定义数组

for(var i = 0; i < arr.length; i++){   // 遍历

    if(i == 3){   // 判断为下标为3的元素
        arr.unshift(arr[i]);   // 添加到数组头部
        
    }
}
console.log(arr)