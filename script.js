
function squareEquation() {
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	var x1 = "x1 = ";
 	var d = b * b - 4 * a * c;
 	if (d > 0) {
 	 	x1 += ((-b) + Math.sqrt(d))/(2*a);
 		x1 +="; x2= ";
 		x1 += ((-b) - Math.sqrt(d))/(2*a);
 	} else if (d == 0) {
  	    x1 = ((-b) + Math.sqrt(d))/(2*a);
    } else 
  	    x1 = "D < 0, no roots";
   	document.getElementById("result").innerHTML = x1;
}
	document.getElementById("btnSubmit").onclick = squareEquation;





	









