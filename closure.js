alert = console.log

{
	// constructor function returns a new object
  function User(name) {

    // the object method is created as a nested function
    this.sayHi = function() {
      alert(name);
    };
  }

  let user = new User("John");
  user.sayHi(); // the method "sayHi" code has access to the outer "name"
}

{
	function makeCounter() {
    let count = 0;

    return function() {
      return count++; // has access to the outer "count"
    };
  }

  let counter = makeCounter();

  alert( counter() ); // 0
  alert( counter() ); // 1
  alert( counter() ); // 2
}

{
	function makeCounter() {
    let count = 0;
    return function() {
      return count++;
    };
  }

  let counter1 = makeCounter();
  let counter2 = makeCounter();

  alert( counter1() ); // 0
  alert( counter1() ); // 1

  alert( counter2() ); // 0 (independent)
}

{
	// Ways to create IIFE

  (function() {
    alert("Parentheses around the function");
  })();

  (function() {
    alert("Parentheses around the whole thing");
  }());

  !function() {
    alert("Bitwise NOT operator starts the expression");
  }();

  +function() {
    alert("Unary plus starts the expression");
  }();
}

{
	let value = "Surprise!";

  function f() {
    let value = "the closest value";

    function g() {
      debugger; // in console: type alert(value); Surprise!
    }

    return g;
  }

  let g = f();
  g();
}