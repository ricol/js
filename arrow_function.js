alert = console.log

{
	let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      this.students.forEach(
        student => alert(this.title + ': ' + student)
      );
    }
  };

  group.showList();
}

{
	let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
      this.students.forEach(function(student) {
        // Error: Cannot read property 'title' of undefined
        alert(this.title + ': ' + student)
      });
    }
  };

  group.showList();
}

{
	function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms)
    };
  }

  function sayHi(who) {
    alert('Hello, ' + who);
  }

  let sayHiDeferred = defer(sayHi, 100);
  sayHiDeferred("John"); // Hello, John after 2 seconds
}