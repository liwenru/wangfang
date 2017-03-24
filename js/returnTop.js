$.fn.extend({
	sTopMove:function(end,fn) {
		var start = $(window).scrollTop();
		var change = end-start;
		var t = 0;
		var endT = 30;
		var timer = setInterval(function () {
			t++;
			if (t>=endT) {
				clearInterval(timer);
				fn && fn();
			}
			var sTop = easeOut(t,start,change,endT);
			$(window).scrollTop(sTop);
		},30)

		 function easeOut(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        }

	}
})

//返回顶部
 $(window).scroll(function (){
	if(document.body.scrollTop>0 ||document.documentElement.scrollTop>0){
		$(".return_top").css("display","block")
		console.log(22)
	}else{
		$(".return_top").css("display","none")
		console.log(11)
	}

	
})

$(".return_top").on("click",function(){
	//开始的位置
	// var start=document.body.scrollTop ||document.documentElement.scrollTop;
	// // console.log(start);
	// //结束的位置
	// var end=0;
	// var change=end-start;
	// //步数
	// var endT=100;
	// //开始的步数
	// var t=0;
	// var timer=setInterval(function(){
	// 	if(t>=endT){
	// 		clearInterval(timer);
	// 	}else{
	// 		var returnT=Tween.Bounce.easeOut(t,start,change,endT);
	// 		console.log(returnT);
	// 		// document.body.scrollTop =document.documentElement.scrollTop=returnT+'px';
	// 		document.body.scrollTop = document.documentElement.scrollTop =returnT;
	// 		console.log(document.body.scrollTop ||document.documentElement.scrollTop);
	// 	}

		
	// 	t++;
		
	// },20);
	
	$(window).sTopMove(0);
	})

