//Basic Class DeclarationWrite a class Rectangle with a constructor that takes width and height and assigns them to the instance. Create an instance and log its properties.
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height
    }
}
const rect = new Rectangle(10,20);
console.log(`Width: ${rect.width}, Height: ${rect.height}`); // Output: Width: 10, Height: 20
 
class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}
const person = new Person('John', 'Doe');
console.log(person.getFullName()); // Output: John Doe
//Class ExpressionWrite a named class expression for a class Employee with a constructor that takes id and name. Create an instance and verify that the class name is local to the class body.
const Employee = class EmployeeClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
};
const emp = new Employee(1, 'Alice');
console.log(emp.id, emp.name); // Output: 1 Alice
// Verify class name
console.log(Employee.name); // Output: EmployeeClass
//Getter and SetterCreate a class BankAccount with a private _balance property. Implement get balance and set balance to manage the balance with validation (balance cannot be negative). Test the getter and setter.
class Bank{
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
    }

    deposit(amount) {
        if(amount <= 0) {
            console.log('Deposit amount must be positive');
            return null;
        }
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Insufficient funds');
            return null;
        }
        this.balance -= amount;
        return this.balance;
    }
}
//Class InheritanceCreate a base class Animal with a constructor that takes species and a method describe that returns the species. Create a derived class Dog that extends Animal, adds a name property, and overrides describe to include the name. Use super to call the base class method.
class Animal {
    constructor(species) {
        this.species = species;
    }

    describe() {
        return `This is a ${this.species}`;
    }
}
class Dog extends Animal{
    constructor(name){
        super('Dog');
        this.name = name;
    }
    describe() {
        return `${super.describe()} named ${this.name}`;
    }
}
const myDog = new Dog('Buddy');
console.log(myDog.describe()); // Output: This is a Dog named Buddy
//Static Method in ClassWrite a class MathUtils with a static method square that takes a number and returns its square. Call the static method without instantiating the class.
class MathUtils{
    static square(num) {
        return num * num;
    }
    static cube(num) {
        return num * num * num;
    }
    static add(a, b) {
        return a + b;
    }
    static subtract(a, b) {
        return a - b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
console.log(MathUtils.square(5)); // Output: 25
console.log(MathUtils.cube(3)); // Output: 27
console.log(MathUtils.add(10, 5)); // Output: 15
console.log(MathUtils.subtract(10, 5)); // Output: 5
console.log(MathUtils.multiply(10, 5)); // Output: 50
//Class with Private FieldsCreate a class Counter using private fields (#count) to track a count. Implement methods increment and getCount to modify and access the private field. Test the encapsulation.
class Counter {
    #count = 0;

    increment() {
        this.#count++;
    }

    getCount() {
        return this.#count;
    }
}
const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.increment();
console.log(counter.getCount()); // Output: 2
// Attempting to access private field directly will result in an error
// console.log(counter.#count); // Uncaught SyntaxError: Private field '#count' must be declared in an enclosing class