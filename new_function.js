alert = console.log

{
	function User()  {
	  alert(new.target);
	}

	// without "new":
	User(); // undefined

	// with "new":
	new User(); // function User { ... }
}

{
	function User(name)  {
	  if (!new.target) 
	  { // if you run me without new
	    return new User(name); // ...I will add new for you
	  }

	  this.name = name;
	}

	let john = User("John"); // redirects call to new User
	alert(john.name); // John
}

{
	function BigUser() {

	  this.name = "John";

	  return { name: "Godzilla" };  // <-- returns an object
	}

	alert( new BigUser().name );  // Godzilla, got that object ^^
}

{
	function SmallUser() {

	  this.name = "John";

	  return; // finishes the execution, returns this

	  // ...

	}

	alert( new SmallUser().name );  // John
}

