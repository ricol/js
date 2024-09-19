alert = console.log
{
	// mix of values
	let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

	// get the object at index 1 and then show its name
	alert( arr[1].name ); // John

	// get the function at index 3 and run it
	arr[3](); // hello
}

{
	let fruits = ["Apple", "Orange", "Pear"];

	alert( fruits.pop() ); // remove "Pear" and alert it

	alert( fruits ); // Apple, Orange
}

{
	let fruits = ["Apple", "Orange"];

	fruits.push("Pear");

	alert( fruits ); // Apple, Orange, Pear
}

{
	let fruits = ["Apple", "Orange", "Pear"];

	alert( fruits.shift() ); // remove Apple and alert it

	alert( fruits ); // Orange, Pear
}

{
	let fruits = ["Orange", "Pear"];

	fruits.unshift('Apple');

	alert( fruits ); // Apple, Orange, Pear
}

{
	let fruits = ["Apple"];

	fruits.push("Orange", "Peach");
	fruits.unshift("Pineapple", "Lemon");

	// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
	alert( fruits );
}

{
	let fruits = ["Banana"]

	let arr = fruits; // copy by reference (two variables reference the same array)

	alert( arr === fruits ); // true

	arr.push("Pear"); // modify the array by reference

	alert( fruits ); // Banana, Pear - 2 items now
}

{
	let fruits = []; // make an array

	fruits[99999] = 5; // assign a property with the index far greater than its length

	fruits.age = 25; // create a property with an arbitrary name
	alert(fruits)
}

{
	let fruits = ["Apple", "Orange", "Plum"];

	// iterates over array elements
	for (let fruit of fruits) {
	alert( fruit );
	}
}

{
	let arr = new Array(2); // will it create an array of [2] ?

	alert( arr[0] ); // undefined! no elements.

	alert( arr.length ); // length 2
}

{
	let matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
	];

	alert( matrix[1][1] ); // 5, the central element
}

{
	let arr = ["t", "e", "s", "t"];

	alert( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

	alert( arr.slice(-2) ); // s,t (copy from -2 till the end)
}

{
	let arr = [1, 2];

	// create an array from: arr and [3,4]
	alert( arr.concat([3, 4])); // 1,2,3,4

	// create an array from: arr and [3,4] and [5,6]
	alert( arr.concat([3, 4], [5, 6])); // 1,2,3,4,5,6

	// create an array from: arr and [3,4], then add values 5 and 6
	alert( arr.concat([3, 4], 5, 6)); // 1,2,3,4,5,6
}

{
	["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
	alert(`${item} is at index ${index} in ${array}`);
	});
}

{
	let users = [
	{id: 1, name: "John"},
	{id: 2, name: "Pete"},
	{id: 3, name: "Mary"}
	];

	let user = users.find(item => item.id == 1);

	alert(user.name); // John
}

{
	let users = [
	{id: 1, name: "John"},
	{id: 2, name: "Pete"},
	{id: 3, name: "Mary"}
	];

	// returns array of the first two users
	let someUsers = users.filter(item => item.id < 3);

	alert(someUsers.length); // 2
}

{
	let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
	alert(lengths); // 5,7,6
}

{
	function compareNumeric(a, b) {
		if (a > b) return 1;
		if (a == b) return 0;
		if (a < b) return -1;
	}

	let arr = [ 1, 2, 15 ];

	arr.sort(compareNumeric);

	alert(arr);  // 1, 2, 15
	alert(arr.sort())
}

{
	let arr = [1, 2, 3, 4, 5];
	arr.reverse();

	alert( arr ); // 5,4,3,2,1
}

{
	let names = 'Bilbo, Gandalf, Nazgul';

	let arr = names.split(', ');

	for (let name of arr) {
	alert( `A message to ${name}.` ); // A message to Bilbo  (and other names)
	}
}

{
	let arr = ['Bilbo', 'Gandalf', 'Nazgul'];

	let str = arr.join(';'); // glue the array into a string using ;

	alert( str ); // Bilbo;Gandalf;Nazgul
}

{
	let arr = [1, 2, 3, 4, 5];

	let result = arr.reduce((sum, current) => sum + current, 0);

	alert(result); // 15
}

{
	alert(typeof {}); // object
	alert(typeof []); // same
	alert(Array.isArray({})); // false
	alert(Array.isArray([])); // true
}

{
	let user = {
		age: 18,
		younger(otherUser) {
			return otherUser.age < this.age;
		}
	};

	let users = [
	{age: 12},
	{age: 16},
	{age: 32}
	];

	// find all users younger than user
	let youngerUsers = users.filter(user.younger, user);

	alert(youngerUsers.length); // 2
}