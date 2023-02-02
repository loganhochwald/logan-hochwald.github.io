/**
 * OPERATORS:
 * 0. Operators are used to manipulate a certain value, also known as an operand. These operands have arithmetic and logical 
 * computations performed on them by operators. There are multiple different types: assignment operators, arithmetic operators, 
 * comparison operators, and logical operators. Each have a different function, but they all are used to manipulate and apply
 * value to variables. 
 * 1. Assignment operators assign values to variables, where the left side has the variable, then the operators, then everything 
 * on the right is the value in which the variable is being assigned. There is a simple type, which requires the variable and value
 * to be the same type with a = in between them, and compound, which has arithmetic symbols such as += attached to it. These perform
 * the arithmetic function and then apply that new value to the variable.
 * 2. Arithmetic operators perform addition (+), subtraction (-), multiplication (*), and division (/). The modulus operator (%)
 * returns the remainder of the division of two numbers.
 * 3. Comparison operators compare numbers and strings then return a boolean value. The == compares equal to value, the === compares
 * strictly equal to (value and type), !== and != are opposite of those, and the arithmetic comparisons of greater/less than (> and
 * <), as well as greater/less than or equal to (>=, <=).
 * 4. Logical operators are used in logic statements comparing values and variables. And (&&), or (||), and not (!) are the three 
 * that are used. For and and or, the first expression is before the operator, and the second expression is after. And includes the
 * two expressions and both must be true for the condition to resolve to true, while or only needs one condition to be true to resolve
 * to true. Not is used in front of an expression and resolves to true if the expression normally resolves to false. This is useful
 * in conditional statements for loops, for example.
 * 5. Unary operators require only one operand to perform the operation. This includes the arithmethic operators, not logical operator, 
 * as well as increment/decrement. 
 * 6. Ternary operators are one lines of code that are to replace else-if or switch statements; they are used to save time and space
 * within the program. The ? operator is used in between the conditional statement and the true execution : false execution as shown.
 * The syntax is: variable = Expression 1 (conditional statement) ? Expression 2 (executed if true) : Expression 3 (executed if false)
 */

// 1. Assignment Operator //
//The = sign is the assignment operator and the value of 24 is being applied to a variable that is a number type.

var numberVariable = 24;

// 2. Arithmetic Operator //
//The + sign is the addition operator and is adding 25 and 25 so that the additionVariable stores a value of 50.

var additionVariable = 25 + 25;

// 3. Logical Operator //
// An if-statement is being created and can only run if both statements are true using the and operator &&
var loganPersonality1 = "cool";
var loganPersonality2 = "awesome";

if (loganPersonality1 === "cool" && loganPersonality2 === "awesome") {
    console.log("Logan is obviously the coolest");
} else {
    console.log("Logan is still the coolest, someone just didn't assign the variables correctly.");
}   //prints "Logan is obviously the coolest" because both expressions are true

// 4. Unary Operator //
//Initializing counter, then another variable of otherCounter has the value of an incremented counter, or 1
var counter = 0;

var otherCounter = counter++; //otherCounter = counter + 1 = 0 + 1 = 1

// 5. Ternary Operator //
//Testing if the value of thatVariable is less than 0, if it is then "It's less than" is logged to the console, otherwise
//"It's greater than maybe" is logged to the console

var thatVariable = -1;

var result = (thatVariable < -1) ? console.log("It's less than") : console.log("It's greater than maybe");
//Prints "It's less than"
