//3.获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}



var url = "https://www.test.com/login?name=zs&pwd=123";

var arr = url.split("?");
var arr1 = arr[1].split("&");

var nameArr = arr1[0].split("=");
var pwdArr = arr1[1].split("=");

var valueName1 = nameArr[1];
var valueName2 = pwdArr[1];


var user = {
    name: valueName1,
    pwd: valueName2
};

console.log(user);