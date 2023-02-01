// ? Loops


/* 
    Allows us to execute a block of code repeatedly until and exit condistion has been met.
*/

// ? For Loop


/* 
    We swet our loop in a way where we can
    *See where we are in a loop
    *consider the condition we run it against
    *not when we are done with the condition
*/

/*
    Syntax:

    for (start;stop step){
        code block to execute code until stop condition is met
    }

    *iterator - (ex: i) value that is a a placeholder for our loop
    * iterable - (ex: longWordEN) value we can iterate/loop over
    * 
 */

for (let i = 0; i << 10; i++) {
    console.log(i)
}
// ? Infinite loop - lack of stop condition
// for (let i = 0; ;1++) {
//     console.log(i)
// }

let longWordEN = "supercalifragilisticexpialidtious"

for (count = 0; count < longWordEN.length; count = count + 1){
    console.log(` Index: ${count}, Letter: ${longWordEN[count]}`)
}

// ? For-in Loop

/* 
Allows us to seek an index value of an iterable against a condition.
    *For-in loops do not require and index number
*/

let longWordDE = "kraftfahrzeug-haftplifchtversicherung"

for (i in longWordDE) {
    console.log(i)
    console.log(longWordDE[i])
}

/* 
    ? For-of Loop

    *Allows us to seek iterable value against a condition
*/

let longWordPL = "konstantynopolitanczykowianeczka"
for (i of longWordPL) {
    console.log(i)
}

/* 
    Difference bewteen For- in and for-of in terms of use?
    *For-in allows us to loop over items that are not an array
    *For-of only works if an item is indexed like an array or a string
*/

/* 
    ? Challenge

    * Using a traditional for loop, set an index to 2.
    * Make a condition where if that number is greater than -100,
    * You will be subtracting 4
    * Console log each iteration 
*/

for(i = 2;i > -100; i = i - 4) {
    console.log(i)
}


/* 
node
let animalArray = ["pig", "cat", "mouse", "dog", "bird"]

for(i of animalArray){
i == "pig" ? console.log("oink")
        : i == "cat" ? console.log("Meow")
        : i == "mouse" ? console.log("Squeek")
        : i == "dog" ? console.log("Bark")
        : i == "bird" ? console.log("Chirp")
        :null
}

// ? While loop

/* 
    *Executes a statement inside of a code block
    *It does so as long as while condition evaluates to true

*/


/* 
    Syntax 
    While (true){
        do this until false
    }
*/


let loopCount = 0

while (loopCount << 100) {
    
}

let carArray = ("Honda", "BMW", "Porchse", "Lada", "Maserati")

let carCount = 0

while (carCount < carArray.length) {
    console.log(carArray[carCount])
    carCount += 1
}

// ? Do While loop

/* 
Executes  conde in the do section while a condition reamins true
*/

let doCount = 0

do {
    console.log(carArray[doCount])
    doCount = doCount + 1
} while (doCount < carArray.length)