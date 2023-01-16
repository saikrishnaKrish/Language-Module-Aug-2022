let counter;

console.log(counter);

function secondFun() {
    let counter; 
    console.log(counter);

    function innerFun() {
        counter = 6; 
        console.log(counter);
     }

    counter = 2; 
    innerFun(); 
}

function firstFun() { 
    console.log(counter);
    counter = 2; 
}

counter = 3;

firstFun(); 
secondFun();

console.log(counter);













// ::solution

//undefined
//3
//undefined
//6
//2