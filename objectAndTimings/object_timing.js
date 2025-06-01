//Object Creation with PropertiesWrite a JavaScript program to create an object called car with properties make, model, and year. Assign appropriate values and print the object to the console.
const car = {
    make:"Toyota",
    model:"Corolla",
    year:2020
};
console.log(car);
//Accessing Object PropertiesCreate an object person with properties name and age. Write code to access and print the name property using both dot notation and square bracket notation.
const person={
    name:"John",
    age:30,
};
console.log(person.name);
console.log(person["age"]);

//Adding a Method to an ObjectCreate an object rectangle with properties width and height. Add a method area that calculates and returns the area of the rectangle. Call the method and print the result.
const rect={
    length:10,
    width:5,
    area: function(){
        return this.length*this.width;
    }
};
console.log(rect.area());
//Deleting a PropertyCreate an object book with properties title, author, and pages. Write code to delete the pages property and print the object before and after deletion.
const book={
    title: "1984",
    author: "sameer",
    page:"700"
};
console.log(book);
delete book.page;
console.log(book);
//Basic setTimeoutWrite a JavaScript program that uses setTimeout to print "Hello, World!" to the console after a delay of 2 seconds.
setTimeout(()=>{
    console.log("hello world");
},2000);

//Iterating with for...in LoopCreate an object student with properties name, grade, and id. Write a function printProperties that uses a for...in loop to print each property name and its value.
const student = {
    name: "Alice",
    grade: "A",
    id: 12345
};
function printProp(obj){
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`)
    }
}
printProp(student);
//Nested Object Creation and AccessCreate an object employee with properties name and details, where details is a nested object containing department and yearsOfService. Write code to access and print the department property.
const emp={
    name:"bob",
    details:{
        dept:"engineering",
        yos:20
    }
}
console.log(emp.details.dept);
//Array as ObjectCreate an array scores with values [85, 90, 95]. Add a non-integer property subject with value "Math" to the array. Use a for...in loop to print all properties, including the non-integer one.
const score=[85, 90, 95];// in javascript arrays are also objects
score.subject = "Math";// adding a non-integer property to the array
for(let key in score){
    console.log(`${key}: ${score[key]}`);
}
//Using setIntervalWrite a JavaScript program that uses setInterval to print the current second (0–59) every second. Stop the interval after 5 seconds using clearInterval.
let sec=0;
const intervalId= setInterval(()=>{
    console.log(sec);
    sec++;
    if(sec>5){
        clearInterval(intervalId)
    }
})
//Object Reference BehaviorCreate two objects item1 and item2 with identical properties name: "Apple". Assign item1 to item3 and modify a property in item3. Write code to demonstrate that item1 and item3 point to the same object, while item2 is different.
const item1={
    name:"apple"
}
console.log(item1.name);
const item2={
    name:"apple"}
console.log(item2.name);
const item3=item1;
console.log(item3.name);
item3.name="banana";
console.log(item1.name);
console.log(item3.name);
item1==item3;
item1===item3;
item2==item3;
item2===item3;
//Nested Object ManipulationCreate an object company with a nested object address containing street, city, and zip. Write a function updateAddress that takes the company object and a new city value, updates the nested city property, and returns the updated object.
const company = {
    name: "TechCorp",
    address: {
        street: "123 Tech Lane",
        city: "Tech City",
        zip: "12345"
    }
};
function updateAddress(comp,newCity) {
    comp.address.city = newCity;
    return comp;
}
const updatedCompany = updateAddress(company, "New Tech City");