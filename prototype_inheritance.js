alert = console.log

{
	let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };

  rabbit.__proto__ = animal; // (*)

  // we can find both properties in rabbit now:
  alert( rabbit.eats ); // true (**)
  alert( rabbit.jumps ); // true
}

{
	let animal = {
    eats: true,
    walk() {
      alert("Animal walk");
    }
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  let longEar = {
    earLength: 10,
    __proto__: rabbit
  };

  // walk is taken from the prototype chain
  longEar.walk(); // Animal walk
  alert(longEar.jumps); // true (from rabbit)
}

{
	let animal = {
    eats: true,
    walk() {
      /* this method won't be used by rabbit */
    }
  };

  let rabbit = {
    __proto__: animal
  };

  rabbit.walk = function() {
    alert("Rabbit! Bounce-bounce!");
  };

  rabbit.walk(); // Rabbit! Bounce-bounce!
}

{
	let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };

  let admin = {
    __proto__: user,
    isAdmin: true
  };

  alert(admin.fullName); // John Smith (*)

  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
}

{
	// animal has methods
  let animal = {
    walk() {
      if (!this.isSleeping) {
        alert(`I walk`);
      }
    },
    sleep() {
      this.isSleeping = true;
    }
  };

  let rabbit = {
    name: "White Rabbit",
    __proto__: animal
  };

  // modifies rabbit.isSleeping
  rabbit.sleep();

  alert(rabbit.isSleeping); // true
  alert(animal.isSleeping); // undefined (no such property in the prototype)
}

{
	let animal = {
    eats: true
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);

    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }
}

{
	let animal = {
    eats: true
  };

  let rabbit = {
    jumps: true,
    __proto__: animal
  };

  // Object.keys only return own keys
  alert(Object.keys(rabbit)); // jumps

  // for..in loops over both own and inherited keys
  for(let prop in rabbit) alert(prop); // jumps, then eats
}