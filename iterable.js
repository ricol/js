alert = console.log

{
  let range = {
    from: 1,
    to: 5
  };

  // 1. call to for..of initially calls this
  range[Symbol.iterator] = function() {

    // ...it returns the iterator object:
    // 2. Onward, for..of works only with this iterator, asking it for next values
    return {
      current: this.from,
      last: this.to,

      // 3. next() is called on each iteration by the for..of loop
      next() {
        // 4. it should return the value as an object {done:.., value :...}
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  };

  // now it works!
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }
}

{
  let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },

    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };

  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }
}

{
  let str = "Hello";

  // does the same as
  // for (let char of str) alert(char);

  let iterator = str[Symbol.iterator]();

  while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value); // outputs characters one by one
  }
}

{
  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };

  let arr = Array.from(arrayLike); // (*)
  alert(arr.pop()); // World (method works)
}

{
  let str = '𝒳😂';

  // splits str into array of characters
  let chars = Array.from(str);

  alert(chars[0]); // 𝒳
  alert(chars[1]); // 😂
  alert(chars.length); // 2
}

{
  let str = '𝒳😂';

  let chars = []; // Array.from internally does the same loop
  for (let char of str) {
    chars.push(char);
  }

  alert(chars);
}

{
  function slice(str, start, end) {
    return Array.from(str).slice(start, end).join('');
  }

  let str = '𝒳😂𩷶';

  alert( slice(str, 1, 3) ); // 😂𩷶

  // the native method does not support surrogate pairs
  alert( str.slice(1, 3) ); // garbage (two pieces from different surrogate pairs)
}