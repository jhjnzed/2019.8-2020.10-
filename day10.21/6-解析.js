// 6.下列代码控制台打印出的值是多少？并且把预解析的过程写出来
(function (num) {
    console.log(num); // ？  100  因为实参是100     so
    var num = 10;
    console.log(num);  // ?  10    因为局部是10     
}(100))
