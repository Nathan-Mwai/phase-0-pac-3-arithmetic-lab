function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;

}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function increment(n){
    return ++n
}
function decrement(n){
    return --n
}

function makeInt(n) {
    const parsedInt = parseInt(n, 10);
    return parsedInt;
}

function preserveDecimal(n) {
    const parsFloat = parseFloat(n);
    return parsFloat
}