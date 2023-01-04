// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (givenValue) {
        //Function is returning a function that has a parameter of the inputted value
        return givenValue > base;
        //Returning if inputted value is greater than the base value
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (givenValue) {
        //Function is returning a function that has a parameter of the inputted value
        return givenValue < base;
        //Returning if inputted value is less than the base value
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (givenString) {
        //Returns a function with a parameter of an inputted string
        return givenString[0].toUpperCase() === startsWith.toUpperCase();
        //Returns a test to see if the first letter of givenString is equivalent to startsWith character
        //Both uppercased to be case sensitive
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (givenString) {
        //Returns a function with a parameter of an inputted string
        return givenString[givenString.length - 1].toUpperCase() === endsWith.toUpperCase();
        //Returns a test to see if the last letter of givenString is equivalent to startsWith character
        //Both uppercased to be case sensitive
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

    var output = [];
    //Creating new localized array to stored modified string values in inputted array
    for (var i = 0; i < strings.length; i++) {
        //For-loop interating through the inputted array
        output.push(modify(strings[i]));
        //Storing the modified array into the localized array
        }
    return output;
    //Returning the new array now filled with the modified array strings

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    var outputArray = [];
    //Create localized array to be filled with modified strings in strings array

    for (var i = 0; i < strings.length; i++) {
    //For-loop that iterates through the entire array named strings

        if (test(strings[i]) === true) {
        //If the current strings array index that has been modified by the given function gives an output of true, store it in the local array named outputArray
        outputArray.push(test(strings[i]));
        //Pushing the modified strings array index into the local array
        }
    }

    if (outputArray.length === strings.length) {
    //If all of the modified strings in the strings array were true, then they would all be stored into the new array. This means they would be the same length.
    //If they are the same length, then return true. Otherwise, return false.
        return true;
    } else {
        return false;
    }
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
