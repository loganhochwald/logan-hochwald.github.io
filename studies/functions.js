/**
 * FUNCTIONS:
 * 0. A function is a block of code that can be re-used as many times as needed to save time and space within the program. This
 * allows us to avoid writing code multiple times. Functions are made of a name, parameter/arguments, a body, and a return statement.
 * Not every function requires a name, parameter/argument, or a return statement, but this is the general formula for what they can
 * include. 
 * 1. The two phases of using functions are the creation phase, which uses either function declaration or function expressions, and
 * the execution phase, where the function is called at a later point to be executed with the arguments within them or to perform
 * their action on a need-basis. 
 * 2. A function's parameters are the variables that represent what can be inserted into the function when it's called. They can
 * be called anything and used within the code block. The arguments are the values that are actually inserted when the function is
 * called and they contain the data that is to be manipulated by the block of code. 
 * 3. The syntax for a named function is the keyword function, a name for the function, an optional parameter within a pair of 
 * parenthesis, and curly brackets to contain the block of code.
 * 4. Function expression declares a variable and then initializes it to the keyword function, an optional parameter within a pair 
 * of parenthesis, and a pair of curly brackets to contain the code block. The function is the variable value.
 * 5. Functions do not require arguments, even if they were created with parameters. They are optional, but if not included, then
 * the function will return a value of undefined. It is possible to define a default value for the parameters if needed. Return
 * statements are also optional, and it is possible to have an empty body for a function (this would be useless, though). If
 * there is one included, then the function will exit the code block even if there is code below the return statement. The return
 * statement naturally returns undefined, but if a value is included with the return statement, then the function will output that
 * value.
 * 6. Scope is important with functions because they can access parent/global scopes as well as variables within their own scope.
 * It is important to note though that not every scope outside of the function can access the locally created variable. When a 
 * variable has been declared within the function, it will not be accessible outside of the function. If this variable is needed
 * outside, then it must be declared globally and the function may alter it within the code block because it has access to that
 * variable.
 * 7. Closures are functions with access to the parent scope even after the parent function has closed, meaning it uses variables
 * from a parent scope. This keeps variables active in returned functions and even functions within functions. A function can be
 * placed in a function parameter as well as being returned, so it can be important to be able to continually use those variables
 * within the function.
 */

// 1. Two Phases //
//First Phase is the Definition
function tacoTime(isBurrito) {
    if (isBurrito === true) {
        return "It's not taco time :(";
    }
    return "IT'S TACO TIME";
}
//Second Phase is the Execution
tacoTime(true); //Returns "It's not taco time :("

// 2. Parameter vs. Argument //
//The parameter is within the parenthesis and helps define what will be done with the argument
function returnInput (parameter) {
    return parameter;
}
//The argument is then filled in, which is the string within the parenthesis
returnInput("I wish it had been taco time");    //Function returns the argument

// 3. Named Function Syntax //
//Defining a named function
function nameOfFunction () {
    return "This function is named";    //Returns the string
}

// 4. Function Expressions Syntax //
//Defining a function expression where it's stored in a variable
var name = function (parameter) {
    return parameter;               //Returns the argument
}

// 5. Optional Parameter and Return Statement //
//One argument is not inserted in this function
function returnSum (x, y) {
    return x + y;
}
returnSum(12);  //Returns NaN because the y argument was not passed

//No return statement in this function
function noReturn(parameter) {
    parameter = parameter;
}
noReturn("hello");  //Returns undefined because nothing was returned/outputted

// 6. Scope //
//The function can access the global variable because it's in the global scope
var globalVariable = "global variable";

function thisIsAFunction () {
    let localScope = "local";
    console.log(globalVariable);    //Prints "global variable"
}

console.log(localScope);    //Throws a Reference Error that localScope is not defined because it was declared inside of the function

// 7. Closure //
//A function inside of a function, the inner function has access to the outer function's variable called tacoCount

function getTacoCount () {
    let tacoCount = 0;
    return function insideTacoScheme () {
        return tacoCount += 5;
    }
}

let overallTacos = getTacoCount();

console.log(overallTacos());    //Prints 5
console.log(overallTacos());    //Prints 10, had access to the tacoCount even though it had been returned already