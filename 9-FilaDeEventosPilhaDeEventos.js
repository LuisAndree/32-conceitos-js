function first() {
    console.log("First function starts");
    second();
    console.log("First function ends");
}

function second() {
    console.log("Second function starts");
    third();
    console.log("Second function ends");
}

function third() {
    console.log("Third function is running");
}

first();

console.log("Start");

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

console.log("Start");

setTimeout(function() {
    console.log("Timeout 1");
}, 1000);

setTimeout(function() {
    console.log("Timeout 2");
}, 0);

console.log("End");
