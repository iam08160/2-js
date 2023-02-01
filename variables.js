// // ? Variables

// /* 
//     Containers that store data in memory
//     * declaration
//         * allows memory space to be reserved
//         * starts with let, var, or const
//         * cannot start with a number or characters other than $ or _
//         * if no value is assigned, it's undefined
//     * initilization
//         * assignment of data value
//         * can be any value or data type (str, int, arr, fx, class, etc.)
//         * can be reassigned (except for const)
// */

// // Variable Declaration
// // let firstName
// console.log(firstName)

// // Variable Declaration and variable initilization
// // let lastName = "Niemczyk"
// console.log(lastName)

// // Reassignment
// firstName = "Paul"

// // ? String Concatenation
// // let fullName = firstName + " " + lastName
// // console.log(fullName)

// // ? String Interpolation
// let fullName = `${firstName} ${lastName}`
// console.log(fullName)

// // (a) (b) (c)            (d)
// // let address = "123 Main St, Salem, MA"
//     //(e) =      (f)
// // (a) - keyword
// // (b) - variable identifier
// // (c) - assignment operator
// // (d) - value or initializer
// // (e) - variable declaration
// // (f = Variable initializtation)

// // Var is hoisted wheras let is not
// //! Don't use if you can avoid it
// var age = 26
// console.log(age)

// // ? Const vataible CANNOT have a reassigned value
// const ssn = "123-45-6789"
// console.log(ssn)

// ssn = "232-23-2323"
// console.log(ssn)

//challenge

// let fName = "Ian"
let lName = "MacKenzie"
let houseNumber = "56"
let aptNumber = "B"
let street = "Platt Street"
let city = "Winooski"
let state = "VT"
let postCode = "05404"

let addressStamp = `${fName} ${lName} \n ${houseNumber} ${aptNumber} ${street} \n ${city} , ${state.toUpperCase()} ${postCode}`

console.log(addressStamp)


