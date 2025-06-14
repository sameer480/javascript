//Understanding Task QueueWrite a script that logs "Start", uses setTimeout to log "Timeout" after 0ms, and logs "End". Explain the order of the logs based on the event loop.
function taskQueueExample() {
    console.log("Start");
    setTimeout(() => {
        console.log("Timeout");
    }, 0);
    console.log("End");
}
taskQueueExample();
//Microtask vs. Task QueueWrite a script that logs "Start", schedules a setTimeout (0ms) to log "Timeout", and a Promise that resolves immediately to log "Promise". Explain the output order.
function microtaskVsTaskQueue() {
    console.log("Start");

    setTimeout(() => {
        console.log("Timeout");
    }, 0);

    Promise.resolve().then(() => {
        console.log("Promise");
    });

    console.log("End");
}

microtaskVsTaskQueue();
//Microtask PriorityCreate a script that mixes Promises and setTimeout. Have a Promise resolve immediately to log "Promise 1", a setTimeout (0ms) to log "Timeout 1", and another Promise to log "Promise 2". Explain why Promises execute before setTimeout.
function microtaskPriorityExample() {
    Promise.resolve().then(()=>{
        console.log("Promise 1");
    });
    setTimeout(() => {
        console.log("Timeout 1");
    }, 0);
    Promise.resolve().then(() => {
        console.log("Promise 2");
    });
}
microtaskPriorityExample();
//Nested MicrotasksWrite a script where a Promise resolves with a value, and its .then() creates another Promise that resolves immediately. Compare its execution order with a setTimeout (0ms).
function nestedMicrotasksExample() {
    Promise.resolve("First Promise").then(value => {
        console.log(value); // "First Promise"
        Promise.resolve().then(() => {
            console.log("Nested Promise");
        });
    });

    setTimeout(() => {
        console.log("Timeout");
    }, 0);
}

nestedMicrotasksExample();
//Complex Event Loop ScenarioWrite a script that logs "Start", schedules a setTimeout (0ms), a Promise that resolves immediately, and another setTimeout (0ms). The Promise’s .then() schedules another setTimeout (0ms). Predict and explain the full order of logs.
function complexEventLoopScenario() {
    console.log("Start");

    setTimeout(() => {
        console.log("Timeout 1");
    }, 0);

    Promise.resolve().then(() => {
        console.log("Promise");
        setTimeout(() => {
            console.log("Timeout 3");
        }, 0);
    });

    setTimeout(() => {
        console.log("Timeout 2");
    }, 0);
}

complexEventLoopScenario();
//Simulating Microtask QueueCreate a function simulateMicrotask that uses Promises to queue multiple microtasks, each logging a number. Compare its execution with a setTimeout-based task queue.
function simulateMicrotask() {
    // Microtasks using Promises
    Promise.resolve().then(() => console.log("Microtask 1"));
    Promise.resolve().then(() => console.log("Microtask 2"));
    Promise.resolve().then(() => console.log("Microtask 3"));

    // Macrotasks using setTimeout
    setTimeout(() => console.log("Macrotask 1"), 0);
    setTimeout(() => console.log("Macrotask 2"), 0);
    setTimeout(() => console.log("Macrotask 3"), 0);

    console.log("Synchronous code");
}

simulateMicrotask();

