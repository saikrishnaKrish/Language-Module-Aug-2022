let arr = [2,3,4,5,6];

function fun(arr){
    arr.unshift(1);//[1,2,3,4,5,6]
    console.log(arr);//[1,2,3,4,5,6]
    let newArr = [7,8,9];
    arr = newArr;//[7,8,9]
    console.log(arr);//[7,8,9]
}

console.log(arr); //[2,3,4,5,6]
fun(arr);
console.log(arr);//[1,2,3,4,5,6]