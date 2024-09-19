alert = console.log

{
	let animal = {
    eats: true
  };

  function Rabbit(name) {
    this.name = name;
  }

  Rabbit.prototype = animal;

  let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

  alert( rabbit.eats ); // true
}

{
	function Rabbit() {}
  // by default:
  // Rabbit.prototype = { constructor: Rabbit }

  alert(Rabbit.prototype)
  alert(Rabbit.prototype.constructor)
  alert(Rabbit.prototype.constructor == Rabbit ); // true
}

{
	function Rabbit() {}
  // by default:
  // Rabbit.prototype = { constructor: Rabbit }

  let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

  alert(rabbit.constructor == Rabbit); // true (from prototype)
}

{
	function Rabbit(name) {
    this.name = name;
    alert(name);
  }

  let rabbit = new Rabbit("White Rabbit");

  let rabbit2 = new rabbit.constructor("Black Rabbit");
}

{
	function Rabbit() {}
  Rabbit.prototype = {
    jumps: true,
    constructor: Rabbit
  };

  let rabbit = new Rabbit();
  alert(rabbit.constructor === Rabbit); // false
  let new_rabbit = rabbit.constructor()
  alert(rabbit)
  alert(new_rabbit)
  alert(rabbit == new_rabbit)
}

{
	let arr = [1, 2, 3];

  // it inherits from Array.prototype?
  alert( arr.__proto__ === Array.prototype ); // true

  // then from Object.prototype?
  alert( arr.__proto__.__proto__ === Object.prototype ); // true

  // and null on the top.
  alert( arr.__proto__.__proto__.__proto__ ); // null
}

{
	function f() {}

  alert(f.__proto__ == Function.prototype); // true
  alert(f.__proto__.__proto__ == Object.prototype); // true, inherit from objects
}

{
	String.prototype.show = function() {
    alert(this);
  };

  "BOOM!".show(); // BOOM!
}

{
	if (!String.prototype.repeat) { // if there's no such method
    // add it to the prototype

    String.prototype.repeat = function(n) {
      // repeat the string n times

      // actually, the code should be a little bit more complex than that
      // (the full algorithm is in the specification)
      // but even an imperfect polyfill is often considered good enough for use
      return new Array(n + 1).join(this);
    };
  }

  alert( "La".repeat(3) ); // LaLaLa
}

{
	let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
  };

  obj.join = Array.prototype.join;

  alert( obj.join(',') ); // Hello,world!
}