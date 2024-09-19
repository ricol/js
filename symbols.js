alert = console.log

var id1 = Symbol("id");
var id2 = Symbol("id");
console.log(id1)
console.log(id2)
console.log(id1 == id2)

{
	let id = Symbol("id");

	let user = {
	  name: "John",
	  [id]: 123 // not just "id: 123"
	};

	console.log(id)
	console.log(user)
}

{
	let id = Symbol("id");
	let user = {
	  name: "John",
	  age: 30,
	  [id]: 123
	};

	for (let key in user) alert(key); // name, age (no symbols)

	// the direct access by the symbol works
	alert( "Direct: " + user[id] );
}

{
	let id = Symbol("id");
	let user = {
	  [id]: 123
	};

	let clone = Object.assign({}, user);

	alert( clone[id] ); // 123
}

{
		// read from the global registry
	let id = Symbol.for("id"); // if the symbol did not exist, it is created

	// read it again (maybe from another part of the code)
	let idAgain = Symbol.for("id");

	// the same symbol
	alert( id === idAgain ); // true
}

{
		// get symbol by name
	let sym = Symbol.for("name");
	let sym2 = Symbol.for("id");

	// get name by symbol
	alert( Symbol.keyFor(sym) ); // name
	alert( Symbol.keyFor(sym2) ); // id
}

{ 
	let globalSymbol = Symbol.for("name");
	let localSymbol = Symbol("name");

	alert( Symbol.keyFor(globalSymbol) ); // name, global symbol
	alert( Symbol.keyFor(localSymbol) ); // undefined, not global

	alert( localSymbol.description ); // name
}