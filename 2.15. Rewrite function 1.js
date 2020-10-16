"use strict";	
function checkAge(age) {
   return (age > 18) ? true : confirm('Родители разрешили?');
}
let n = +prompt ('Enter your age:', '');
alert( checkAge(n) );