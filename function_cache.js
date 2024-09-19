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