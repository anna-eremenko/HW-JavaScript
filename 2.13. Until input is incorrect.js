"use strict";	
	
let numb = 0;
do {
	numb = prompt('Enter number more then 100:', '');
	if (!numb) break;
} while (numb <= 100)