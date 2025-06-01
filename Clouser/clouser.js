// Write a function `blockScopeDemo` that declares a variable `x` with `let` outside an if block and another `x` with `let` inside the if block. Log both values to show they are different.
function blockScopeDemo() {
    let x = 10;
    if (true) {
        let x = 20;
        console.log("Inside block:", x); // Should print 20
    }
    console.log("Outside block:", x); // Should print 10
}
// Write a function `varVsLet` that declares a variable with `var` and another with `let` inside a function, each modified in an if block. Log their values inside and outside the block to show scoping differences.
function varVsLet() {
    var a = 1;
    let b = 1;
    if (true) {
        var a = 2; // Same variable
        let b = 2; // Different variable
        console.log("Inside: var a =", a, "let b =", b); // 2, 2
    }
    console.log("Outside: var a =", a, "let b =", b); // 2, 1
}
for(let i=0;i<=3;i++){
    setTimeout(()=>{
        console.log("Timeout executed with i =", i);
    },1000);
}
// Write a function `globalAccess` that declares a global variable `globalVar` and a function `inner` inside it. Log `globalVar` from `inner` to demonstrate access to global scope.
let globalVar = "I am global";
function globalAccess() {
    function inner() {
        console.log(globalVar); // Prints "I am global"
    }
    inner();
}
// Example usage:
globalAccess(); // Output: "I am global"

// Write a function `makeCounter` that returns a function which increments and returns a counter starting from 0 each time it’s called.
function makeCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}
let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Write a function `createAdder` that takes a number `base` and returns a function that adds a given number to `base`. Demonstrate with multiple instances.
function createAdder(base) {
    return function(num) {
        return base + num;
    };
}
let addFive = createAdder(5);
let addTen = createAdder(10);
console.log(addFive(3)); // 8
console.log(addTen(3)); // 13

// Write a function `outer` with a variable `x` and an inner function `inner` that declares its own `y` and logs both `x` and `y`. Call `outer` to show lexical scope access.
function outer() {
    let x = "outer";
    function inner() {
        let y = "inner";
        console.log("x:", x, "y:", y); // x: outer y: inner
    }
    inner();
}
outer();
// Write a function `createButtons` that creates 3 buttons dynamically and uses a closure to alert the button’s index (0 to 2) when clicked, using `let` to avoid issues.
function createButtons(){
    for(let i=0;i<3;i++){
        const button = documnet.createElement("button");
        button.innerHtml = `Button ${i}`;
        button.addEventListener("click", () => {
            console.log(`Button ${i} clicked`);
        });
        document.body.appendChild(button);
    }
}
// Example usage:
createButtons(); // Creates 3 buttons that alert their index when clicked
// 9. Private Variable with Closure
// Write a function `createPerson` that takes a `name` and returns an object with methods `getName` and `setName` to access and modify a private `name` variable.
function createPerson(name){
    let _name = name;
    return {
        getName: function() {
            return _name;
        },
        setName: function(newName) {
            _name = newName;
        }
    };
}
// Example usage:
const person = createPerson("Alice");
console.log(person.getName()); // Output: "Alice"
person.setName("Bob");
console.log(person.getName()); // Output: "Bob"

// 10. Execution Context Stack Simulation
// Write a function `simulateStack` with nested functions `first` and `second`. Log messages in each to show the order of execution context creation and popping.
function simulateStack() {
    console.log("Global context");
    function first() {
        console.log("First context");
        function second() {
            console.log("Second context");
        }
        second();
        console.log("First context resumes");
    }
    first();
    console.log("Global context resumes");
}
simulateStack()

// 12. Multiple Closures Sharing State
// Write a function `createTeam` that returns two functions: `addMember` to add a name to a private array and `getMembers` to return the array. Demonstrate shared state.
function createTeam() {
    let members = [];
    return {
        addMember: function(name) { members.push(name); },
        getMembers: function() { return members; }
    };
}
// 13. Closure with Delayed Execution
// Write a function `delayedLogger` that takes a message and delay (ms) and returns a function that logs the message after the specified delay using `setTimeout`.
let team = createTeam();
team.addMember("Alice");
team.addMember("Bob");
console.log(team.getMembers()); // ["Alice", "Bob"]
 function delayLogger(msg,delay){
    return function(){
        setTimeout(()=>{
            console.log(msg);
        }, delay);
    }
 }
// Example usage:
const logHello = delayLogger("Hello", 1000);
logHello(); // Logs "Hello" after 1 second
// 15. Nested Closures
// Write a function `makeMultiplier` that takes a factor and returns a function that takes another factor, which returns a function that multiplies a number by both factors.
function makeMultiplier(factor1) {
    return function(factor2) {
        return function(num) {
            return factor1 * factor2 * num;
        };
    };
}
let doubleThenTriple = makeMultiplier(2)(3);
console.log(doubleThenTriple(5)); // 30 (2 * 3 * 5)
