
function outerMost(x){
    return function outer(y){
        return function inner(z){
            return x + y + z;
        }
    }
}

let firstCall = outerMost(20);
let secondCall = firstCall(30);
console.log(secondCall(45));