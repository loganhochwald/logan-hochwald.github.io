/**
 * CONTROL FLOW: 
 * 0. The control flow is the order in which code is run, which is from top to bottom, unless conditional structures are
 * written; they alter the order in which code is executed if the specified conditions are met. Conditional structures include
 * if, else, else-if, and switch statements.
 * 1. The if statement conditionally executes a block of code if a specified condition is true; the block of code will not 
 * run if this condition is not met. 
 * 2. The else statement is specified to be executed if the condition within the if statement is false. If the condition is true,
 * then this block of code will not run.
 * 3. The else-if introduces a new condition that is tested if the conditions before it are false and that block of code is run if the condition
 * is met. This can be stacked for as many else-if statements that are needed.
 * 4. Switch statements evaluate an expression's value to case values. If there is a match, the code block 
 * tied to the case is executed. Adding the keyword "break" at the end of the code block informs the switch statement
 * to be exited. Otherwise, the other code blocks are executed as well. If there are no matches, then an optional 
 * default code block is executed. 
 */

// 1. If Statement //
//True will be returned because the condition is true.
if (1 === 1) {
    return true;
}

// 2. Else Statement //
//The time of day is not in the morning, so the condition is false and the else statement will run. The user will be informed
//that it is not mornining time.

var time = 15;

if (time < 12) {
    var message = "Good Morning!";
} else {
    var message = "It's Not the Morning!";
}

// 3. Else-If Statement //
//The first if statement is false, but the else if statement contains a true condition, and that block of code will run.

if (4 !== 4) {
    console.log("This isn't possible");
} else if (4 === 4) {
    console.log("This is definitely true.");
} else {
    console.log("This shouldn't be hit.");
}

// 4. Switch Statement //
//The evaluate variable is being compared to the case values, if they match, then the letKnown variable is updated with a new 
//string.
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