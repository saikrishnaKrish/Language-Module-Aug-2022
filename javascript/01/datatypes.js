console.log(typeof 10) //number
console.log(typeof 'abcd') //string
console.log(typeof true) //boolean
console.log(typeof 9.5)  // no separate float type //number
console.log(typeof undefined) //undefined
console.log(typeof null) //object

let a = {a: 10, b: 'asdasd'} 
let b = [1,2,3] 
let c = BigInt(4576474376765756756) // for > 2^53 
let d = Symbol('x') 

console.log(typeof a)//object
console.log(typeof b)//object
console.log(typeof c)//Bigint
console.log(typeof d)//Symbol

console.log('==============================')

let i = 10
let i2 = Number(10)
let i3 = new Number(10) // never do this

console.log(typeof i) //treats as a number //10
console.log(typeof i2) //treats as a number //10
console.log(typeof i3) //treats as an object //{10}  