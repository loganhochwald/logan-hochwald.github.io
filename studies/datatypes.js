/**
 * DATA TYPES:
 * 0. Data types store specific kinds of data within them that can be manipulated by the program. They exist in three categories:
 * primitive/simple, complex, and special. Primitive contains number, string, and boolean. Complex contains arrays, objects, and 
 * functions. Special data types includes undefined and null. Primitive types can have their own types, such as number, which
 * also contains NaN, infinity, and -infinity. 
 * 1. Numbers are primitive data types and represent numbers that can be positive or negative, decimal places or not. The numbers
 * can also be written in exponent notation. They can undergo mathematical expressions and interact with one another as number types.
 * 2. String data types represent textual characters and are contained within quotation marks. They can exist as strings of 
 * text or can be small and contain one character. They can be compounded together and can be manipulated by functions.
 * 3. Boolean types are primitive and exist as only true or false. They can be used as an on/off switch but can also be 
 * the result of a comparison statement.
 * 4. Arrays  are complex data types and contain an ordered list of values and the order is determined by their index number, 
 * which reveals the position of the data values. The index number starts at 0, rather than an assumed number such as 1. 
 * This entire list is contained within one variable, and any data type may be stored within it. There are multiple ways of
 * creating arrays, but the easiest way is to create a pair of square brackets and use commas to seperate each value from one 
 * another. This indicates that they are in different indexes. Other ways include pre-defined functions such as .push(), which add
 * data to the end of an array.
 * 5. Objects are complex data types and they allow you to store collections of data that do not require a specific order. The
 * objects contain properties, which are key/value pairs. The key of the property is a string type and the value is whatever data
 * type that is needed. To create a collection object in the most simple way, curly brackets contain the name of the first 
 * property, a colon, and the value for the key/value pair. If multiple pairs are needed, then a comma after the value represents 
 * a divide between the multiple pairs. 
 * 6. Functions are complex data types that can be called and executes whatever is within its code block. Functions are objects, 
 * and may be assigned to a variable. They may also be placed wherever variables are used, such as within an array list. There are
 * numerous ways to declare functions, but they are generally written by using the keyword function, the function name, parenthesis,
 * and curly brackets to contain the block of code to be executed if the function is called. The parenthesis may be empty, but they
 * also can contain parameters, which are variables listed in the function declaration. Once the function has been declared, 
 * variables passed within the parenthesis are called arguments, and are used within the function's code block. To call a function,
 * the most basic way is to write the function's name with parenthesis after. They may or may not be filled depending on the 
 * declaration of function parameters. 
 * 7. Undefined is a special primitive data type of undefined, and it represents a declared variable that has not been assigned 
 * a value. It also exists if a function does not return a value. For example, if a function returns return, then undefined will 
 * be returned. Variables are initialized as undefined until they are initialized by the programmer. This will return falsey if 
 * resolved to a boolean value.
 * 8. Null is a primitive data type that is an object and can be assigned to a variable to represent that there is no value. In
 * arithmetic calculations, null is converted to 0. It is only assigned promatically, not by the Javascript interpreter. It will
 * return falsey if resolved to a boolean value.
 * 9. NaN stands for "Not a Number" and is a primitive data type that is the property of an object. If undefined is used in
 * arithmetic calculations, then NaN is the result. It may also occur if number conversion is not possible, arithmetic calculations
 * are done on imaginary numbers, and it's in an indeterminate form.
 * 10. Infinity and -infinity are numbers that represent positive and negative infinity, respectfully. It is used when the upper
 * or lower limit of a number are reached, either positive or negative 1.797693134862315E+308. They are primitive and simple 
 * property of objects.
 * 11. The main difference between primitive/simple and complex data types is that primitive contain a type and size of value, but
 * cannot perform operations, but complex contain other data types.
 * 12. Primitive values are passed to a function by copy, meaning the value of the variable is copied to another variable.
 * Conversely, complex values are passed by reference, meaning the parameter values are passed into the function. By reference
 * takes up less room because every instance of it being used, the first instance is being pointed to and every other instance
 * is mutated. By copy takes up more room and time because the value stored within in is copied into another variable, and 
 * whatever happens to the value within this new variable does not affect the original place that the value was.
 */

// 1. Number
//Declaring and initializing a number

var thisIsANumber = 27;

// 2. String
//Declaring and Initializing a String

var thisIsAString = "Hello, You.";

// 3. Boolean
//Declaring and Initializing a Boolean Value

var thisIsABoolean = true;

// 4. Array
//Declaring and Initializing an Array

var thisIsAnArray = ["String", 24, true, ["This", "is", "an", "array", "inside"], {whatIsThis: "an object"}];

// 5. Object
//Declaring and Initializing an Object

var thisIsAnObject = {
    key1: "This is the first key value pair",
    key2: 24,
    key3: true
};

// 6. Function
//Declaring and Initializing a Function that Logs the Arguments to the Console

function thisIsMyFunction(parameter1, parameter2) {
    console.log(parameter1, parameter2);        //Will print the arguments if they're passed
}

// 7. Undefined
//Asking a function to print an undefined variable results in undefined

var notDefined;

function printUndefined (notDefined) {
    return notDefined;      //undefined
}

// 8. Null
//Declaring and Initializing a variable will a null value then adding it to a number

var thisIsANull = null;

var anotherNumber = 9;

var theResultOfAdding = thisIsANull + anotherNumber;
console.log(theResultOfAdding); //prints 9

// 9. NaN
//Logging a string minus a number results in NaN

console.log("cookie monster" - 10); //prints NaN

// 10. Infinity/-Infinity
//The result is infinity for the first statement, negative infinity for the second

console.log(1 / 0); //prints Infinity
console.log(Math.log(0)); //prints -Infinity

// 11. Primitive vs. Complex
//Showing a simple data type declaration and initialization vs. a complex one

var simple = "I'm simple because I'm a string!";
var complex = ["I'm", 2, true];

// 12. By Copy vs. By Reference
//The first one is by copy because we are getting the third index of a string. The second is reference because we
//are getting the first index of an array.

var byCopy = "by copy";
console.log(byCopy[3]); //prints " "

var byReference = [1, 2, 3];
console.log(byReference[1]); //prints 2