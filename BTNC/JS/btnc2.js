// JavaScript cho tâng bóng
var ballWidth; // Chiều rộng của quả bóng
var ballHeight; // Chiều cao của quả bóng
var dx = 5; // Độ dời ngang khi di chuyển
var dy = 7; // Độ dời dọc khi di chuyển

$(document).ready(function()
{
	// Lấy kích thước hình
	ballWidth = $("#ball").width();
	ballHeight = $("#ball").height();
	setInterval(Play, 40)
	
}
);

function Play()
{
	// Lấy kích thước hiện tại của khung
	var frameWidth = $("#frame").width();
	var frameHeight = $("#frame").height();
	
	// Lấy vị trí hiện tại của hình
	var ballLeft = parseInt($("#ball").css("left"));
	var ballTop = parseInt($("#ball").css("top"));
	
	// Kiểm tra biên
	if (ballLeft < 0 || (ballLeft + ballWidth) >= frameWidth ) // Đụng 2 biên trái - phải
		dx = -dx;
	if (ballTop <= 0 || (ballTop + ballHeight) > frameHeight ) // Đụng 2 biên trên - dưới
		dy = -dy;
	
	// Cập nhật vị trí của hình
	$("#ball").css("left", ballLeft + dx + "px");
	$("#ball").css("top", ballTop + dy + "px");
}