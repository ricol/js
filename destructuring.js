alert = console.log

{
	// we have an array with the name and surname
  let arr = ["Ilya", "Kantor"]

  // destructuring assignment
  // sets firstName = arr[0]
  // and surname = arr[1]
  let [firstName, surname] = arr;

  alert(firstName); // Ilya
  alert(surname);  // Kantor
}

{
	// second element is not needed
  let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

  alert( title ); // Consul
}

{
	let [a, b, c] = "abc"; // ["a", "b", "c"]
  let [one, two, three] = new Set([1, 2, 3]);
  alert(one)
  alert(two)
  alert(three)
}

{
	let user = {
    name: "John",
    age: 30
  };

  // loop over keys-and-values
  for (let [key, value] of Object.entries(user)) {
    alert(`${key}:${value}`); // name:John, then age:30
  }
}

{
	let user = new Map();
  user.set("name", "John");
  user.set("age", "30");

  for (let [key, value] of user) {
    alert(`${key}:${value}`); // name:John, then age:30
  }
}

{
	let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

  alert(name1); // Julius
  alert(name2); // Caesar

  // Note that type of `rest` is Array.
  alert(rest[0]); // Consul
  alert(rest[1]); // of the Roman Republic
  alert(rest.length); // 2
}

{
	let [firstName, surname] = [];

  alert(firstName); // undefined
  alert(surname); // undefined
}


{
	let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  let {title, width, height} = options;

  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
}
{
    // default values
  let [name = "Guest", surname = "Anonymous"] = ["Julius"];

  alert(name);    // Julius (from array)
  alert(surname); // Anonymous (default used)
}

{
	let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  let {title, width, height} = options;

  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
}

{
	let options = {
    title: "Menu",
    width: 100,
    height: 200
  };

  // { sourceProperty: targetVariable }
  let {width: w, height: h, title} = options;

  // width -> w
  // height -> h
  // title -> title

  alert(title);  // Menu
  alert(w);      // 100
  alert(h);      // 200

  {
    let options = {
    title: "Menu"
  };

  let {width = 100, height = 200, title} = options;

  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  }
}

{
	let options = {
    title: "Menu",
    height: 200,
    width: 100
  };

  // title = property named title
  // rest = object with the rest of properties
  let {title, ...rest} = options;

  // now title="Menu", rest={height: 200, width: 100}
  alert(rest.height);  // 200
  alert(rest.width);   // 100
}

{
	let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };

  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu" // not present in the object (default value is used)
  } = options;

  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut
}

{
	// we pass object to function
  let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

  // ...and it immediately expands it to variables
  function showMenu({title = "Untitled", width = 200, height = 100, items = []}) {
    // title, items – taken from options,
    // width, height – defaults used
    alert( `${title} ${width} ${height}` ); // My Menu 200 100
    alert( items ); // Item1, Item2
  }

  showMenu(options);
}

{
	let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
  };

  function showMenu({
    title = "Untitled",
    width: w = 100,  // width goes to w
    height: h = 200, // height goes to h
    items: [item1, item2] // items first element goes to item1, second to item2
  }) {
    alert( `${title} ${w} ${h}` ); // My Menu 100 200
    alert( item1 ); // Item1
    alert( item2 ); // Item2
  }

  showMenu(options);
}