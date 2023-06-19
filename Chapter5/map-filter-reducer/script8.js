// map method

let arr= [2,5,3,8,6,1]
let a = arr.map((v, index, array)=> {
    // console.log(v, index, array)
    return v + 2
})
// console.log(a)

// filter method

let arr2 = [54,23,8,6,41,20,9]
let a2 = arr2.filter((a)=> {
    return a<10
})
// console.log(a2)


// reduce method
let arr3 = [2, 5, 43, 82, 10]
let newarr3 = arr3.reduce((h1, h2) => {
    return h1 + h2
})
console.log(newarr3)
