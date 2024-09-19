alert = console.log

{
	function sayHi() {
    alert("Hi");
  }

  alert(sayHi.name); // sayHi
}

{
	let sayHi = function() {
    alert("Hi");
  };

  alert(sayHi.name); // sayHi (there's a name!)
}

{
	function f(sayHi = function() {}) {
    alert(sayHi.name); // sayHi (works!)
  }

  f();
}

{
	// function created inside array
  let arr = [function() {}];

  alert( arr[0].name ); // <empty string>
  // the engine has no way to set up the right name, so there is none
}

{
	function f1(a) {}
  function f2(a, b) {}
  function many(a, b, ...more) {}

  alert(f1.length); // 1
  alert(f2.length); // 2
  alert(many.length); // 2
}

{
	function ask(question, ...handlers) {
    let isYes = confirm(question);

    for(let handler of handlers) {
      if (handler.length == 0) {
        if (isYes) handler();
      } else {
        handler(isYes);
      }
    }

  }

  // for positive answer, both handlers are called
  // for negative answer, only the second one
  // ask("Question?", () => alert('You said yes'), result => alert(result));
}

{
	function sayHi() {
    alert("Hi");

    // let's count how many times we run
    sayHi.counter++;
  }
  sayHi.counter = 0; // initial value

  sayHi(); // Hi
  sayHi(); // Hi

  alert( `Called ${sayHi.counter} times` ); // Called 2 times
}

{
	function makeCounter() {
    // instead of:
    // let count = 0

    function counter() {
      return counter.count++;
    };

    counter.count = 0;

    return counter;
  }

  let counter = makeCounter();
  alert( counter() ); // 0
  alert( counter() ); // 1
}