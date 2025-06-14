//Basic setTimeoutWrite a function delayedMessage that uses setTimeout to log a message after 2 seconds.
function delayedMessage() {
    setTimeout(() => {
        console.log("This message is delayed by 2 seconds");
    }, 2000);
}
delayedMessage();
//Basic setIntervalCreate a function countUp that uses setInterval to log numbers from 1 to 5 every second, then stops.
function countUp(){
    let count =1;
    const intervalId = setInterval(() => {
        console.log(count);
        count++;
        if (count > 5) {
            clearInterval(intervalId);
            console.log("Counting stopped.");
        }
    }, 1000);
}
countUp();
//Clearing setIntervalWrite a function limitedTimer that uses setInterval to log a message every second for 5 seconds, then clears the interval.
function limitedTimer(){
    let seconds = 0;
    const intervalId = setInterval(() => {
        seconds++;
        console.log(`Message logged for ${seconds} second(s)`);
        if (seconds >= 5) {
            clearInterval(intervalId);
            console.log("Timer cleared after 5 seconds.");
        }
    }, 1000);   
}
limitedTimer();
//setTimeout with ParametersCreate a function delayedCalculation that uses setTimeout to calculate and log the square of a given number after a 1-second delay.
function delayedCalculation(number) {
    setTimeout(() => {
        const square = number * number;
        console.log(`The square of ${number} is ${square}`);
    }, 1000);
}
delayedCalculation(4); // Output: The square of 4 is 16
//Recursive setTimeoutWrite a function recursiveTimeout that uses setTimeout to log numbers from 1 to 5 every second, using recursion instead of setInterval.
function recursiveTimeout(count = 1) {
    if (count <= 5) {
        console.log(count);
        setTimeout(() => recursiveTimeout(count + 1), 1000);
    } else {
        console.log("Counting completed.");
    }
}
recursiveTimeout(); // Output: 1, 2, 3, 4, 5 (each after 1 second)
//Simulating Promise with setTimeoutCreate a function timeoutPromise that wraps setTimeout in a Promise, resolving with a message after a specified delay. Use it in an async function with await.
function timeoutPromise(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Resolved after ${delay} milliseconds`);
        }, delay);
    });
}
async function asyncTimeoutExample() {
    const message = await timeoutPromise(2000);
    console.log(message); // Output: Resolved after 2000 milliseconds
}