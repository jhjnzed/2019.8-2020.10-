// 2. 100以内7的倍数的总和(while实现)

var num = 1
var sum = 0
while (num <= 100) {
  if (num % 7 == 0) {
    sum += num
  }
  num++;
}
console.log(sum);

var sum=0
 for(i=1;i<=100;i++){
     if(i%7==0){
         sum+=i
     }
 }console.log(sum)