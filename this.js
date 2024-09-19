alert = console.log
{
	'use strict';

	var xiaoming = {
	    name: '小明',
	    birth: 1990,
	    age: function () {
			console.log("this: " + this)
	    	var y = new Date().getFullYear();
			return ((x) => x - this.birth)(y)
	    }
	};

	var a = xiaoming.age
	console.log(a()) //error, this undefined
	console.log(xiaoming.age());
}

{
	let user = {
	  name: "John",
	  age: 30
	};

	user.sayHi = function() {
	  alert("Hello!" + this.name);
	};

	user.sayHi(); // Hello!
	// first, declare
	function sayHi() {
	  alert("Hello!" + this.name + ' from new hi');
	};
	// then add as a method
	user.sayHi = sayHi;

	user.sayHi(); // Hello!
}

{
	let user = {
	  name: "John1",
	  age: 30,

	  sayHi() {
	    // "this" is the "current object"
	    alert(this.name);
	  }
	};

	user.sayHi(); // John
}

{
	let user = { name: "John" };
	let admin = { name: "Admin" };

	function sayHi() {
	  alert( this.name );
	}

	// use the same function in two objects
	user.f = sayHi;
	admin.f = sayHi;

	// these calls have different this
	// "this" inside the function is the object "before the dot"
	user.f(); // John  (this == user)
	admin.f(); // Admin  (this == admin)

	admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
}

{
	let user = {
	  name: "John",
	  hi() { alert(this.name); },
	  bye() { alert("Bye"); }
	};

	user.hi(); // John (the simple call works)

	// now let's call user.hi or user.bye depending on the name
	(user.name == "John" ? user.hi : user.bye)(); // Error!
}

{
	let user = {
	  firstName: "Ilya",
	  sayHi() {
	    let arrow = () => alert(this.firstName);
	    arrow();
	  }
	};

	user.sayHi(); // Ilya
}