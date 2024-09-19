alert = console.log

{
	function slow(x) {
    // there can be a heavy CPU-intensive job here
    alert(`Called with ${x}`);
    return x;
  }

  function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
      if (cache.has(x)) {    // if there's such key in cache
        return cache.get(x); // read the result from it
      }

      let result = func(x);  // otherwise call func

      cache.set(x, result);  // and cache (remember) the result
      return result;
    };
  }

  slow = cachingDecorator(slow);

  alert( slow(1) ); // slow(1) is cached
  alert( "Again: " + slow(1) ); // the same

  alert( slow(2) ); // slow(2) is cached
  alert( "Again: " + slow(2) ); // the same as the previous line
}

{
    // we'll make worker.slow caching
  let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      // actually, there can be a scary CPU-heavy task here
      alert("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };

  // same code as before
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func(x); // (**)
      cache.set(x, result);
      return result;
    };
  }

  alert( worker.slow(1) ); // the original method works

  worker.slow = cachingDecorator(worker.slow); // now make it caching

  // alert( worker.slow(2) ); // Whoops! Error: Cannot read property 'someMethod' of undefined
}

{
	function sayHi() {
    alert(this.name);
  }

  let user = { name: "John" };
  let admin = { name: "Admin" };

  // use call to pass different objects as "this"
  sayHi.call( user ); // this = John
  sayHi.call( admin ); // this = Admin
}

{
	function say(phrase) {
    alert(this.name + ': ' + phrase);
  }

  let user = { name: "John" };

  // user becomes this, and "Hello" becomes the first argument
  say.call( user, "Hello" ); // John: Hello
}

{
	let worker = {
    someMethod() {
      return 1;
    },

    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };

  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // "this" is passed correctly now
      cache.set(x, result);
      return result;
    };
  }

  worker.slow = cachingDecorator(worker.slow); // now make it caching

  alert( worker.slow(2) ); // works
  alert( worker.slow(2) ); // works, doesn't call the original (cached)
}

{
	let worker = {
    slow(min, max) {
      alert(`Called with ${min},${max}`);
      return min + max;
    }
  };

  function cachingDecorator(func, hash) {
    let cache = new Map();
    return function() {
      let key = hash(arguments); // (*)
      if (cache.has(key)) {
        return cache.get(key);
      }

      let result = func.call(this, ...arguments); // (**)

      cache.set(key, result);
      return result;
    };
  }

  function hash(args) {
    return args[0] + ',' + args[1];
  }

  worker.slow = cachingDecorator(worker.slow, hash);

  alert( worker.slow(3, 5) ); // works
  alert( "Again " + worker.slow(3, 5) ); // same (cached)
}