'use strict'

var Student = {
	name: "Robot",
	height: 1.2,
	run: function() {
		console.log(this.name + ' is running...')
	}
}

function createStudent(name) {
	var s = Object.create(Student)
	s.name = name
	return s
}

var xiaoming = createStudent('xiao ming')
xiaoming.run()
console.log(xiaoming.__proto__ === Student)
var p = xiaoming
while (p != null) {
	console.log(p)
	p = p.__proto__
}
console.log('end.')
