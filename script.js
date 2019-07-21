
function squareEquation() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	var x = "x1 = ";
 	var d = b * b - 4 * a * c;
 	if (d > 0) {
 	 	x += ((-b) + Math.sqrt(d))/(2*a);
 		x +="; x2= ";
 		x += ((-b) - Math.sqrt(d))/(2*a);
 	} else if (d == 0) {
  	    x = ((-b) + Math.sqrt(d))/(2*a);
    } else 
  	    x = "D < 0, no roots";
   	document.getElementById("result").innerHTML = x;
}
	document.getElementById("btnSubmit").onclick = squareEquation;





	









