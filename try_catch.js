alert = console.log

{
	let json = "{ bad json }";

  try {

    let user = JSON.parse(json); // <-- when an error occurs...
    alert( user.name ); // doesn't work

  } catch (e) {
    // ...the execution jumps here
    alert( "Our apologies, the data has errors, we'll try to request it one more time." );
    alert( e.name );
    alert( e.message );
  }
}

{
	let json = '{ "age": 30 }'; // incomplete data

  try {

    let user = JSON.parse(json); // <-- no errors

    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name"); // (*)
    }

    alert( user.name );

  } catch(e) {
    alert( "JSON Error: " + e.message ); // JSON Error: Incomplete data: no name
  }
}

{
	function readData() {
    let json = '{ "age": 30 }';

    try {
      // ...
      blabla(); // error!
    } catch (e) {
      // ...
      if (e.name != 'SyntaxError') {
        throw e; // rethrow (don't know how to deal with it)
      }
    }
  }

  try {
    readData();
  } catch (e) {
    alert( "External catch got: " + e ); // caught it!
  }
}

{
	class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
  }

  function test() {
    throw new ValidationError("Whoops!");
  }

  try {
    test();
  } catch(err) {
    alert(err.message); // Whoops!
    alert(err.name); // ValidationError
    alert(err.stack); // a list of nested calls with line numbers for each
  }
}

{
	class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  // Usage
  function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
      throw new ValidationError("No field: age");
    }
    if (!user.name) {
      throw new ValidationError("No field: name");
    }

    return user;
  }

  // Working example with try..catch

  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // (*)
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // unknown error, rethrow it (**)
    }
  }
}

{
	class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }

  class PropertyRequiredError extends ValidationError {
    constructor(property) {
      super("No property: " + property);
      this.name = "PropertyRequiredError";
      this.property = property;
    }
  }

  // Usage
  function readUser(json) {
    let user = JSON.parse(json);

    if (!user.age) {
      throw new PropertyRequiredError("age");
    }
    if (!user.name) {
      throw new PropertyRequiredError("name");
    }

    return user;
  }

  // Working example with try..catch

  try {
    let user = readUser('{ "age": 25 }');
  } catch (err) {
    if (err instanceof ValidationError) {
      alert("Invalid data: " + err.message); // Invalid data: No property: name
      alert(err.name); // PropertyRequiredError
      alert(err.property); // name
    } else if (err instanceof SyntaxError) {
      alert("JSON Syntax Error: " + err.message);
    } else {
      throw err; // unknown error, rethrow it
    }
  }
}

{
  class ReadError extends Error {
    constructor(message, cause) {
      super(message);
      this.cause = cause;
      this.name = 'ReadError';
    }
  }

  class ValidationError extends Error { /*...*/ }
  class PropertyRequiredError extends ValidationError { /* ... */ }

  function validateUser(user) {
    if (!user.age) {
      throw new PropertyRequiredError("age");
    }

    if (!user.name) {
      throw new PropertyRequiredError("name");
    }
  }

  function readUser(json) {
    let user;

    try {
      user = JSON.parse(json);
    } catch (err) {
      if (err instanceof SyntaxError) {
        throw new ReadError("Syntax Error", err);
      } else {
        throw err;
      }
    }

    try {
      validateUser(user);
    } catch (err) {
      if (err instanceof ValidationError) {
        throw new ReadError("Validation Error", err);
      } else {
        throw err;
      }
    }

  }

  try {
    readUser('{bad json}');
  } catch (e) {
    if (e instanceof ReadError) {
      alert(e);
      // Original error: SyntaxError: Unexpected token b in JSON at position 1
      alert("Original error: " + e.cause);
    } else {
      throw e;
    }
  }
}