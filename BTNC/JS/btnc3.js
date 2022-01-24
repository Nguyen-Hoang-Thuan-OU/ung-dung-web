// JavaScript cho cuộc đua kỳ thú

var intervalid = 0;

$(document).ready(function()
{
	$("#btPlay").click(function()
	{
		$("#hinh1").attr("src");
		intervalid = setInterval(play, 100);
	}
	);
	
	$("#btStop").click(function()
	{
		clearInterval(intervalid);
		$("#hinh1").attr("src");	
	}
	);
	
	$("#btReset").click(function()
	{
		$("#hinh1").attr("src");
		clearInterval(intervalid);
		$("#hinh1").css("left",0);
		$("#hinh2").css("left",0);
		$("#hinh3").css("left",0);
	}
	);
}
);

function play()
{
	var width = innerWidth;
	
	var t1 = (Math.random()*100) % 30;
	var t2 = (Math.random()*100) % 30;
	var t3 = (Math.random()*100) % 30;
	
	var left1 =  $("#hinh1").css("left") ;
	left1= parseInt(left1.substr(0, left1.lastIndexOf("px"))) ;
	$("#hinh1").css("left",left1 + t1);
	
	var left2 =  $("#hinh2").css("left") ;
	left2= parseInt(left2.substr(0,left2.lastIndexOf("px"))) ;
	$("#hinh2").css("left",left2 +t2);
	
	var left3 =  $("#hinh3").css("left") ;
	left3= parseInt(left3.substr(0,left3.lastIndexOf("px"))) ;
	$("#hinh3").css("left",left3 +t3);
}