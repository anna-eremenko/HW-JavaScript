"use strict";	
function pow(x,n) {
	let i, k = 1;
	for (i = 1; i <= n; i++ ){
		k = k * x;
	}
	return k;
}
let x = +prompt ('Enter x for x^n:', '');
let n = +prompt ('Enter n for x^n:', '');
if (n > 0){
	alert( `x^n = ${pow(x, n)}` );
}
else {
	alert ('"n" is not a natural number');
}