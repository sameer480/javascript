  //Function with Default ParametersCreate a function calculateArea that calculates the area of a rectangle.
    //  It should take length and width as parameters, with a default value of 1 for width.
function calculateArea(length, width = 1) {
    return length * width;
}
console.log(calculateArea(5));  
console.log(calculateArea(5, 2));
//Array Creation and AccessCreate an array called fruits containing "apple", "banana", and "orange". 
// Write code to access and print the second element of the array.
let fruits=["apple","banana","orange"];
console.log(fruits[1]);
//Using Array LengthCreate an array called numbers with the values [10, 20, 30, 40]. Write code to print the length of the array.
let numbers = [10, 20, 30, 40];
console.log(numbers.length);
//Basic Array PushCreate an empty array called items. Use the push method to add "pen", "paper", and "book" to the array, then print the array.
let stat=[];
stat.push("pen");
stat.push("pencil");
stat.push("books");
for(let i=0;i<stat.length;i++){
    console.log(stat[i]);
}
//Arguments ObjectWrite a function sumAll that uses the arguments object to sum all numbers passed to it, regardless of how many arguments are provided.
function sumAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
sumAll(3,4,5);
//Rest ParametersCreate a function multiplyAtLeastTwo that takes at least two numbers and multiplies them, along with any additional numbers provided using rest parameters.
function mul(num1, num2,...num3){
    let res= num1*num2
    for(let i=0;i<num3.length;i++){
        res*=num3[i];
    }
    return res;
}
console.log(mul(1,2));
//Variable HoistingWrite a function testHoisting that demonstrates variable hoisting by using a variable before its declaration. Print the variable before and after its declaration to show the effect.
function testHoisting() {
    console.log(hoistedVar); 
    var hoistedVar = "I am hoisted!";
    console.log(hoistedVar); 
}
testHoisting();
//Array Pop and ShiftCreate an array colors with the values ["red", "blue", "green", "yellow"]. Use pop to remove the last element and shift to remove the first element, then print the resulting array.
 let color=["red","blue","green"];
 color.pop();
 console.log(color);
 color.shift();
 console.log(color);
//For Loop IterationWrite a function doubleArray that takes an array of numbers and returns a new array with each element doubled using a for loop.
function doubleArray(arr){
    let res =[];
    for(let i=0;i<arr.length;i++){
        res.push(arr[i]*2);
    }
    return res;
}
doubleArray(["1","2","3"]);
//Nested Functions and ScopeCreate a function counter that uses a nested function to maintain a private count variable. The outer function should return an object with two methods: increment to increase the count and getCount to return the current count. The count should not be accessible outside the function.
function counter(){
    let count =0;
    function increment (){
        count++;
    }
    function getCount(){
        return count;
    }
    return {
        increment: increment,
        getCount: getCount
    };
}
const myCounter= counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());
//Function Expression with RecursionWrite a function expression stored in a variable power that calculates the power of a base number raised to an exponent using recursion. The function should handle non-negative integers for the exponent.
const power= function(base, exponent) {
    if(exponent === 0) {
        return 1;
    }else if(exponent < 0) {
        return 1/ power(base, -exponent);
    } else
        return base *power(base,exponent - 1);
};
console.log(power(2, 3));
//Passing Function as Argument (Callback)Create a function processArray that takes an array and a callback function as arguments. The callback function should be applied to each element of the array, and the function should return a new array with the results.
function processArray(arr,callback){
    let res=[];
    for(let i=0;i<arr.length;i++){
        res.push(callback(arr[i]));
    }
}
//Example callback function to square a number
function square(num){
    return num*num;
}
let numbersArray = [1, 2, 3, 4, 5];
//Using the processArray function with the square callback
processArray(numbersArray, square); 
//Array Splice MethodWrite a function replaceMiddle that takes an array and two new elements. Use the splice method to replace the two middle elements of the array (or one if the array has an odd length) with the new elements. Return the modified array.
function replacemiddle(arr, newElement1, newElement2) {
    let midIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        arr.splice(midIndex - 1, 2, newElement1, newElement2);
    } else {
        arr.splice(midIndex, 1, newElement1);
        arr.splice(midIndex + 1, 0, newElement2);
    }
    return arr;
}
let myArray = [1, 2, 3, 4, 5];
let modifiedArray = replacemiddle(myArray, 'a', 'b');
console.log(modifiedArray); // Output: [1, 2, 'a', 'b', 5]

//Scope Chain and ClosuresCreate a function makeMultiplier that takes a number x and returns a function that multiplies its input by x. Demonstrate the closure by creating two multiplier functions with different values of x.
function makeMultiplier(x){
    return function(num){
        return num*x;
    }

}
let double = makeMultiplier(2);
let triple = makeMultiplier(3);
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15
//Array Sort with Compare FunctionWrite a function sortObjects that takes an array of objects with a score property and sorts them in descending order based on the score. Use the sort method with a custom compare function.
function sortObjects(arr){
    return arr.sort((a,b)=>{
        return b.score - a.score;
    })
}
let objectsArray = [
    { name: "Alice", score: 50 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 60 }
];
let sortedArray = sortObjects(objectsArray);
console.log(sortedArray);
//forEach with Custom ProcessingWrite a function filterAndTransform that takes an array of numbers and uses forEach to create a new array containing only even numbers, each multiplied by 3.
function filterAndTransform(arr){
    let result = [];
    arr.forEach(num => {
        if (num % 2 === 0) {
            result.push(num * 3);
        }
    });
    return result;
}
let numbersArray2 = [1, 2, 3, 4, 5, 6];
let transformedArray = filterAndTransform(numbersArray2);
console.log(transformedArray); // Output: [6, 12, 18]

//Handling Out-of-Range Array IndicesCreate a function sparseArrayTest that demonstrates the behavior of assigning values to an array at indices outside its current range, including positive and negative indices. Print the array and its length after assignments.
function sparseArrayTest(){
    let arr=[];
    arr[5]= "hello";
    arr[-2]="world";
    console.log(arr);
}
sparseArrayTest();
//Combining Array MethodsWrite a function processStringArray that takes an array of strings, reverses the array, converts each string to uppercase, and joins them with a hyphen ("-"). Use the reverse, map, and join methods.
function processStringArray(arr){
    return arr.reverse().map(str=>str.toUpperCase()).join("-");
}
let stringArray = ["apple", "banana", "cherry"];
let processedString = processStringArray(stringArray);
console.log(processedString); // Output: "CHERRY-BANANA-APPLE"

//Complex Nested Functions with CallbacksCreate a function taskManager that maintains a list of tasks (strings) in a private array using a closure. It should return an object with three methods: addTask to add a task, processTasks to apply a callback function to each task and return the results, and getTasks to return the current tasks. Demonstrate with a callback that adds an exclamation mark to each task.
function taskManager() {
    let tasks = [];
    
    function addTask(task) {
        tasks.push(task);
    }
    
    function processTasks(callback) {
        return tasks.map(callback);
    }
    
    function getTasks() {
        return tasks;
    }
    
    return {
        addTask: addTask,
        processTasks: processTasks,
        getTasks: getTasks
    };
}
const myTaskManager = taskManager();
myTaskManager.addTask("Complete homework");
myTaskManager.addTask("Clean the room");
const processedTasks = myTaskManager.processTasks(t => t + "!");
console.log(processedTasks); // Output: ["Complete homework!", "Clean the room!"]

