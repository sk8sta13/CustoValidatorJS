/**  
 cpf.validate v0.0.1 
 plugin for jquery.validate, validate the number of CPF.
 Author: Marcelo Soto Campos<sk8sta13@gmail.com>
 Based on internet examples
*/
jQuery.validator.addMethod('cpf', function(value, element) {
	cpf = jQuery.trim(value);
	cpf = cpf.replace(/\D/g, '');
	
	while (cpf.length < 11) {
		cpf = '0' + cpf;
	}

	var expReg = /^0+$|^1+$|^2+$|^3+$|^4+$|^5+$|^6+$|^7+$|^8+$|^9+$/;
	var a = [];
	var b = new Number;
	var c = 11;

	for (i = 0; i < 11; i++) {
		a[i] = cpf.charAt(i);
		if (i < 9) {
			b += (a[i] * --c);
		}
	}

	a[9] = ((x = b % 11) < 2) ? 0 : 11 - x;

	b = 0;
	c = 11;
	for (y = 0; y < 10; y++) {
		b += (a[y] * c--);
	}

	a[10] = ((x = b % 11) < 2) ? 0 : 11 - x;

	var retorno = ((cpf.charAt(9) != a[9]) || (cpf.charAt(10) != a[10]) || cpf.match(expReg)) ? false : true;

	return this.optional(element) || retorno;
}, 'Enter a valid CPF');