
		// 各个楼层的高度

		$(function () {
			// 滚动事件
			$(document).scroll(function () {
				// 各楼层高度
				let jiaTop = $('.jia').offset().top;
				let dianTop = $('.dian').offset().top;
				let fuTop = $('.fu').offset().top;
				let meiTop = $('.mei').offset().top;

				let top = $(document).scrollTop();

				if (top >= meiTop) {
					$('.subnav li').removeClass('current');
					$('.subnav li').eq(3).addClass('current');
				} else if (top >= fuTop) {
					$('.subnav li').removeClass('current');
					$('.subnav li').eq(2).addClass('current');
				} else if (top >= dianTop) {
					$('.subnav li').removeClass('current');
					$('.subnav li').eq(1).addClass('current');
				} else if (top >= jiaTop) {
					// $('.subnav').show();
					$('.subnav').css('display', 'block');
					$('.subnav li').removeClass('current');
					$('.subnav li').eq(0).addClass('current');
				} else {
					// $('.subnav').hide();
					$('.subnav').css('display', 'none');
				}
			})

			// 点击返回
			$('.back').click(function () {
				$(document).scrollTop(0);
			})
		})