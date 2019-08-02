'use strict'

function Student(props)
{
	this.name = props.name || 'anonymous'
	this.grade = props.grad || 1
}

Student.prototype.hello = function() {
	console.log('hello ' + this.name + '!')
}

function createStudent(props)
{
	return new Student(props || {})
}

var xiaoming = createStudent({name: "xiaoming"})
console.log(xiaoming.grade)
var xiaohua = createStudent()
console.log(xiaohua.grade)
xiaoming.hello()
xiaohua.hello()

function PrimaryStudent(props)
{
	Student.call(this, props)
	this.grade = props.grade || 1
}

var p1 = new PrimaryStudent({name: "ricol", grad: 2})
var p = p1
while (p != null)
{
	console.log("type: " + typeof(p) + ", content: " + p)
	p = p.prototype
}
