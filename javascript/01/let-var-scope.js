let x = 10;
console.log(x); //10

function change() {
  var x = 20;
  console.log(x); //20
  if (true) {
    var x1 = 30; 

    console.log(x, x1);//20 30
  }
  console.log(x);//20
}
change();
console.log(x);//10



// var x = 10;
// console.log(x);

// function change() {
//   console.log(x);
//   var x = 20;
//   if (true) {
//     console.log(x);
//     var x = 30;
//     console.log(x);
//   }
//   console.log(x);
// }
// change();
// console.log(x);