function map(f, a) 
{
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
  return result;
}

var f = function(x) 
{
   return x * x * x; 
}

var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);

////////////////////////////////////////

function outside(x) 
{
  function inside(y) 
  {
    return x + y;
  }

  return inside;
}

fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                        // it
console.log(result = fn_inside(5)); // returns 8

console.log(result1 = outside(3)(5)); // returns 8

////////////////////////

var createPet = function(name) 
{
  var sex;
  
  return 
  {
    setName: function(newName) 
    {
      name = newName;
    },
    
    getName: function() 
    {
      return name;
    },
    
    getSex: function() 
    {
      return sex;
    },
    
    setSex: function(newSex) 
    {
      if(typeof newSex === 'string' && (newSex.toLowerCase() === 'male' || 
        newSex.toLowerCase() === 'female')) 
      {
        sex = newSex;
      }
    }
  }
}

var pet = createPet('Vivie');
pet.getName();                  // Vivie

pet.setName('Oliver');
pet.setSex('male');
console.log(pet.getSex());                   // male
console.log(pet.getName());                  // Oliver

///////////////////////////////

function A(x) 
{
  function B(y) 
  {
    function C(z) 
    {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)

////////////////////////////

var pet = function(name) {   // The outer function defines a variable called "name"
  var getName = function() {
    return name;             // The inner function has access to the "name" variable of the outer 
                             //function
  }
  return getName;            // Return the inner function, thereby exposing it to outer scopes
}
myPet = pet('Vivie');
   
console.log(myPet());

///////////////////////////////

var getCode = (function() {
  var apiCode = '0]Eal(eh&2';    // A code we do not want outsiders to be able to modify...
  
  return function() {
    return apiCode;
  };
})();

console.log(getCode());    // Returns the apiCode

////////////////////////////////

var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

var a2 = a.map(function(s) { return s.length; });

console.log(a2); // logs [8, 6, 7, 9]

var a3 = a.map(s => s.length);

console.log(a3); // logs [8, 6, 7, 9]