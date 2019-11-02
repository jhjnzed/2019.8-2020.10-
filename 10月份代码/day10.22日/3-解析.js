// 3.下列代码控制台打印出的值是多少？写出执行过程
function test() {
    b();
    var a = 1;
    function b() {
        console.log(a);  // ？
        var a = 2;
    }
}
test();




// function test(){
//     var a;  
//     b();  
//      a=1;
//    function b(){

//     var a
//         console.log(a);  // ？  undefind
//          a=2;
//     }
// }
// test();  