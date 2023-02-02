/**
 * STRING MANIPULATION:
 * 0. Strings are text-based forms of data and have zero based indices. They are immutable in Javascript, meaning they can't be
 * changed after initialization, only manipulated. They are also an object of characters, not an array, so there are multiple
 * methods in which they can be manipulated. The manipulation falls into two types, one is with operands, and the other is by using
 * string methods, which are pre-defined by the interpreter. 
 * 1. Strings can be manipulated with operators, such as concatenation. A variable can equal the value of adding two strings
 * together, which is concatenation. This is slower than using a method because strings are object and need to be completely run
 * through by the program before they can be added. This is not an issue for smaller strings, but larger ones require a method to
 * have the most efficient run time. 
 * 2. There are many methods in which strings can be manipulated, but the most common ones will be discussed here. One method is
 * the faster version of using operators for concatenation, which is the .conat() method. This combines multiple strings into one
 * and can be stored if set equal to a variable. Extracting string parts can be done with .slice(), .substring(), or .substr().
 * Slice  and substring take two arguments, the start and end position, which indicate which part of the string is needed. The 
 * end position is not required and will take the rest of the string from the start position if left blank. The substr method takes
 * two arguments, the first being the first position to extract, and the other asking for the length of what is to be taken. The
 * replace() and replaceAll() methods takes two parameters, the first being the text that is to be replaced, and the other is what
 * is to be replaced. This does not change the string, it creates a new one from the original string value. The difference between
 * the two is that replace() replaces the first instance while replaceAll() replaces multiple instances. To change the string to
 * upper or lower case, .toUpperCase() and .toLowerCase() can be used. The .split() method turns the string into an array, and can
 * include a parameter that indicates how the string should be split up. If there is no parameter, then the entire string is placed
 * into the zero index of the array.
 */

// 1. String Manipulation with Operators //
//A variable is initialized with two strings being concatenated with an addition operator.
var aString = "hello" + "world";
console.log(aString);   //prints hello world

// 2. Sting Manipulation with Various Methods //
//Using the various methods discussed in the paragraph to show how each works. Two strings are declared and initialized to be
//manipulated.

var firstName = "logan";
var lastName = "hochwald";

//.concat()
var fullName = firstName.concat(lastName);
console.log (fullName); //prints logan hochwald

//.slice()
console.log(lastName.slice(2, 4)); //prints chw

//.replace()
console.log(firstName.replace("a", "e")); //prints logen

//.toUpperCase()
console.log(lastName.toUpperCase()); //prints HOCHWALD

//.split()
console.log(firstName.split("")); //prints [l, o, g, a, n];
