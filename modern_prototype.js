alert = console.log

{
	let animal = {
    eats: true
  };

  // create a new object with animal as a prototype
  let rabbit = Object.create(animal);
  alert(rabbit.eats); // true
  alert(Object.getPrototypeOf(rabbit) === animal); // get the prototype of rabbit
  Object.setPrototypeOf(rabbit, {}); // change the prototype of rabbit to {}
}