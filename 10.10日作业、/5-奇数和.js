// 5.  求100到200之间所有的奇数的和（while实现）


var sum = 0; 
var i = 100; 
while(i <= 200){

    if(i*2+1){
        sum = sum + i;
    }
    i++;
}


console.log(sum)
var sum=0
for(i=100;i<=200;i++){
    if(i*2+1){
       sum+=i 
    }
}console.log(sum)