// 9.下列代码控制台打印出的值是多少？
(function f(num) {
    function num() { };
    console.log(num); // ？
    var num = 10
    console.log(num); // ？
}(100))


    //100
    (function f(num) {
        function num() { };
        console.log(num); // ？  [Function: num]
        var num = 10
        console.log(num); // ？  10
    }(100))
