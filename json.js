alert = console.log

let student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};

let json = JSON.stringify(student);

alert(typeof json); // we've got a string!

alert(json);
/* JSON-encoded object:
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
{
  // a number in JSON is just a number
  alert( JSON.stringify(1) ) // 1

  // a string in JSON is still a string, but double-quoted
  alert( JSON.stringify('test') ) // "test"

  alert( JSON.stringify(true) ); // true

  alert( JSON.stringify([1, 2, 3]) ); // [1,2,3]
}

{
  let user = {
    sayHi() { // ignored
      alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
  };

  alert( JSON.stringify(user) ); // {} (empty object)
}

{
  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
  };

  alert( JSON.stringify(meetup) );
  /* The whole structure is stringified:
  {
    "title":"Conference",
    "room":{"number":23,"participants":["john","ann"]},
  }
  */
}

{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: ["john", "ann"]
  };

  meetup.place = room;       // meetup references room
  room.occupiedBy = meetup; // room references meetup

  // JSON.stringify(meetup); // Error: Converting circular structure to JSON

}

{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };

  room.occupiedBy = meetup; // room references meetup

  alert( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}
}

{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };

  room.occupiedBy = meetup; // room references meetup

  alert( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
/*
{
  "title":"Conference",
  "participants":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
}

{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
  };

  room.occupiedBy = meetup; // room references meetup

  alert( JSON.stringify(meetup, function replacer(key, value) {
    alert(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
  }));

  /* key:value pairs that come to replacer:
  :             [object Object]
  title:        Conference
  participants: [object Object],[object Object]
  0:            [object Object]
  name:         John
  1:            [object Object]
  name:         Alice
  place:        [object Object]
  number:       23
  */
}

{
  let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };

  alert(JSON.stringify(user, null, 2));
  /* two-space indents:
  {
    "name": "John",
    "age": 25,
    "roles": {
      "isAdmin": false,
      "isEditor": true
    }
  }
  */

  /* for JSON.stringify(user, null, 4) the result would be more indented:
  {
      "name": "John",
      "age": 25,
      "roles": {
          "isAdmin": false,
          "isEditor": true
      }
  }
  */
}

{
  let room = {
    number: 23
  };

  let meetup = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room
  };

  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */
}

{
  let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
  };

  let meetup = {
    title: "Conference",
    room
  };

  alert( JSON.stringify(room) ); // 23

  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "room": 23
    }
  */
}

{
  // stringified array
  let numbers = "[0, 1, 2, 3]";

  numbers = JSON.parse(numbers);

  alert( numbers[1] ); // 1
}

{
  let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

  user = JSON.parse(user);

  alert( user.friends[1] ); // 1
}

{
  // let json = `{
  //   name: "John",                     // mistake: property name without quotes
  //   "surname": 'Smith',               // mistake: single quotes in value (must be double)
  //   'isAdmin': false                  // mistake: single quotes in key (must be double)
  //   "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
  //   "friends": [0,1,2,3]              // here all fine
  // }`;
  // alert(JSON.parse(json))
}

{
  let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

  let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });

  alert( meetup.date.getDate() ); // now works!
}

{
  let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
  }`;

  schedule = JSON.parse(schedule, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });

  alert( schedule.meetups[1].date.getDate() ); // works!
}