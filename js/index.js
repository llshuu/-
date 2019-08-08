//导航-全部分类	//顶部浮动导航
function addTwoMenu() {
  var menu = $(".wrap .all-sort-list").html();
  $(".floattopnav .all-sort-list").append(menu);
};
function ationTwoMenu(targent) {
  targent.find(".item").each(function() {
    $(this).mouseenter(function() {
	  $(this).addClass("all-sort-listcurrent");
	  $(this).children(".item-list").show().css("opacity", 0.1).animate({
	    paddingLeft: '15px',
		opacity: 1
	  }, 500);
	});
	$(this).mouseleave(function() {
	  $(this).removeClass("all-sort-listcurrent");
	  $(this).children(".item-list").hide().animate({
	    paddingLeft: '0px'
	  }, 10);
	});
  });
};
$(function() {
  ationTwoMenu($(".wrap .all-sort-list"));
  addTwoMenu();
  var showTop = $(".rxph").offset().top;
  $(window).scroll(function() {
    var bsltop = $(this).scrollTop();
	if (bsltop > showTop - 500) {
	  $(".floattopnav").show();
	} else {
	  $(".floattopnav").hide();
	};
  });
  $(".floattopnav .floattopnav_list").mouseenter(function() {
	$(".floattopnav .all-sort-list").show();
  });
  $(".floattopnav .floattopnav_list").mouseleave(function() {
	$(".floattopnav .all-sort-list").hide();
  });
  ationTwoMenu($(".floattopnav .all-sort-list"));
});
//楼层
$(function() {
  $(window).scroll(function() {
    var ling = $(document).scrollTop();
	if (ling > 1600) {
	  $('.floatnav').show();
	}
	if (1600 < ling && ling < 2150) {
	  $('.floatnav ul li').eq(0).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(0).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 2950) {
	  $('.floatnav ul li').eq(1).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(1).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 3550) {
	  $('.floatnav ul li').eq(2).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(2).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 4200) {
	  $('.floatnav ul li').eq(3).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(3).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 4600) {
	  $('.floatnav ul li').eq(4).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(4).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 5400) {
	  $('.floatnav ul li').eq(5).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(5).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 5650) {
	  $('.floatnav ul li').eq(6).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(6).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 6500) {
	  $('.floatnav ul li').eq(7).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(7).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 7050) {
	  $('.floatnav ul li').eq(8).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(8).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	} else if (ling < 7500) {
	  $('.floatnav ul li').eq(9).find('.num').hide().siblings('.word').css('display', 'block');
	  $('.floatnav ul li').eq(9).siblings('li').find('.num').css('display', 'block').siblings('.word').hide();
	}
	if (ling < 1600) {
	  $('.floatnav').hide();
	}
  })
})
$(function() {
	$('.floatnav ul li').hover(function() {
		$(this).find('.num').hide().siblings('.word').css({
			'display': 'block',
			'color': 'd70c19'
		});
	}, function() {
		$(this).find('.num').css({
			'display': 'block',
			'background': 'white',
			'color': '#666'
		}).siblings('.word').hide().css({
			'display': 'none',
			'background': '',
			'color': ''
		});
	})
})
//图片轮播（新品推荐）	
//图片轮播（新品推荐）	
$(document).ready(function(){
	var lb = $(".xptj"),
		lb_cur = 1,
		lbp_w = lb.find(".xptj_main ul").width();
		lb_timer = null;
	t = 1;
	function showLimitBuyProducts(){
		if(lb_cur < 1){
			lb_cur = 4;
		} else if(lb_cur > 4){
			lb_cur = 1;
		}
		var products = $(".xptj ul").hide().eq(lb_cur-1).show(),
			ta = products.find("textarea");
		if(ta.length){
			products.html(ta.val());
		}
	}
	lb_timer = setInterval(function(){
		lb_cur++;
		showLimitBuyProducts();
	}, 4000);
	$(" .prev").click(function(){
		lb_cur--;
		showLimitBuyProducts();
	});
	$(".next").click(function(){
		lb_cur++;
		showLimitBuyProducts();
	});
	$(".xptj").hover(function(){
			clearInterval(lb_timer);
			lb_timer = null;
			$(".prev, .next").show();
		}, function(){
			lb_timer = setInterval(function(){
				lb_cur++;
				showLimitBuyProducts();
			}, 5000);
			$(" .prev, .next").hide();
	});
});
