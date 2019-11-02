// 7. 写一个函数,  求圆的面积：PI *r *r，圆的周长  const 		PI=3.14




function getMianJi(r) {

    // 创建一个变量来储存PI

    const PI = 3.14;

    // 计算园的面积 PI * R * R
    var MianJi = PI * r * r;

    // 计算⚪的周长 pi * （2 * r）;
    var zc = PI * (2 * r);

    // 打印结果
    console.log('周长是:' + zc + '\n面积是:' + MianJi)

}

getMianJi(3);