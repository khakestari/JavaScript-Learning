'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // never do this to create a method
    // this.calcAge = function () {
    //     console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('jonas', 1991);
// jonas.calcAge()
// console.log(jonas);
// console.log(jonas instanceof Person);


// because we call the function with "new"
// 1. new {} (empty object) is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const jack = new Person('Jack', 1975);


// Prototypes
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}
// jonas.calcAge()
// console.log(Person.prototype);
// console.log(jonas.__proto__);
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// .prototype of linked objects

Person.prototype.species = 'Homo Sapiens';

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

const arr = [3, 4, 3, 3, 3, 9, 6, 4, 5, 6, 9, 3];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//     return [...new Set(this)];
// }
// console.log(arr.unique());
const h1 = document.querySelector('h1')

// console.dir(h1);
// console.dir(x => x + 1);

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
}
Car.prototype.brake = function () {
    this.speed -= 5;
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
bmw.accelerate();
// console.log(bmw);
const PersonClassExpression = class { }
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instence methods
    // Methods will be added to prototype of the object properly
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`${this.firstName} say hi`);
    }
    get age() {
        return 2037 - this.birthYear;
    }
    set fullName(name) {
        // console.log(name);
        if (name.includes(' '))
            this._fullName = name;
        else
            alert(`${name} is not a full name!`);
    }
    get fullName() {
        return this._fullName;
    }
    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}

// PersonCl.hey();

const jessica = new PersonCl('jessica Davis', 1996);
const walter = new PersonCl('Walter White', 1965)
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`${this.firstName} say hi`);
// }

// jessica.greet();

// 1. Classes are NOT hoisted
// 2. Calsses are first-class citizens
// 3. Classes are executed in strict mode
// ✅ خلاصه
// NOT hoisted → قبل از تعریف نمی‌تونی ازشون استفاده کنی.
// First-class citizens → کلاس‌ها رو مثل تابع می‌تونی پاس بدی، برگردونی، توی متغیر ذخیره کنی.
// Executed in strict mode → همیشه داخل کلاس‌ها رفتار سخت‌گیرانه اجرا میشه، حتی بدون 'use strict'.


const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
    get latest() {
        return this.movements.slice(-1).pop();
    },
    set latest(mov) {
        this.movements.push(mov);
    },
}
// console.log(account.latest);
account.latest = 50;
// console.log(account.movements);

// static method:
Person.hey = function () {
    console.log('Hey there 👋');
    console.log(this); // entire constructor function
}

// Person.hey();
// jonas.hey();


const PersonProto = {
    calcAge() {
        console.log(2025 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
}
const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
// console.log(steven.__proto__ === PersonProto);
// steven.calcAge()
const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1979);
// sarah.calcAge()

class Carcl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }
    accelerate() {
        this.speed += 10;
    }
    brake() {
        this.speed -= 5;
        return this;
    }
    get speedUS() {
        return this.speed / 1.6;
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

const ford = new Carcl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// console.log(ford.speedUS);
// ford.speedUS = 50;
// console.log(ford);


const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}
// linking prototypes
Student.prototype = Object.create(Person.prototype);
// Student.prototype = Person.prototype; // not work
Student.prototype.introduse = function () {
    console.log(`My name is ${this.firstName} and i study ${this.course}`);
}
const mike = new Student('Mike', 2020, 'CS')

// mike.introduse();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);


const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

// link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (ChargeTo) {
    this.charge = ChargeTo;
};

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} ${this.speed} with ${this.charge}`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90);
// tesla.brake();
// tesla.accelerate(); // JS use the first one
// console.log(tesla);

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // always need to happen first!
        super(fullName, birthYear);
        this.course = course;
    }

    introduse() {
        console.log(`${this.fullName} ${this.course}`);
    }

    calcAge() {
        console.log(`I'm ${2037 - this.birthYear + 10}`);
    }
}

// const martha = new StudentCl('Martha Jones', 2012)
const martha = new StudentCl('Martha Jones', 2012, 'CS')

// console.log(martha);
// martha.introduse();
// martha.calcAge();


const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduse = function () {
    console.log(`${this.fullName} ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'CS')
// jay.introduse();
// jay.calcAge()

///////////////////////////////////////////////
// Encapsulation: private class fields and methods

// 1) Public fields ()
// 2) Private fields
// 3) public methods
// 4) private methods
// Static Version of these 4


class Account {

    locale = navigator.language;
    bank = 'Bankist';
    #movements = []; // private and cant be mutated outside the class
    #pin;
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // this.pin = pin;
        this.#pin = pin;
        // this.locale = navigator.language;

        // console.log(`${owner}`);
    }
    // public interface
    getMovements() {
        return this.#movements;
    }
    deposit(val) {
        this.#movements.push(val);
        return this;
    }
    withraw(val) {
        this.deposit(-val);
        return this;
    }
    #approveLoan(val) {
        return true;
    }
    requestLoan(val) {
        if (this.#approveLoan(val)) {
            this.deposit(val)
            console.log(`Loan approved`);
        }
        return this;
    }
    static test() {
        return true;
    }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);
// acc1.requestLoan();

// acc1.deposit(250);
// acc1.withraw(140);
// acc1.deposit(300).withraw(100).withraw(50).requestLoan(25000).withraw(4000);
// console.log(acc1.pin);
// console.log(acc1.#movements);
// console.log(acc1.#approveLoan(323));

Account.test(); // static available only on class


EV.prototype.chargeBattery = function (ChargeTo) {
    this.charge = ChargeTo;
};



class EVCl extends Carcl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} ${this.speed} with ${this.#charge}`);
        return this;
    }
    chargeBattery(ChargeTo) {
        this.#charge = ChargeTo;
        return this;
    };
}

const rivian = new EVCl('Rivian', 120, 23)
rivian.accelerate().accelerate().accelerate().brake().chargeBattery(50).accelerate();

console.log(rivian.speedUS);
