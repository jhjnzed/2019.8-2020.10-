// 6.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列


var arr1 = [1,7,9,11,8,15,10,19];

var arr2 =[2,1,6,8,10];

var arr3 = arr1.concat(arr2);

for(var i=0;i<arr3.length;i++){   // 用 双循环 遍历  

    for(var j=i+1;j<arr3.length;j++){    //  当不等于自身元素进行判断
        if(arr3[j]==arr3[i]){   //判断 第一个元素是否等于第二个元素
            arr3.splice(j,1);   //  如果 相同就删除掉
            j--          //   如果遇到相同的元素则返回第一次再进行0 删除
        }

    }
}
var result = arr3.sort(function (a,b) { return a -b})
console.log(result)