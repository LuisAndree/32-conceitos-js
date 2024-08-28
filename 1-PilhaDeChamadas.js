// FIFO - frist in frist out 
// LIFO - last in frist out

function firstFunction() {
    console.log("First function starts");
    secondFunction();
    console.log("First function ends");
}

function secondFunction() {
    console.log("Second function starts");
    thirdFunction();
    console.log("Second function ends");
}

function thirdFunction() {
    console.log("Third function is running");
}

firstFunction();

