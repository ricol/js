alert = console.log

let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;

alert(single)
alert(double)
alert(backticks)

function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // a list of guests, multiple lines

let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
let str2 = `Hello
World`;

alert(str1 == str2); // true

alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, a rare Chinese hieroglyph (long unicode)
alert( "\u{1F60D}" ); // 😍, a smiling face symbol (another long unicode)

let str = `Hello`;

alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (an empty string)

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

{
	let str = 'Widget with id';

	alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
	alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

	alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)
}
{
	alert( "Widget with id".includes("Widget") ); // true

	alert( "Hello".includes("Bye") ); // false
}

{
	let str = "stringify";

	// these are same for substring
	alert( str.substring(2, 6) ); // "ring"
	alert( str.substring(6, 2) ); // "ring"

	// ...but not for slice:
	alert( str.slice(2, 6) ); // "ring" (the same)
	alert( str.slice(6, 2) ); // "" (an empty string)
}