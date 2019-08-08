// JavaScript Document
//楼层
 $(function(){
     $(window).scroll(function(){
		var ling = $(document).scrollTop();
		if(ling>400){
			$('.floatnav1').show();
		}
		if(400<ling && ling<887){
			$('.floatnav1 ul li').eq(0).find('.num').hide().siblings('.word').css('display','block');
			$('.floatnav1 ul li').eq(0).siblings('li').find('.num').css('display','block').siblings('.word').hide();
		}else if(ling<1460){
			$('.floatnav1 ul li').eq(1).find('.num').hide().siblings('.word').css('display','block');
			$('.floatnav1 ul li').eq(1).siblings('li').find('.num').css('display','block').siblings('.word').hide();
		}else if(ling<2030){
			$('.floatnav1 ul li').eq(2).find('.num').hide().siblings('.word').css('display','block');
			$('.floatnav1 ul li').eq(2).siblings('li').find('.num').css('display','block').siblings('.word').hide();
		}else if(ling<2650){
			$('.floatnav1 ul li').eq(3).find('.num').hide().siblings('.word').css('display','block');
			$('.floatnav1 ul li').eq(3).siblings('li').find('.num').css('display','block').siblings('.word').hide();
		}else if(ling<3182){
			$('.floatnav1 ul li').eq(4).find('.num').hide().siblings('.word').css('display','block');
			$('.floatnav1 ul li').eq(4).siblings('li').find('.num').css('display','block').siblings('.word').hide();
		}else if(ling<3748){
			$('.floatnav1 ul li').eq(5).find('.num').hide().siblings('.word').css('display','block');
			$('.floatnav1 ul li').eq(5).siblings('li').find('.num').css('display','block').siblings('.word').hide();
		}else if(ling<4300){
			$('.floatnav1 ul li').eq(6).find('.num').hide().siblings('.word').css('display','block');
			$('.floatnav1 ul li').eq(6).siblings('li').find('.num').css('display','block').siblings('.word').hide();
		}else if(ling<4433){
			$('.floatnav1 ul li').eq(7).find('.num').hide().siblings('.word').css('display','block');
			$('.floatnav1 ul li').eq(7).siblings('li').find('.num').css('display','block').siblings('.word').hide();
		}
		if(ling<50){
			$('.floatnav1').hide();
		}

	})
	})
	$(function(){
		$('.floatnav ul li').hover(function(){
			$(this).find('.num').hide().siblings('.word').css({'display':'block','color':'d70c19'});
		},function(){
			$(this).find('.num').css({'display':'block','background':'white','color':'#666'}).siblings('.word').hide().css({'display':'none','background':'','color':''});
		})
	})