alert = console.log

{
	let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  setTimeout(user.sayHi, 1000); // Hello, undefined!
}

{
	let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  setTimeout(function() {
    user.sayHi(); // Hello, John!
  }, 1000);

  setTimeout(() => user.sayHi(), 1000); 
}

{
	let user = {
    firstName: "John"
  };

  function func() {
    alert(this.firstName);
  }

  let funcUser = func.bind(user);
  funcUser(); // John
}

{
	let user = {
    firstName: "John"
  };

  function func(phrase) {
    alert(phrase + ', ' + this.firstName);
  }

  // bind this to user
  let funcUser = func.bind(user);

  funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)
}

{
	let user = {
    firstName: "John",
    sayHi() {
      alert(`Hello, ${this.firstName}!`);
    }
  };

  let sayHi = user.sayHi.bind(user); // (*)

  sayHi(); // Hello, John!

  setTimeout(sayHi, 1000); // Hello, John!
}

{
	let user = {
    firstName: "John",
    say(phrase) {
      alert(`${phrase}, ${this.firstName}!`);
    }
  };

  let say = user.say.bind(user);

  say("Hello"); // Hello, John ("Hello" argument is passed to say)
  say("Bye"); // Bye, John ("Bye" is passed to say)
}

{
	function mul(a, b) {
    return a * b;
  }

  let double = mul.bind(null, 2);

  alert( double(3) ); // = mul(2, 3) = 6
  alert( double(4) ); // = mul(2, 4) = 8
  alert( double(5) ); // = mul(2, 5) = 10
}

{
	function partial(func, ...argsBound) {
    return function(...args) { // (*)
      return func.call(this, ...argsBound, ...args);
    }
  }

  // Usage:
  let user = {
    firstName: "John",
    say(time, phrase) {
      alert(`[${time}] ${this.firstName}: ${phrase}!`);
    }
  };

  // add a partial method with fixed time
  user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

  user.sayNow("Hello");
  // Something like:
  // [10:00] John: Hello!
}