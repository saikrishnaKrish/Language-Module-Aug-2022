// L_JS - Which of these methods modifies the original array?
// // 
const arr = [1, 2, 3];

arr.map(x => x * 10);
arr.filter(x => x%2 !== 0);
arr.find(x => x !== 2);
arr.reduce((acc, cur) => acc + cur);
arr.slice(1, 2);
arr.splice(1, 2);
console.log(arr)