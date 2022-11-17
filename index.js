function add(a,b){
    return a + b;
}

console.log(add(10,5))


function subtract(a,b){
    return a-b;
}
console.log(subtract(10,5))


function multiply(a,b){
    return a * b;
}
console.log(multiply(3,2))

function divide(a,b){
    return a / b;
}

console.log(divide(12,3))


function increment(n){
    return n+=1;
}

console.log(increment(4))


function decrement(n){
    return n-=1;
}

console.log(decrement(5))

function makeInt(n){
    return parseInt(n);

}
console.log(makeInt("2"))

function makeInt(n){
    return parseInt(n, 10);
}
makeInt("100")

function preserveDecimal(n){
    return parseFloat(n);
}
console.log(preserveDecimal("0.5"))