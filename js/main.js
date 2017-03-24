$(".nav_r span").on("click",function(){
	$(".nav_r span").removeClass('active');
	$(this).addClass('active').siblings().removeClass('active');
})
// banner
	var inner = $(".ban_inner");
	console.log(inner)
	var spans = $(".ban_cir span");
	console.log(spans)
	var index = 0;
	var l=100;
	setInterval(function(){

		changeMoveFn();
		index++;
		// l-=100;
	}, 2500);
	
	function changeMoveFn(){
		if(index >$(".ban_inner img").length-1){
			index = 0;
		}
		spans.on("touchstart",function(){
			spans.removeClass("ban_active");
			$(this).addClass("ban_active");
		});
		spans.removeClass("ban_active");
		spans.eq(index).addClass("ban_active");
		inner.css("marginLeft",-index*l+"%");
	}
	// 圆点点击
	spans.each(function(){
		$(this).on("touchstart",function(){
			index=$(this).index();
			changeMoveFn();
			console.log("ok")
			// inner.css("marginLeft",l+"%")
			
		})
	})
// 成功案例
$(".suc_matter_detail>div").on("mouseenter",function(){
	console.log("aa")
	$(this).find(".matter_mask").addClass('move1').removeClass('move2')
})
$(".suc_matter_detail>div").on("mouseleave",function(){
	 $(this).find(".matter_mask").stop(true,true);
	$(this).find(".matter_mask").addClass('move2').removeClass('move1');

})


// 中英文
$(".chin").hover(function(){
	$(".chin ul").addClass('block');
	$(".chin ul li").click(function(){
		var sel=$(this).text();
		console.log(sel)
		$(".chin span").text(sel);
		$(".chin ul").addClass('none').removeClass('block');
	})
},function(){
	$(".chin ul").addClass('none').removeClass('block')
})


