// 需求: 用for循环求2+22+222+2222+22222的和

// 等于 之前那个数 *10+2       再循环 4次    定义一个之前那个数 基数 x


 var x= 2

 var sum =0
 for(i=0 ; i<5 ; i++){
    x = x * 10 + 2;
   sum+=x
 }console.log(sum)