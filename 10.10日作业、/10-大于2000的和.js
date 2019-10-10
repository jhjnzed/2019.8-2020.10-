


// 10. 求1到100所有不能被3整除的整数的第一个大于2000的和






var i = 1
var sum = 0

while (sum <= 2000) {

  if (i % 3 != 0) {
    sum += i
  }
  i++
}
console.log(sum);


// var sum =0 ;
// for(i=1;i<=100;i++){ 
//     if(i%3==0){
//         continue;
//     }sum+=i;
// if(sum>2000){

  
//     break;
// }console.log(sum)


// }console.log(sum)