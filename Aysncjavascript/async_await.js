//Basic Async/AwaitWrite an async function fetchMessage that awaits a Promise resolving with "Hello, World!" after 1 second. Log the result.
async function fetchMessage() {
    const message = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 1000);
    });
    console.log(message); // Output: Hello, World!
}
fetchMessage();
//Async Function Returning PromiseCreate an async function getNumber that returns a Promise resolving with a random number. Call the function and log the result using await.
async function getNumber() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 1000);
    });
}
async function logRandomNumber() {
    const number = await getNumber();
    console.log(number); // Output: Random number between 0 and 99
}
logRandomNumber();
//Error Handling with Async/AwaitCreate an async function processData that awaits a Promise. The Promise randomly resolves or rejects. Use try-catch to handle errors and log appropriate messages.
async function processData() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                Math.random() > 0.5 ? resolve("Data processed successfully") : reject("Error processing data");
            }, 1000);
        });
        console.log(data); // Output: Data processed successfully
    } catch (error) {
        console.error(error); // Output: Error processing data
    }
}
processData();
//Parallel Async/Await with Promise.allWrite an async function fetchMultiple that uses Promise.all to await three Promises resolving with numbers after different delays. Calculate and log their product.
async function fetchMultiple() {
    const promises = [
        new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
        new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
        new Promise((resolve) => setTimeout(() => resolve(4), 3000))
    ];
    
    const results = await Promise.all(promises);
    const product = results.reduce((acc, num) => acc * num, 1);
    console.log(product); // Output: 24
}
fetchMultiple();
//Async/Await with Promise.raceCreate an async function fastestResult that uses await with Promise.race to get the result of the fastest of three Promises with different delays. Log the result.
async function fastestResult() {
    const promises = [
        new Promise((resolve) => setTimeout(() => resolve("Fastest: 1"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("Fastest: 2"), 2000)),
        new Promise((resolve) => setTimeout(() => resolve("Fastest: 3"), 3000))
    ];
    
    const result = await Promise.race(promises);
    console.log(result); // Output: Fastest: 1
}

fastestResult();