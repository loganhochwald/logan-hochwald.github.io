// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
    for (var i = 0; i < array.length; i++) {
      //Runs through the array's full length and prints each index denoted by i
      console.log(array[i]);
    }
  
  return;
  //Return statement
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = array.length - 1; i >= 0; i--) {
    //Begins running through the last index of the array until it runs through 0
    console.log(array[i]);
    //Prints the array index denoted by i in decreasing order
  }

return;
  //Return statement for function
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  var array = [];
  //Creating localized array to store the inputted object keys into

  for (var key in object) {
    //For loop that runs through keys in the inputted object
    array.push(key);
    //Pushes each key into the array by adding them to the end
  }
  
  return array;
  //Returns the array filled with the object keys
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  var array = [];
  //Creating localized array

  for (var key in object) {
    //Runs through each key of the inputted object
     console.log(key);
     //Logs each key to the console
  }
  
  return;
  //Return statement for the function
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  var array = [];
  //Creating localized array to store object values into it
  for (var key in object) {
    //Loops through the object
    array.push(object[key]);
    //Adds the object's key's value into the previously created array
  }
  
  return array;
  //Returns the newly filled array
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) {
    //Loops through the object
    console.log(object[key]);
    //Prints the object's key's value 
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  var count = 0;
  //Creating localized variable count that holds the value of zero.

  for (var key in object) {
    //Loops through object keys
    count++;
    //Adds 1 to count every iteration of the loop
  }
  return count;
  //Returns count, which now holds the value of the number of pairs from the for loop
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var array = [];
  //Creating local empty array to be used later

  for (var key in object) {
    //Loops through keys in object
    array.push(object[key]);
    //Adds the key to the end of the array with each iteration
  }

  for (var i = array.length - 1; i >= 0; i--) {
    //For loop that iterates through the array beginning with the last index and ends once it's run through zero
    console.log(array[i]);
    //Prints the array at the index indicated by i
  }
  return;
  //Return statement for function
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
