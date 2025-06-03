//Basic ConstructorWrite a constructor function Book that takes title and author as parameters and assigns them to the object. Create two book instances and log their properties.
function Book(title, author) {
    this.title = title;
    this.author= author;
}
const book1 = new Book("The hobbit","j.r.r");
const book2= new Book("1984","goerge orwell");
console.log(book1.tiltle,book1.author);
console.log(book2.title,book2.author);

//Using new KeywordCreate a constructor function Car with properties make and model. Instantiate a Car object using the new keyword and log its properties.
//Using new KeywordCreate a constructor function Car with properties make and model. Instantiate a Car object using the new keyword and log its properties.

function Car(make, model) {
    this.make = make;
    this.model = model;
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.make, myCar.model); // Output: Toyota Camry

//Constructor Without newWrite a constructor function Employee with properties name and id. Call it without the new keyword and demonstrate what happens to the global object. Suggest a way to prevent this issue.
function Employee(name,id){
    this.name= name;
    this.id =id;
}
//called with new
const emp1= new Employee("Alice",101);
console.log(emp1.name,emp1.id);
Employee("bob",102);
console.log(window.name,window.id);// On browsers: Bob 102 (pollutes global object)
//to prevent this issue
function SafeEmployee(name, id){
    if(!(this instanceof SafeEmployee)){
        return new SafeEmployee(name ,id);
    }
    this.name= name;
    this.id= id;
}
const emp2=SafeEmployee("charlie",103);
console.log(emp2.name,emp2.id);
//Constructor Returning thisCreate a constructor function Product with properties name and price. Ensure it implicitly returns this. Create an instance and verify the returned object.
function Product(name,price){
    this.name = name;
    this.price= price;
}
const prod= new Product("Laptop",1500);
console.log(prod.name,prod.price);
console.log(prod instanceof Product);
 
//Custom Constructor ValidationWrite a constructor function Rectangle that takes width and height as parameters. Validate that both are positive numbers; otherwise, throw an error. Create instances with valid and invalid inputs to test the validation.
function Rectangle(width, height) {
    if(typeof width !=='number'|| typeof height !=='number'|| width<=0 || height <=0){
        throw new Error("width and height must be positive numbers");
    }
    this.width = width;
    this.height = height;
}
try {
    const rect1 = new Rectangle(10, 5);
    console.log(`Rectangle 1: ${rect1.width} x ${rect1.height}`);
    
    const rect2 = new Rectangle(-10, 5); // This will throw an error
} catch (error) {
    console.error(error.message); // Output: width and height must be positive numbers
}
//Constructor with MethodsCreate a constructor function Student with properties name and grade. Add a method getDetails to the constructor that returns a string with the student’s details. Instantiate and call the method.
function Student(name, grade){
this.name = name;
this.grade = grade;
this.getDetails = function() {
        return `Name: ${this.name}, Grade: ${this.grade}`;
    };
}
const student1 = new Student("Alice", "A");
console.log(student1.getDetails()); // Output: Name: Alice, Grade: A
