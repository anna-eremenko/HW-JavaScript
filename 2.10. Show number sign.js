"use strict";
 
let digit = prompt('Enter number:', '');

if (digit > 0 ) {
	alert( 1 );
}
else if (digit < 0) {
	alert( -1 );
}
else if (digit == 0) {
	alert( 0 );
}
else {
	alert ('Not a number.');
}