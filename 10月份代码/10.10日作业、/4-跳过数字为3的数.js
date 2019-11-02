// 4.  求整数1～100的累加值，但要求跳过所有个位为3的数(while实现)


var sum = 0; //  累加和
var i = 1; // 初始化、
while(i <= 100){
    var ge = parseInt(i % 10);
    if(ge != 3){
        sum = sum + i;

    }
    i++;
}
console.log(sum)

// for(i=1;i<=100;i++){
//     if(i==3){
//         continue;
//     }console.log(i)
// }