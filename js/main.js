

var startY,endY,moveY;
//设变量页码
var index=1;
//$(CSS选择器).action(要执行的命令)；
//防止滑页Bug
var fingureMove=false;

$(".page").on("touchstart touchmove touchend",function(event){
	//可绑定多个事件
	switch(event.type){
		case "touchstart":
		startY=event.originalEvent.targetTouches[0].clientY;
		//console.log(startY);
		break;
		
		case "touchmove":
		endY=event.originalEvent.targetTouches[0].clientY;//client当前触摸
		fingureMove=true;
		break;
		
		case "touchend":
		moveY=endY-startY;//结束Y-开始Y（正数与负数）
		//console.log(moveY);
		if(!fingureMove)return;//触摸事件防止bug
		fingureMove=false;//页面结束
		if(moveY<0){
			
			if(index==$(".page").size())return;
			index++;//页码++换页
			$(this).addClass("toTop").next().removeClass("hidden").addClass("nextTop");
			$(this).on("animationend",function(){
				$(this).removeClass("toTop").addClass("hidden").next().removeClass("nextTop");
				$(this).off("animationend");
			});
		}
		/*页面往回走*/
		if(moveY>0){
			if(index==1)return;
			index--;
			$(this).addClass("toBot").prev().removeClass("hidden").addClass("prevBot");
			
			$(this).on("animationend",function(){
				$(this).removeClass("toBot").addClass("hidden").prev().removeClass("prevBot");
				$(this).off("animationend");
			});
			
		}
		break;
	}
	
});
/*音乐播放*/
			var audio=document.getElementById("audio");
			var pp=document.getElementById("play-pause");
			audio.controls = false;
			function play(){
				audio.play();
			}
			function togglePlayPause(){
				if (audio.paused||audio.ended) {
					pp.title='暂停';
					pp.innerHTML='<i class="fa fa-pause fa-3x"></i>';
					audio.play();
				} else{
					pp.title='播放';
					pp.innerHTML='<i class="fa fa-play fa-3x"></i>';
					audio.pause();
					
				}	
			}
/*文字发送*/
		var text=document.getElementById("textare");
		var btn=document.getElementById("btn");
		function btnc(){
			text.value="";
			alert("发送成功，未来见！");
			
		}
