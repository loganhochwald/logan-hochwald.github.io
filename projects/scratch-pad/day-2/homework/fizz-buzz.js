// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    var i = 1;
    //Creating localized variable for the while counter
  
    while (i <= 100) {
    //While loops runs until 101 is reached by i
  
      if (i % 3 === 0 && i % 5 === 0) {
        //If i has a zero remainder when it is divisible by both 3 and 5, print FizzBuzz
        console.log("FizzBuzz");
        //Print
      } else if (i % 3 === 0) {
        //If i has zero remainder with only 3, print Fizz
        console.log("Fizz");
        //Print
      } else if (i % 5 === 0) {
        //If i is divisible by 5, print Buzz
        console.log("Buzz");
        //Print
      } else {
        //If i isn't divisible by any of the numbers, then just print i to the console
        console.log(i);
        //Print
      }
      i++;
      //Counter that runs while loop through next iteration
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}