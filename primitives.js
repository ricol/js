alert = console.log

let str = "Hello";

alert( str.toUpperCase() ); // HELLO

let n = 1.23456;

alert( n.toFixed(2) ); // 1.23

alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  alert( "zero is truthy!?!" );
}