//Adding a Prototype MethodCreate a constructor function Animal with a name property. Add a method speak to Animal.prototype that returns ${this.name} makes a sound. Create an instance and call the method.
function Animal(name){
    this.name = name;
}
Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};
const dog = new Animal('Dog');
console.log(dog.speak()); // Output: Dog makes a sound

//Checking __proto__Write a constructor function Person with a name property. Create an instance and verify that Person.prototype === instance.__proto__ using a console log.
function Person(name){
    this.name= name;
}
const john = new Person('john');
console.log(Person.prototype == john.__proto__); // Output: true
//Shared Prototype PropertyCreate a constructor function Vehicle with a type property. Add a fuelType property to Vehicle.prototype. Create two instances and modify fuelType on the prototype. Show how it affects both instances.
function Vechile(type){
    this.type = type;
}
Vechile.prototype.fuelType ='Gasoline';
const car1= new Vechile('Car1');
const car2= new Vechile('Car2');
console.log(car1.fuelType); // Output: Gasoline
//Overriding Prototype MethodCreate a constructor function Dog with a name property. Add a bark method to Dog.prototype. Create an instance, override the bark method for that instance, and demonstrate the difference in behavior
function Dog(name) {
    this.name = name;
}
Dog.prototype.bark = function() {
    return `${this.name} barks`;
}   
const dog1 = new Dog('Buddy');
dog1.bark = function() {
    return `${this.name} growls`;
};
console.log(dog1.bark()); // Output: Buddy growls
const dog2 = new Dog('Max');
console.log(dog2.bark()); // Output: Max barks
//Important
//Prototype Chain ExtensionCreate a constructor function Shape with a type property and a getType method on its prototype. Create a constructor Circle that inherits from Shape.prototype using Object.create. Add a getArea method to Circle.prototype. Create a Circle instance and call both methods.
function Shape(type) {
    this.type = type;
}
Shape.prototype.getType = function() {
    return `Shape type: ${this.type}`;
}
function Circle(radius) {
    Shape.call(this, 'Circle');
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.getArea = function() {
    return Math.PI * this.radius * this.radius;
}   
const circle = new Circle(5);
console.log(circle.getType()); // Output: Shape type: Circle
console.log(circle.getArea()); // Output: 78.53981633974483

//Modifying Object.prototypeAdd a method customToString to Object.prototype that returns a custom string representation of any object. Create different objects (e.g., array, custom object) and show how they inherit this method.
Object.prototype.customToString = function() {
    return `Custom Object: ${JSON.stringify(this)}`;
}
const arr = [1, 2, 3];
const obj = { name: 'Test', value: 42 };
console.log(arr.customToString()); // Output: Custom Object: [1,2,3]
console.log(obj.customToString()); // Output: Custom Object: {"name":"Test","value":42}
