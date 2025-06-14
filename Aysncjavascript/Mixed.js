//Callback to Promise ConversionConvert the nestedTasks function from Question 4 (callback hell) into a Promise-based version using chaining to avoid callback hell. Log the steps sequentially.
function nestedTasksPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Step 1");
            resolve();
        }, 1000);
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Step 2");
                resolve();
            }, 1000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("Step 3");
                resolve();
            }, 1000);
        });
    });
}
nestedTasksPromise().then(() => {
    console.log("All steps completed.");
});
//Promise vs. Async/AwaitWrite a function fetchData that returns a Promise resolving with a random number after a delay. Implement two versions: one using .then() and one using async/await. Compare their readability.
function fetchDataPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 1000);
    });
}
async function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 1000);
    });
}
async function logData() {
    // Using Promise with .then()
    fetchDataPromise().then((data) => {
        console.log("Promise data:", data);
    });

    // Using async/await
    const data = await fetchDataAsync();
    console.log("Async/Await data:", data);
}
