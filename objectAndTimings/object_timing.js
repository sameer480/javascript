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

//mic Property CreationWrite a function createDynamicObject that takes an array of key-value pairs (e.g., [["key1", "value1"], ["key2", 123]]) and creates an object with those properties. Use both dot notation and square bracket notation for property creation based on whether the key starts with a number.
function createDynamicObject(pairs){
    const obj = {};
    pairs.forEach(pair => {
        const [key, value] = pair;
        if (!isNaN(key[0])) {
            obj[key] = value; // using square bracket notation for keys starting with a number
        } else {
            obj[key] = value; // using dot notation for other keys
        }
    });
    return obj;
}
const dynamicObj = createDynamicObject([["1key", "value1"], ["key2", 123], ["key3", "value3"]]);
console.log(dynamicObj);   
//Timing Event with CallbackWrite a function repeatAction that takes a callback function and a number of repetitions. Use setInterval to execute the callback the specified number of times with a 1-second interval, then stop the interval. The callback should print a message with the current repetition number.
function repeatAction(callback, repetitions) {
    let count = 0;
    const intervalId = setInterval(() => {
        if (count < repetitions) {
            callback(count + 1); // Use count+1 for 1-based repetition number
            count++;
        } else {
            clearInterval(intervalId);
        }
    }, 1000); // 1-second interval
}

// Example usage:
repeatAction((n) => {
    console.log(`Repetition ${n}`);
}, 5);
//same as above but with a named function
function logRepetition(n) {
    console.log(`Repetition ${n}`);
}

const numberOfRepetitions = 5;
repeatAction(logRepetition, numberOfRepetitions);

//Object Keys ComparisonWrite a function compareObjects that takes two objects and returns an array of property names that are common to both objects. Use Object.keys to retrieve the property names and compare them.
function compareObjects(obj1,obj2){
    const keys1=Object.keys(obj1);
    const keys2=Object.keys(obj2);
    const commonKeys = keys1.filter(key => keys2.includes(key));
    return commonKeys;
}
// Example usage:
const objectA = { a: 1, b: 2, c: 3 };   
const objectB = { b: 4, c: 5, d: 6 };
const commonProperties = compareObjects(objectA, objectB);
//Sparse Array with PropertiesCreate an array data and assign values at indices 0, 5, and a non-integer key "label" with value "Test". Write a function analyzeArray that uses a for...in loop to print all properties and their values, and also prints the array’s length property.
function analyzeArray(arr){
    for(let key in arr){
        console.log(`${key}: ${arr[key]}`);
    }
    console.log(`Array length: ${arr.length}`);
}
const data = [];
data[0] = "Value at index 0";
data[5] = "Value at index 5";
data.label = "Test";
analyzeArray(data);
//Clearing Multiple TimeoutsWrite a program that sets three setTimeout calls with different delays (e.g., 1s, 2s, 3s) to print different messages. Store the timeout IDs and create a function cancelAllTimeouts that cancels all timeouts before they execute.
let timeoutIds = [];

function cancelAllTimeouts() {
    timeoutIds.forEach(id => {
        clearTimeout(id);
    });
    timeoutIds = []; // Optionally clear the array after cancelling
}

timeoutIds.push(setTimeout(() => {
    console.log("Timeout 1 executed");
}, 1000));

timeoutIds.push(setTimeout(() => {
    console.log("Timeout 2 executed");
}, 2000));

timeoutIds.push(setTimeout(() => {
    console.log("Timeout 3 executed");
}, 3000));
//Object Property TransformationWrite a function transformObject that takes an object and a callback function. The callback should be applied to each property value, and the function should return a new object with the transformed values. Use a for...in loop for iteration.
function transformObject(obj, callback) {
    const newObj = {};
    for (let key in obj) {
        newObj[key] = callback(obj[key]);
    }
    return newObj;
}
// Example usage:
const originalObject = { a: 1, b: 2, c: 3 };
const transformedObject = transformObject(originalObject, value => value * 2);
console.log(transformedObject); 
//Simulating a Countdown TimerCreate a function countdown that takes a number of seconds and uses setInterval to print a countdown from that number to 0, updating every second. When the countdown reaches 0, print "Done!" and stop the interval.
function countdown(seconds){
    let remains= seconds;
    const intervalId = setInterval(()=>{
        if(remains >= 0){
            console.log(remains);
            remains--;
        } else {
            console.log("Done!");
            clearInterval(intervalId);
        }
    })
}
// Example usage:
countdown(5); 
//Deep Nested Object AccessCreate an object organization with multiple levels of nested objects, such as department containing team containing leader. Write a function getLeaderName that safely accesses the leader’s name property, returning "Unknown" if any part of the chain is undefined.
function getLeaderName(org) {
    return org.department?.team?.leader?.name || "Unknown";
}
// Example usage:
const organization = {
    department: {
        team: {
            leader: {
                name: "Alice"
            }
        }
    }
};
const organizationWithoutLeader = {
    department: {
        team: {}
    }
};
console.log(getLeaderName(organization)); // Output: "Alice"
console.log(getLeaderName(organizationWithoutLeader)); // Output: "Unknown"