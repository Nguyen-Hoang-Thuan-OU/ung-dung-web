// JavaScript cho vẽ bằng chuột
// Khai báo các biến

var paintwidth = 1; // Độ dày nét vẽ
var color = "black"; // Màu nét vẽ
var paint; // Biến luận lý, cho biết nhấn chuột trái hay phải
var prevX, prevY; // Biến lưu vị trí điểm về trước đó

$(document).ready(function()
{
    context = canvas.getContext("2d"); // Lấy thiết bị ngữ cảnh của canvas
	
	// Cài đặt hàm xử lý sự kiện nhấn chuột trên canvas
	$("canvas").mousedown(function(e)
	{
		// Lưu vị trí điểm nhấn chuột
		prevX = e.pageX - this.offsetLeft;
		prevY = e.pageY - this.offsetTop;
		paint = true; // Cho phép vẽ
	}
	);
	
	// Cài đặt hàm xử lý sự kiện di chuyển chuột
	$("canvas").mousemove(function(e)
	{
		if(paint)
		{
			context.strokeStyle = color; // Màu nét vẽ
			context.lineWidth = paintwidth; // Độ dày của nét vẽ
			context.lineJoin = "round"; // Đầu bút vẽ hình tròn
			context.beginPath(); // Chuẩn bị vẽ
			context.moveTo(prevX, prevY); // Di chuyển điểm vẽ đến (prevX, prevY)
			
			// Vẽ đoạn thẳng đến điểm di chuyển chuột
			context.lineTo(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
			context.closePath();
			
			// Thực hiện vẽ
			context.stroke();
			
			// Cập nhật điểm prevX, prevY
			prevX = e.pageX - this.offsetLeft;
			prevY = e.pageY - this.offsetTop;
		}
	}
	);
	
	// Cài đặt hàm xử lý sự kiện thả nút chuột
	$("canvas").mouseup(function(e)
	{
			paint = false; // Kết thúc chế độ vẽ
			
	}
	);
	
	// Cài đặt hàm xử lý thay đổi màu chọn
	$("#color").change(function(e)
	{
			color = $(this).val();
	}
	);
	
	// Cài đặt hàm xử lý sự kiện chọn nét vẽ
	$(".pen").change(function(e)
	{
		var pen = $(this).val();
		if(pen == "thin")
			paintwidth = 1;
		else if(pen == "medium")
			paintwidth = 5;
		else 
			paintwidth = 10;
	}
	);
	
	// Cài đặt hàm xử lý sự kiếm bấm vào nút xóa
	$("#btDel").click(function(e)
	{
		var width = $("canvas").width();
		var height = $("canvas").height();
		
		// Tô máu trắng (xóa canvas)
		context.fillStyle = "white";
		context.rect(0, 0, width, height);
		context.fill();
	}
	);
}
);