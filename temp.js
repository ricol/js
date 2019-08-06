/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = 'my value';
 
(function() {
  console.log(myvar); // undefined
  var myvar = 'local value';
  console.log(myvar);
})();

/* Function declaration */

foo(); // "bar"

function foo() {
  console.log('bar');
}

/* Function expression */

var baz = function() {
  console.log('bar2');
};

baz(); // TypeError: baz is not a function

var sales = 'Toyota';

function carTypes(name) 
{
  if (name === 'Honda') 
  {
    return name;
  } else 
  {
    return "Sorry, we don't sell " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota