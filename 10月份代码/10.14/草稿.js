// indexof找到该元素 ， 返回元素索引，找不到返回-1


// var index = index of(...)





// slice   切割数组  =  拷贝



// concat 连接数组    x3= x1.concat (x2)   


// reverse  数组翻转
// var arr =[1,2,3,4];


// console.log(arr.reverse())



var arr=[50,40,30,20,10,0];


for(i=0;i<arr.length-1;i++){
for(j=0;j<arr.length-1-i;j++){
    if(arr[j+1]>arr[j]){
        var x =arr[i];
        arr[i]=arr[j];
        arr[j]=arr[i];
  


    
    }
}


}console.log(arr)


var arr=[50,40,30,20,10,0];


for(i=0;i<arr.length-1;i++){
for(j=0;j<arr.length-1-i;j++){
    if(arr[j+1]<arr[j]){
        var x =arr[i];
        arr[i]=arr[j];
        arr[j]=arr[i];
  


    
    }
}


}console.log(arr)