alert = console.log

{
	class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }

  // Inherit from Animal by specifying "extends Animal"
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }

  let rabbit = new Rabbit("White Rabbit");

  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!
}

{
	class Animal {

    constructor(name) {
      this.speed = 0;
      this.name = name;
    }

    run(speed) {
      this.speed += speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }

    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }

  }

  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }

    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }

  let rabbit = new Rabbit("White Rabbit");

  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White rabbit hides!
}

{
	class User {
    static staticMethod() {
      alert(this === User);
    }
  }

  User.staticMethod(); // true
}

{
	class User { }

  User.staticMethod = function() {
    alert(this === User);
  };

  User.staticMethod()
}

{
	class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }

  // usage
  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];

  articles.sort(Article.compare);

  alert( articles[0].title ); // CSS
}

{
	class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }

    static createTodays() {
      // remember, this = Article
      return new this("Today's digest", new Date());
    }
  }

  let article = Article.createTodays();

  alert( article.title ); // Today's digest
}

{
	class Animal {}
  class Rabbit extends Animal {}

  // for statics
  alert(Rabbit.__proto__ === Animal); // true

  // for regular methods
  alert(Rabbit.prototype.__proto__ === Animal.prototype);
}

{
  alert("rabbit...")
	function Rabbit() {}
  let rabbit = new Rabbit();
  // changed the prototype
  Rabbit.prototype = {};

  // ...not a rabbit any more!
  alert( rabbit instanceof Rabbit ); // false
}