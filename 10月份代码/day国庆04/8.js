// 28.利用JavaScript编写程序，定义一个变量num并且赋值,
// 1)如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
// 2)如果 num 能被 3 整除，返回字符串 fizz
// 3)如果 num 能被 5 整除，返回字符串 buzz
// 4)如果num不是 Number 类型，返回 false
// 5)其余情况，返回参数 num


var num=100
for(x=1;x<=100;x++){
    if(num%3==0&&num%5==0){
        console.log('返回字符串fizz')
    }else if (num%3==0){
        console.log('返回字符串fizz')
    }else if (num%5==0){
        console.log('返回字符串buzz')
    }else if (num!=Number){
        console.log('返回false')
    }else{
        console.log('返回参数num')
    }
}console.log(num)