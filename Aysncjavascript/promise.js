//Basic Promise CreationCreate a Promise that resolves with the message "Success!" after 1 second using setTimeout. Use .then() to log the message.
function createPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Success!");
        }, 1000);
    });
}
createPromise().then(message=>{
    console.log(message); // Output: Success!
});

//Promise RejectionWrite a Promise that rejects with an error message "Failed!" after 1 second. Use .catch() to handle and log the error.
function createRejectedPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Failed!");
        }, 1000);
    });
}
createRejectedPromise().catch(error=>{
    console.log(error); // Output: Failed!
});
//Promise with Conditional Resolve/RejectCreate a function checkNumber that returns a Promise. The Promise resolves with "Even" if a random number (0-100) is even, and rejects with "Odd" if odd. Handle both cases using .then() and .catch().
function checkNumber(){
 return new Promise((resolve,reject)=>{
    const number =Math.floor(Math.random()*101);
    if(number % 2 === 0){
        resolve("Even");
    } else {
        reject("Odd");
    }
 });
}
checkNumber()
    .then(result => {
        console.log(result); // Output: Even
    })
    .catch(error => {
        console.log(error); // Output: Odd
    });
  



//Promise ChainingWrite a function processSteps that returns a Promise resolving with 1. Chain three .then() calls, where each multiplies the previous result by 2 and logs it. Handle any errors with .catch().
function processSteps(){
    return new Promise((resolve, reject) => {
        resolve(1);
    })
    .then(result => {
        const newResult = result * 2;
        console.log(newResult); // Output: 2
        return newResult;
    })
    .then(result => {
        const newResult = result * 2;
        console.log(newResult); // Output: 4
        return newResult;
    })
    .then(result => {
        const newResult = result * 2;
        console.log(newResult); // Output: 8
        return newResult;
    })
    .catch(error => {
        console.error("Error:", error);
    });
}
processSteps();
//Promise.race() ImplementationWrite three Promises with different setTimeout delays (100ms, 200ms, 300ms) resolving with different messages. Use Promise.race() to log the result of the first resolved Promise.
function promiseRaceExample(){
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1 resolved");
        }, 100);
    });

    const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2 resolved");
        }, 200);
    });

    const promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 3 resolved");
        }, 300);
    });

    Promise.race([promise1, promise2, promise3])
        .then(result => {
            console.log(result); // Output: Promise 1 resolved
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
promiseRaceExample();
//Promise.all() ImplementationWrite three Promises with different setTimeout delays (100ms, 200ms, 300ms) resolving with different messages. Use Promise.race() to log the result of the first resolved Promise.
function promiseAllExample() {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 1 resolved");
        }, 100);
    });

    const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2 resolved");
        }, 200);
    });

    const promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 3 resolved");
        }, 300);
    });

    Promise.all([promise1, promise2, promise3])
        .then(results => {
            console.log(results); // Output: [ 'Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved' ]
        })
        .catch(error => {
            console.error("Error:", error);
        });
}
promiseAllExample();
//Promise.any() UsageWrite three Promises: one rejects immediately, one resolves after 100ms, and one resolves after 200ms. Use Promise.any() to log the first resolved value. Handle the case where all Promises reject.
function promiseAnyExample() {
    const promise1 = new Promise((resolve, reject) => {
        reject("Promise 1 rejected");
    });

    const promise2 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 2 resolved");
        }, 100);
    });

    const promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 3 resolved");
        }, 200);
    });

    Promise.any([promise1, promise2, promise3])
        .then(result => {
            console.log(result); // Output: Promise 2 resolved
        })
        .catch(error => {
            console.error("All promises rejected:", error);
        });
}
promiseAnyExample();
//Promise.allSettled() AnalysisCreate three Promises: one resolves, one rejects, and one resolves after a delay. Use Promise.allSettled() to log the status and value/reason for each Promise.
function promiseAllSettledExample() {
    const promise1 = new Promise((resolve) => {
        resolve("Promise 1 resolved");
    });

    const promise2 = new Promise((resolve, reject) => {
        reject("Promise 2 rejected");
    });

    const promise3 = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise 3 resolved after delay");
        }, 100);
    });

    Promise.allSettled([promise1, promise2, promise3])
        .then(results => {
            results.forEach(result => {
                if (result.status === "fulfilled") {
                    console.log(`Fulfilled: ${result.value}`);
                } else {
                    console.log(`Rejected: ${result.reason}`);
                }
            });
        });
}
promiseAllSettledExample();