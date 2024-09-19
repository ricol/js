alert = console.log

{
	let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

  alert(user.fullName); // John Smith
}

{
	let user = {
    name: "John",
    surname: "Smith",

    get fullName() {
      return `${this.name} ${this.surname}`;
    },

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };

  // set fullName is executed with the given value.
  user.fullName = "Alice Cooper";

  alert(user.name); // Alice
  alert(user.surname); // Cooper
}

{
	let user = {
    name: "John",
    surname: "Smith"
  };

  Object.defineProperty(user, 'fullName', {
    get() {
      return `${this.name} ${this.surname}`;
    },

    set(value) {
      [this.name, this.surname] = value.split(" ");
    }
  });

  alert(user.fullName); // John Smith

  for(let key in user) alert(key); // name, surname
}

{
	let user = {
    get name() {
      return this._name;
    },

    set name(value) {
      if (value.length < 4) {
        alert("Name is too short, need at least 4 characters");
        return;
      }
      this._name = value;
    }
  };

  user.name = "Pete";
  alert(user.name); // Pete

  user.name = ""; // Name is too short...
}

{
	function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // age is calculated from the current date and birthday
    Object.defineProperty(this, "age", {
      get() {
        let todayYear = new Date().getFullYear();
        return todayYear - this.birthday.getFullYear();
      }
    });
  }

  let john = new User("John", new Date(1992, 6, 1));

  alert( john.birthday ); // birthday is available
  alert( john.age );      // ...as well as the age
}