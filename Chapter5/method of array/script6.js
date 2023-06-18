// Array to string

let n = [1, 3, 5, 7, 9];
let b = n.toString(n)
console.log(b)

// Join method
let c = n.join("_")
console.log(c)

// pop return the popped element

let a = n.pop()
console.log(n, a)

// push return the new array length

let p = n.push(10);
console.log(n, p)

// shift

let r = n.shift()
console.log(r, n)

// unshift

let u = n.unshift(55)
console.log(u, n)

// delete 

// let num = [ 1, 2, 3 , 4, 5, 7, 8 ]
// let num_more = [ 11, 21, 31 , 41, 51, 71, 81 ]
// console.log(num.length)
// delete num[0] // remove index value from array
// console.log(num.length)


// concat

// let newArray = num.concat(num_more)
// console.log(newArray)
// console.log(num, num_more)


// sort method 
let num = [ 11, 322, 3 , 54, 59, 7, 81 ] // origin array change
num.sort()
console.log(num)