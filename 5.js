'use strict'

function make_power(n)
{
	return function(x)
	{
		return Math.pow(x, n)
	}
}

var pow2 = make_power(2)
var pow3 = make_power(3)
console.log(pow2(5))
console.log(pow3(7))
console.log(make_power(2)(5))
console.log(make_power(3)(7))
