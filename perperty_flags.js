alert = console.log

{
	let user = {
    name: "John"
  };

  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

  alert( JSON.stringify(descriptor, null, 2 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */
}

{
	let user = {};

  Object.defineProperty(user, "name", {
    value: "John"
  });

  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

  alert( JSON.stringify(descriptor, null, 2 ) );
  /*
  {
    "value": "John",
    "writable": false,
    "enumerable": false,
    "configurable": false
  }
  */
}

{
	let user = {
    name: "John"
  };

  Object.defineProperty(user, "name", {
    writable: false
  });

  user.name = "Pete"; // Error: Cannot assign to read only property 'name'
}

{
	let user = { };

  Object.defineProperty(user, "name", {
    value: "John",
    // for new properties need to explicitly list what's true
    enumerable: true,
    configurable: true
  });

  alert(user.name); // John
  user.name = "Pete"; // Error
}

{
	let user = {
    name: "John",
    toString() {
      return this.name;
    }
  };

  // By default, both our properties are listed:
  for (let key in user) alert(key); // name, toString
}

{
	let user = {
    name: "John",
    toString() {
      return this.name;
    }
  };

  Object.defineProperty(user, "toString", {
    enumerable: false
  });

  // Now our toString disappears:
  for (let key in user) alert(key); // name
}

{
	let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

  alert( JSON.stringify(descriptor, null, 2 ) );
  /*
  {
    "value": 3.141592653589793,
    "writable": false,
    "enumerable": false,
    "configurable": false
  }
  */
}

{
	let user = { };

  Object.defineProperty(user, "name", {
    value: "John",
    writable: false,
    configurable: false
  });

  // won't be able to change user.name or its flags
  // all this won't work:
  //   user.name = "Pete"
  //   delete user.name
  //   defineProperty(user, "name", ...)
  // Object.defineProperty(user, "name", {writable: true}); // Error
}