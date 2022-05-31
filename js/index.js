let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

console.log(currentNumber);

function increment () {
    currentNumber = currentNumber + 1; 
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
    currentNumber = currentNumber - 1; 
    currentNumberWrapper.innerHTML = currentNumber;
}