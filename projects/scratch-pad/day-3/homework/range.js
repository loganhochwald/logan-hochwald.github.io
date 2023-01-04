// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    var returningArray = [];
    //Localized array to store the future integers

  if (start < end) {
//If first argument is greater than the second
    for (var i = start; i <= end; i++) {
    //The loop starts at the first integer of start, increments until it has passed through the value of the second integer
      returningArray.push(i);
      //Adds the integer denoted by variable i into the local empty array
    }
  } else {
    for (var i = start; i >= end; i--) {
    //If first argument is less than second, decrement from second integer to last integer
      returningArray.push(i);
      //Store into empty local array
    }
  }
  
  return returningArray;
  //Return the now full array

    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
