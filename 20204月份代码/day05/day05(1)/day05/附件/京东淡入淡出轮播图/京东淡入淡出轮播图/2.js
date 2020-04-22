var $num = 0;
$('.slider>ul li').each(function (index, item) {
    $('.slider ol').append($('<li></li>'))
})
$('.slider ol li').eq(0).addClass('current')
$('.slider ol li').on('mouseenter', function () {
    var $index = $(this).index()
    $num = $index
    $(this).addClass("current").siblings().removeClass('current')
    $('.slider>ul li').eq($index).stop().fadeIn().siblings().stop().fadeOut()
})
$('.arrow-right').on('click', function () {
    $num++;
    if ($num == $('.slider>ul li').length) {
        $num = 0;
    }
    $('.slider>ul li').eq($num).stop().fadeIn().siblings().stop().fadeOut()
    $('.slider ol li').eq($num).addClass("current").siblings().removeClass('current')
})

$('.arrow-left').on('click', function () {
    $num--;
    if ($num < 0) {
        $num = $('.slider>ul li').length - 1;
    }
    $('.slider>ul li').eq($num).stop().fadeIn().siblings().stop().fadeOut()
    $('.slider ol li').eq($num).addClass("current").siblings().removeClass('current')
})
var timer = setInterval(function () {
    $('.arrow-right').click()
}, 2000)
$('.slider')
    .on('mouseenter', function () {
        clearInterval(timer)
        $('.arrow').show();
    })
    .on('mouseleave', function () {
        timer = setInterval(function () {
            $('.arrow-right').click()
        }, 2000)
        $('.arrow').hide();
    })