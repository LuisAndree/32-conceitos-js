console.log("Before timeout");

setTimeout(function() {
    console.log("This is delayed by 2 seconds");
}, 2000);

console.log("After timeout");

let count = 0;

let intervalId = setInterval(function() {
    count++;
    console.log("Count: " + count);
    if (count === 5) {
        clearInterval(intervalId); 
    }
}, 1000);

let start = null;

function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    document.getElementById("box").style.left = Math.min(progress / 10, 200) + "px";
    if (progress < 2000) {
        requestAnimationFrame(step); 
    }
}

requestAnimationFrame(step);
