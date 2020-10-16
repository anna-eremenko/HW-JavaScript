"use strict";	
function min(a,b) {
   return (a <= b) ? a : b;
}
let n = +prompt ('Enter n:', '');
let m = +prompt ('Enter m:', '');
alert( `Min number is ${min(n, m)}` );