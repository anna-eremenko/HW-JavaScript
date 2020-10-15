"use strict";	
let numb_end = prompt('Enter a natural number:', '');
let i, j, count;
if (numb_end > 1) {
	alert (2);
	for (i = 3; i <= numb_end; i++) {
		count = 0;
		for (j = 2; j < i; j++ ) {
			if ( i%j == 0) {
				count++;
			}
		}
		if (count == 0)	{
			alert( i );
		}
	}
}
else if (numb_end == 1) {
	alert ('Too small number.')
}
else{
	alert ('Not a natural number.')
}