// Boolean Constructor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/Boolean

// My GitHub: https://github.com/manishah7

// 1- explicit check
const myName = ""
// const isValid = myName

// console.log(isValid)

// 2- less bugs and more consistent behaviour
const stock = 0
const isInStock = Boolean(stock && "In stock")

// console.log(isInStock)

// 3- Filter arrays
const myArray = ["Mani", 32, "", false, 0, null]
const myFilteredArray = myArray.filter(Boolean)

// console.log({
//     myArray,
//     myFilteredArray
// })

// Tips
// const myArray = []
// const isArrayValid = Boolean(myArray)
// console.log(isArrayValid)

// Boolean() vs new Boolean() - typeof
const myVariable = "test"
const isValid = Boolean(myArray)

// Boolean() vs !!
