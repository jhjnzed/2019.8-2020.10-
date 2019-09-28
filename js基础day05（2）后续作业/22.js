// 22. 录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）


var num=12325;
var num01W,num02W,num03W,num04W,num05W;
    num01W=num%10;                      //个
    num02W=parseInt(num%100/10);        //十
    num03W=parseInt(num%1000/100);      //百
    num04W=parseInt(num%10000/1000);    //千
    num05W=parseInt(num%100000/10000)   //万

    if(num01W==num05W && num02W==num04W)
    {
        console.log("回文数");
    }
    else{
        console.log("不是回文数");
    }