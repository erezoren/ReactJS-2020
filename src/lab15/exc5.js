let arr1 = [10, 20, 30, 40];
let arr2 = [10, 20, 30, 40];

arr1.push(50);
arr2 = [50,...arr2];

console.log(arr1);
console.log(arr2);
