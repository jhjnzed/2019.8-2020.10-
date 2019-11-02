// 22. 录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）


var num=12325;
var g,s,b,q,w;
    g=num%10;                      //个
    s=parseInt(num%100/10);        //十
    b=parseInt(num%1000/100);      //百
    q=parseInt(num%10000/1000);    //千
    w=parseInt(num%100000/10000)   //万

    if(g==w && s==q)
    {
        console.log("回文数");
    }
    else{
        console.log("不是回文数");
    }