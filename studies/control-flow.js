
/**
 * IF:
 * 0. To conditionally execute a block of code if a specified condition is true, the if statement
 * can be used. The block of code will not run if this condition is not met. 
 * 1. To create an if statement, we use the keyword if, followed by a pair of parenthesis that contain a conditional
 * statement to be evaluated. A pair of curly brackets follow the parenthesis and condition the block of code to be run
 * if the condition is met.
 * 2. They must be written with the appropriate syntax and if the condition resolves to a boolean true, then the code block
 * is executed. Otherwise, the condition resolves to false and is ignored.
 */

// 1. Condition is Met //
//True will be returned
if (1 === 1) {
    return true;
}

// 2. Condition is Not Met //
//The variable theTruth will never be logged to the console because this statement is not true.
if (1 === 2) {
    let theTruth = "false";
    console.log(theTruth);
}

/**
 * ELSE:
 * 0. A block of code is specified to be executed if the condition within the if statement is false. If the condition is true,
 * then this block of code will not run.
 * 1. To create the else statement, an if statement must be written. After the second curly bracket, "else" is written with 
 * another pair of curly brackets that contain the block of code to be run if the condition is false.
 * 2. This is paired with an if statement and will either run or not run depending on the condition.
 */

//1. Condition is Met //
//The time of day is not in the morning, so the condition is false and the else statement will run. The user will be informed
//that it is not mornining time.

var time = 15;

if (time < 12) {
    var message = "Good Morning!";
} else {
    var message = "It's Not the Morning!";
}

//2. Condition is Not Met //
//There are less than 40 coffees, so the if statement is run because the condition is true, and the else statement will not
//be met.

let coffees = 28;

if (coffees < 40) {
    var message = "Keep Buying More!";
}
else {
    var message = "You Have Enough; Go Home!";
}

/**
 * ELSE-IF:
 * 0. A new condition is specified if the conditions before it are false and that block of code is run if the condition
 * is met. This can be stacked for as many else-if statements that are needed. Else statements are not required at the end.
 * 1. To create an else-if statement, the if statement is declared, and instead of an "else" with curly brackets, "else if"
 * is written followed by a pair of parenthesis to contain another condition. More else if statements can be written after the
 * curly brackets of the one before, or can be finished with an else statement.
 * 2. The amount of else if statements depends on how many are needed to check the conditions, but one can suffice.
 */

// 1. Condition is Met //
//The first if statement is false, but the else if statement contains a true condition, and that block of code will run.

if (4 !== 4) {
    console.log("This isn't possible");
} else if (4 === 4) {
    console.log("This is definitely true.");
} else {
    console.log("This shouldn't be hit.");
}

// 2. Condition is Not Met //
//The if statement is true, therefore the other statements do not have their block of code executed.

if (true === true) {
    var theTruth = true;
} else if (false === true) {
    console.log("Sorry this isn't going to be executed.");
}

/**
 * SWITCH: 
 * 0. This statement evaluates an expression's value to case values. If there is a match, the code block 
 * tied to the case is executed. Adding the keyword "break" at the end of the code block informs the switch statement
 * to be exited. Otherwise, the other code blocks are executed as well. If there are no matches, then an optional 
 * default code block is executed. 
 * 1. The switch statement begins with the keyword switch followed by a pair of parenthesis that contain what is to be
 * evaluated by the switch block. Curly brackets contain the keyword "case" followed by the value, and the code blocks are 
 * added after. There can be as many cases as needed.
 * 2. Default statements can be added wherever, but they will result in breaking the switch code block. If break is not added,
 * then the other cases' code blocks will be executed until they are broken or the end is reached. 
 */

// 1. With Default Statement //
//The evaluate variable is being compared to the case values, if they match, then the letKnown variable is updated with a new string.
var evaluate = 2;
var letKnown = "";

switch (evaluate) {
    case 0:
        letKnown = "zero";
        break;
    case 1:
        letKnown = "one";
        break;
    case 2:
        letKnown = "two";
        break;
    default:
        console.log("We don't have that number.");
}

// 2. Avoiding "Break" for A Case //
//If the value is 2 or 1, they both will result in letKnown becoming "It isn't zero". No break statement needed at the end.
switch (evaluate) {
    case 0:
        letKnown = "zero";
        break;
    case 2:
    case 1:
        letKnown = "It isn't zero";
}