alert = console.log

{
	let set = new Set();

  let john = { name: "John" };
  let pete = { name: "Pete" };
  let mary = { name: "Mary" };

  // visits, some users come multiple times
  set.add(john);
  set.add(pete);
  set.add(mary);
  set.add(john);
  set.add(mary);

  // set keeps only unique values
  alert( set.size ); // 3

  for (let user of set) {
    alert(user.name); // John (then Pete and Mary)
  }
}

{
	let set = new Set(["oranges", "apples", "bananas"]);

  for (let value of set) alert(value);

  // the same with forEach:
  set.forEach((value, valueAgain, set) => {
    alert(value);
  });
}