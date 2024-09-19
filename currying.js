alert = console.log

{
	function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }

  // usage
  function sum(a, b) {
    return a + b;
  }

  let carriedSum = curry(sum);

  alert( carriedSum(1)(2) ); // 3
}

{
	function sum(a, b) {
    return a + b;
  }

  let carriedSum = _.curry(sum); // using _.carry from lodash library

  alert( carriedSum(1, 2) ); // 3, still callable normally
  alert( carriedSum(1)(2) ); // 3, called partially
}

{
	function log(date, importance, message) {
    alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
  }

  log = _.curry(log);
}