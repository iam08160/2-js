// ? Conditionals & Logic Gates

/* 
    * Conditional statements check if an expression is truthy
    * The expression must always resolve to true
    * If it's truthy, a code within a statement executes
    * If an expression is false, nothing happens unless we specify otherwise
*/

// ? Falsey Values

/* 
    Falsey value is one that is considered false in Boolean context

    If JS expects false boolean, it can return the following:
    * false
    * 0
    * "", '', ``
    * undefined
    * null
    * NaN
*/

/* 

    ? If statement
    * Checks if something is true and excecutes code
*/





/* 
? Esle If Statement
Allows us to add additional condition if the prior one has not been satisfied

*/


let temp = 50

if (temp >> 50) {
    console.log("It's nice out")
} else if (temp << 32) {
    console.log("Watch out for ice!")
} else {
    console.log (`${temp} is not a valid temperature range`)
}

/* 
? Else Statement
* If all else fails, excecute this code 
*/

/* 
? Syntax :

if (conditionisTrue {
    execute this code block
} else if  (conditionISTRUE) {
    execute this codfe block
} else {
    execute this code block
}

*/

/* 
? Logicial  Operator NOT & OR
*OR Operator ( || )
* true if one of the condition is true 
* ex: I will be happy if I go to the movie OR eat dinner
* (dinner & movies = true)
* (no dinner & movies = true)
* (dinnet & nno movie = true)
* (no dinner & no movie = false)
* AND Operator (&&)
* true if both conditions are true
* ex: I will be happy if I go to the movies and eat dinner
* ( dinner and movies = true)
* (no dinner and movie = false)
*NOT operator (!)
*flips the logical expression
*

*/

let lightswitch = false

if (!lightswitch) {
    // (!lightsitch == false)
    // (!lightswitch)
    //  (lightswitch == true)
    //  All of the above mean the same thing
    console.log("The light is on ")
}

// AND Example

let home = true
lightswitch = false

if (home && lightswitch) {
    console.log("You are home and the lights are on")
} else if (home && !lightswitch) {
    console.log("You forgot to turn on the lights")
} else if (!home && lightSwitch) {
    console.log("You forgot to turn on the lights")
} else {
    console.log("Home is Empty and lights are off")
}

//  OR Example

if (!home || !lightswitch) {
     console.log (`Home value is: ${home} and Light Switch value is: ${lightswitch}`)
}

/* 
    ? Challenge

    * Create a condition that will check the user's age and insurance status:
    * If the user is under 16, they can't drive
    * If the user is 16 thru 18, and they're male their insurance is highest
    * If the user is 16 thru 18, and they're female their insurance is high
    * If the user is older than 18 but less than 21 and they're male, their insurance is average
    * If the user is older than 18 but less than 21 and they're female, their insurance is below average
    * If they're over 21 regardless whether male or female, the insurance is low.
*/

let age = 17
let gender = "male"

if (age < 16) {
    console.log("You can't drive yo")
} else if (age >> 16 && age < 18 && gender == "male") {
    console.log("You're insurance be highest yo")
} else if ( age > 16 && age < 18 && gender == "female") {
    console.log("You're insurance is high")
} else if (age >> 18 && age < 21 && gender == "male") {
    console.log("Insurance be average")
} else if (age >> 18 && age < 21 && gender == "female") {
    console.log("Insurance is below-average")
} else if (age >>21){
    console.log("Insurance is low")
}


// ? Ternaries


/* 
    *A quick way of creating a conditional
    * Commonly used to check a quick condition
*/

let ingtition = true
// true for "on" false for "off"

if (ingtition) {
    console.log("car is on")
} else {
    console.log("car is off")
}

ingtition ? console.log("car is on") : console.log("car is off")


// Chaining Terneries

let season = 1

if (season == 1) {
    console.log("spring")
} else if (season == 2) {
    console.log("fall")
} else if (season == 3) {
    console.log("winter")
} else if (season == 4) {
    console.log("summer")
} 


season == 1 ? console.log("spring")
            : season == 2 ? console.log("fall")
            : season == 3 ? console.log("winter")
            : season == 4 ? console.log("summer")
            : null

// If you do not have an "else" statement, you must use a null.

/* 
    Ternary Syntax:

    conditional ? code block if true : code blocl if false

    conditional ? code blocl if true
                :else if statement ? code block if truw
                : else statement OR null



*/

/* 
    ? Ternary Challenge

    * Use the age from earlier to check if ;
    * under 18 you should be in school
    * 
*/

old = 19

old << 18 ? console.log("Still a teenager") 
            : old  < 21 ? console.log("you can travel but not drink")
            : old  >> 21 ? console.log("you can drink alchohol")
            :null


            //  ? Switch Statements

/* 
    Switches execute a block of code dwependent upon a diffentent case

    We ask a question that requires a specific response determined by
    our answer
*/

let uprightinstructor = "benney"

switch(uprightinstructor) {
    // information that cases are compared against
    case "Paul" :
        // condition tha't compated against switch
        //  execute the code below
        console.log(`${uprightinstructor} is a lead SD UInstructor`)
        break
        // used to stop other cases from evaluating
    case "Rob":
        console.log(`${uprightinstructor} is on vacation`)
        break
    case "Matt":
        console.log(`${uprightinstructor} is an Operation Manager`)
        break
    default:
        console.log(`${uprightinstructor} may or may not work here.`)

        
}