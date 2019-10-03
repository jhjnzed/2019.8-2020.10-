
// 27.利用JavaScript编写程序，根据用户定义的运算符，如果是+号，
// 则求出2个数的和；如果是-号，则求出2个数的差；如果是*号，则求出2个数的积;
// 如果是/号，则求出2个数的商；如果是%,求出2给数的余数；否则打印输入有误。


var a=5
var b=5
var c='+'
if (c=='+'){
    console.log(a+b)
}
else if (c=='*'){
    console.log(a*b)
}
else if (c=='/'){
    console.log(a/b)
}
else if (c=='-'){
    console.log(a-b)
}
else if (c=='%'){
    console.log(a%b)
}
else{
    console.log('有误')
}