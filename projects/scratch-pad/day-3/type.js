// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    if (Array.isArray(value) === true) {
    //If the array test is true, return true.
        return true;
    } else {
    //Otherwise, return false
        return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    if (typeof(value) == "object" && Array.isArray(value) !== true && (value instanceof Date) !== true && value !== null) {
    //If it isn't an array, date, or null but is an object, then collection type
        return true;
        //Returns true if collection type
    } else {
        return false;
        //Otherwise returns false
    }
    

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //

    if (typeof(value) == "object" && (value instanceof Date) !== true && value !== null || Array.isArray(value) == true) {
    //If an object and not a date and null, OR is an array, return true
        return true;
        //Returning statement
    } else {
        return false;
        //Otherwise return false
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    console.log(value);

    if (Array.isArray(value) == true) {
        //If array
        return "array";
    } else if (value == null) {
        //If null
        return "null";
    } else if (typeof(value) == "number") {
        //If number
        return "number";
    } else if (value instanceof Date == true) {
        //If date
        return "date";
    } else if (typeof(value) == "string") {
        //If string
        return "string";
    }else {
        //Otherwise a function within this test
        return "function";
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
