//Global Context this in Sloppy ModeWrite a function printThis that logs the value of this to the console when called in the global context in sloppy mode. Explain the output.
function printThis() {
    console.log(this);
}

printThis();
//Object Method thisCreate an object person with a property name and a method getName that returns this.name. Call the method and log the result.
const person = {
    name: "Alice",
    getName: function() {
        return this.name;
    }
};
console.log(person.getName());
//Nested Object thisCreate an object outer with a nested object inner. The inner object should have a method logValue that logs this.value (where value is a property of inner). Demonstrate the output.
const outer={
    inner:{
        value: "Hello from inner",
        logValue: function() {
            console.log(this.value);
        }
    }
}
outer.inner.logValue(); // Logs "Hello from inner"
//Strict Mode thisWrite a function checkThis that logs the value of this in strict mode when called directly. Compare the output with the same function called in sloppy mode.
function checkThis(){
    'use strict';
    console.log(this);
}
checkThis(); // Logs undefined in strict mode
function checkThisSloppy(){
    console.log(this);
}
//Using call() to Bind thisCreate an object obj with properties x and y, and a function multiply that returns this.x * this.y. Use the call() method to bind multiply to obj and log the result.
const obj ={
    x:5,
    y:10,
    multiply: function() {
        return this.x * this.y;
    }
};
console.log(obj.multiply.call(obj)); // Logs 50
//Using apply() with ArgumentsWrite a function sumNumbers that takes two arguments and returns this.base + a + b. Create an object with a base property and use apply() to call sumNumbers with the object and an array of arguments [2, 3].
function sumNumbers(a,b){
    return this.base+a+b;

}
const baseObj={
    base: 10
}
console.log(sumNumbers.apply(baseObj, [2, 3])); // Logs 15//appy internally spreads the array elements as arguments
//Dynamic this BindingCreate two objects obj1 and obj2, each with a value property. Write a function logValue that logs this.value. Call logValue using call() with obj1 and apply() with obj2.
const obj1 = { value: "Value from obj1" };
const obj2 ={value: "value from obj2"};
function logValue(){
    console.log(this.value);
}
logValue.call(obj1); // Logs "Value from obj1"
logValue.apply(obj2); // Logs "value from obj2"

//Handling Primitive this with call()Write a function displayThis that logs this to the console. Call the function using call(42) and apply("hello"). Explain how JavaScript converts these primitive values to objects.
function displayThis(){
    console.log(this);
}
displayThis.call(42);      // Logs: [Number: 42] (in non-strict mode)
displayThis.apply("hello"); // Logs: [String: 'hello'] (in non-strict mode)
/*
Explanation:
When you use call() or apply() with a primitive value (like a number or string), JavaScript automatically wraps the primitive in its corresponding object wrapper (Number, String, Boolean) when passing it as 'this' inside a non-strict mode function.
So, 42 becomes new Number(42), and "hello" becomes new String("hello").
In strict mode, 'this' would remain the primitive value.
*/

