"use strict";
 
let login = prompt( 'Кто там?', '' );
if (login == 'Админ') {
	let pass = prompt( 'Пароль?', '' );
	if (pass == 'Я Главный') {
		alert('Здравствуйте!');
	}
	else if ( pass == null || pass == '' ) {
		alert( 'Отменено' );
	}
	else {
		alert( 'Неверный пароль' );
	}
}
else if (login == null || login == '') {
		alert( 'Отменено' );
	}
else {
	alert( 'Я вас не знаю' )
}