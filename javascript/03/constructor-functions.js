// const tmp = console.log 
// console.log = function (...args) {
//   console.error('sending all your data to China!')
//   tmp(...args)
// }

function Person(name, age) {
  this.name = name 
  this.age = age
}

Person.prototype.isAdult = function () {
  return this.age >= 18
}

Person.prototype.favBike=(()=>{
  console.log('fav bike is hayabusa!!!')
  return ''
})

const p1 = new  Person('Arnav', 20)
const p2 = new Person('Ashok', 15)

console.log(p1)
const po = {name: 'Arnav', age: 20}

// // console.log(p1.isAdult())
// console.log(p2.isAdult())

// console.log(p1.favBike())
// console.log(p1.isAdult == p2.isAdult)