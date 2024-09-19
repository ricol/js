alert = console.log
let value = "Surprise!";

function f() {
  let value = "the closest value";

  function g() {
  	return value;
    debugger; // in console: type alert(value); Surprise!
  }

  return g;
}

let g = f();
alert(g());