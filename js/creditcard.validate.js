/**  
 creditcard.validate v0.0.1 
 plugin for jquery.validate, validates the credit card banner.
 Author: Marcelo Soto Campos<sk8sta13@gmail.com>
 Based on internet examples
*/
jQuery.validator.addMethod('bandeira', function(value, element, param) {
	value = value.replace(/\D/g, "");

	switch (param) {
		case '500': //Visa
			if (/^(4)/.test(value)) {
				return value.length == 16;
			}
			break;
		case '501': //MasterCard
			if (/^(5[12345])/.test(value)) {
				return value.length == 16;
			}
			break;
		case '502': //American Express
			if (/^(3[47])/.test(value)) {
				return value.length == 15;
			}
			break;
		case '503': //Diners Club
			if ((/^(30[012345])/.test(value)) || (/^(3[68])/.test(value))) {
				return value.length == 14;
			}
			break;
	}

	return false;
}, 'Enter a valid card number');