alert = console.log

{
	class User {

    constructor(name) {
      this.name = name;
    }

    sayHi() {
      alert(this.name);
    }

  }

  // Usage:
  let user = new User("John");
  user.sayHi();
}

{
	class User {
    constructor(name) { this.name = name; }
    sayHi() { alert(this.name); }
  }

  // class is a function
  alert(typeof User); // function

  // ...or, more precisely, the constructor method
  alert(User === User.prototype.constructor); // true

  // The methods are in User.prototype, e.g:
  alert(User.prototype.sayHi); // alert(this.name);

  // there are exactly two methods in the prototype
  alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
}

{
  // "Named Class Expression"
  // (no such term in the spec, but that's similar to Named Function Expression)
  let User = class MyClass {
    sayHi() {
      alert(MyClass); // MyClass name is visible only inside the class
    }
  };

  new User().sayHi(); // works, shows MyClass definition

  // alert(MyClass); // error, MyClass name isn't visible outside of the class
}

{
	class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }

  }

  let user = new User("John");
  alert(user.name); // John

  user = new User(""); // Name too short.
}

{
	class User {
    sayHi() {
      alert(`Hello, ${this.name}!`);
    }
  }

  new User().sayHi();
}