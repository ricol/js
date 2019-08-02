'use strict'

var count = 0;
var oldParseInt = parseInt;
parseInt = function() {
	count += 1;
	return oldParseInt.apply(null, arguments);
};

console.log(parseInt('10'));
console.log(parseInt('20'));
console.log(parseInt('30'));
console.log('count = ' + count);
