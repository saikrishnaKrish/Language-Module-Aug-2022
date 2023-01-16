var num = 10;

console.log(num);// num=10

function fun(){
    console.log(num);//num=10
    var num = 20;
    num++; //num=21
    console.log(num);//num=21
    if(num){
        var num = 30;
        num++;//num=31
        console.log(num);//num=31
    }
    console.log(num);//21
}

fun();

console.log(num);//10

// 10 10 21 31 21 10