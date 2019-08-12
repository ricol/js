alert = console.log

if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if

{
	function sayHi() {
  if (true) {
    var phrase = "Hello";
  }

  alert(phrase); // works
}

sayHi();
// alert(phrase); // Error: phrase is not defined (Check the Developer Console)
}