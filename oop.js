function Employee() {
	this.name = "employee";
	this.dept = "general";
}

let e = new Employee()
console.log(e.name)
console.log(e.dept)
console.log(e)

function Manager() {
	Employee.call(this);
	this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

function WorkerBee() {
	Employee.call(this);
	this.projects = [];
}

WorkerBee.prototype = Object.create(Employee.prototype);
WorkerBee.prototype.constructor = WorkerBee;

let m = new Manager();
console.log(m);

let w = new WorkerBee();
console.log(w);

function SalesPerson() {
   WorkerBee.call(this);
   this.dept = 'sales';
   this.quota = 100;
}

SalesPerson.prototype = Object.create(WorkerBee.prototype);
SalesPerson.prototype.constructor = SalesPerson;

function Engineer() {
   WorkerBee.call(this);
   this.dept = 'engineering';
   this.machine = '';
}

Engineer.prototype = Object.create(WorkerBee.prototype)
Engineer.prototype.constructor = Engineer;

let s = new SalesPerson();
console.log(s);
e = new Engineer();
console.log(e);