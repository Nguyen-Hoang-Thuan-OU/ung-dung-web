// JavaScript 02

function phuongTrinh()
{
	var a = parseInt(document.getElementById("txtA").value);
	var b = parseInt(document.getElementById("txtB").value);
	var c = parseInt(document.getElementById("txtC").value);
	
	if (isNaN(a) || isNaN(b) || isNaN(c))
	{
		alert("Phải nhập đủ 3 số");
		return false;
	}
	
	var kq;
	
	if (a == 0)
	{
		if (b == 0)
			if (c == 0)
				kq="Phương trình có vô số nghiệm";
			else //c != 0
				kq="Phương trình vô nghiệm";
		else //b != 0
		{
			var x = -c/b;
			kq="Phương trình có nghiệm kép: " + x.toFixed(2);
		}
	}
	
	else //a != 0
	{
		var delta = (b * b) - (4 * a * c);
		if (delta < 0)
			kq="Phương trình vô nghiệm";
		else
			if (delta == 0)
				kq = -b / (2 * a)
			else //delta != 0
			{
				var x1 = (-b + Math.sqrt(delta)) / (2 * a);
				var x2 = (-b - Math.sqrt(delta)) / (2 * a);
				kq="Phương trình có 2 nghiệm: " + "<br>x1 = " + x1.toFixed(2) + "<br>x2 = " + x2.toFixed(2)
			}
	}
	document.getElementById("ketqua").innerHTML = kq;
}

function xoa()
{
	document.getElementById("a").value="";
	document.getElementById("b").value="";
	document.getElementById("c").value="";
	document.getElementById("ketqua").innerHTML="";
}