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