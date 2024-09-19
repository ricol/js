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

{
  alert(typeof undefined) // "undefined"

  alert(typeof 0) // "number"

  alert(typeof 10n) // "bigint"

  alert(typeof true) // "boolean"

  alert(typeof "foo") // "string"

  alert(typeof Symbol("id")) // "symbol"

  alert(typeof Math) // "object"  (1)

  alert(typeof null) // "object"  (2)

  alert(typeof alert) // "function"  (3)
}
