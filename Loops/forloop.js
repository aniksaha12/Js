
let obj = {
    harry:90,
    subham:44,
    shivika:80,
    ritick:67,
    shv:23,
}

/// for in loop
for (let a in obj) {
    console.log("Marks of " + a + " are " + obj[a])
}

/// for of loop
for (let b of "harry"){
    console.log(b)
}
///for loop

let sum = 0
let n = prompt("Enter the value of n")

n = Number.parseInt(n)
for (let i =0; i<n; i++){
    sum += (i + 1)
}
console.log("Sum of first" +n + "natural numbers is " + sum)