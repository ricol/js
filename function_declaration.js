'use strict'

//declare a named function
function show(n) {
	console.log('welcome ' + n)
}
show('star')

//declare an anonymous function and assign it to a variable
let show_new = function(n) {
	console.log('welcome ' + n)
}
show_new('wang')

//declare an anonymous function in new systax(arrow function) and assign it to a variable
show_new = n => console.log("welcome " + n)
show_new('ricol')

let sum = (m, n) => m + n
console.log(sum(100, 200))

sum = (m, n) => {
	return m + n
}
console.log(sum(100, 200))