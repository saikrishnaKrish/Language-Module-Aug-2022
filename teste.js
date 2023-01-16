// function getFirstname(firstname){
//   return function getLastname(lastname){
//     return function printFullname(){
//      return firstname+' '+lastname
//    }
//    }
// }
// // let getFname=getFirstname('sai')
// // let getLname=getFname('krishna')
// // let getfullname=getLname()

// console.log(getFirstname('sai')('krishna')()) // this way of passing arguments is nothing but currying.


// ============================================================================
// let a=22
// function change(b){
//   b=2
// }
// change(a)
// console.log(a) 
// ==========================================

//const allow us to modify the existing object but not allow us to change the entire object.
// const ab={a:52}
// ab.a=11
// ab.aba=65 
// console.log(ab)
// ====================================================

// function createGreeting(greeting){
//   return function greet(gname){
//     console.log('greeting!',gname,'wishes are ',greeting)
//   }
//   // return greet
// }

// console.log(createGreeting('good morning')('sai'))

// =============================================================
let a=5774
console.log(globalThis.globalThis.global)