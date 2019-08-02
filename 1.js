'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
    	var y = new Date().getFullYear();
		return ((x) => x - this.birth)(y)
    }
};

var a = xiaoming.age
console.log(a())
console.log(xiaoming.age());
