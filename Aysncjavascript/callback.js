//Basic Callback ExecutionWrite a function processTask that takes a callback function as an argument, logs "Processing started", and then invokes the callback to log "Processing completed". Call processTask with a callback function.
function processTask(callback) {
    console.log("Processing started");
    callback();
    console.log("Processing completed");
}
processTask(() => {
    console.log("Callback executed");
});
//Callback with ParametersCreate a function greetUser that takes a name and a callback function. The function should log a greeting and pass the name to the callback, which logs a personalized message.
function greetUser(name,callback){
    console.log(`Hello,${name}`);
    callback(name);
}
greetUser("Alice",function(userName){
    console.log(`Welcome,${username},to our platform`)
})
//Sequential CallbacksWrite a function taskSequence that takes two callback functions. It should execute the first callback, log "Task 1 done", then execute the second callback to log "Task 2 done". Demonstrate the sequence.
function taskSequence(callback1,callback2){
    callback1();
    console.log("Task 1 done");
    callback2();
    console.log("Task 2 done"); 
}
taskSequence(
    ()=>{console.log("Executing Task 1")},
    ()=>{console.log("Executing Task 2")}
);
//Callback Hell SimulationCreate a function nestedTasks that simulates callback hell by nesting three callbacks, each logging a step (e.g., "Step 1", "Step 2", "Step 3") after a 1-second delay using setTimeout. Demonstrate the nested structure.
function nestedTasks(){
    setTimeout(()=>{
        console.log("Step 1");
        setTimeout(()=>{
            console.log("Step 2");
            setTimeout(()=>{
                console.log("Step 3");
            },1000);
        },1000);    
    })
}
nestedTasks();
 //Dynamic Callback ChainCreate a function executeTasks that takes an array of tasks (each a function returning a string) and a callback. Execute the tasks sequentially using callbacks, collecting results in an array, and pass the results to the final callback.
 //Dynamic Callback ChainCreate a function executeTasks that takes an array of tasks (each a function returning a string) and a callback. Execute the tasks sequentially using callbacks, collecting results in an array, and pass the results to the final callback.
function executeTasks(tasks, finalCallback) {
    let results = [];
    function runTask(index) {
        if (index < tasks.length) {
            setTimeout(() => {
                const result = tasks[index]();
                results.push(result);
                runTask(index + 1);
            }, 0);
        } else {
            finalCallback(results);
        }
    }
    runTask(0);
}

// Example usage:
const tasks = [
    () => "Task 1 done",
    () => "Task 2 done",
    () => "Task 3 done"
];

executeTasks(tasks, function(results) {
    console.log("All tasks completed:", results);
});
// Output: All tasks completed: [ 'Task 1 done', 'Task 2 done', 'Task 3 done' ]
//Error Handling in CallbacksWrite a function fetchData that takes a callback and simulates fetching data with setTimeout. Randomly succeed (pass data to callback) or fail (pass an error to callback). Handle both cases in the callback.
function fetchData(callback) {
    setTimeout(() => {
        const success = Math.random() > 0.5; // Randomly succeed or fail
        if (success) {
            callback(null, "Data fetched successfully");
        } else {
            callback("Error fetching data", null);
        }
    }, 1000);
}