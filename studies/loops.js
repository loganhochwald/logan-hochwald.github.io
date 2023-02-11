/**
 * LOOPS:
 * 0. Loops perform a repeated code block based on a conditional statement that allows the loop to run as long as 
 * the condition remains true. Loops can be pre-defined to run a certain amount of times or can run until the condition 
 * is no longer true.
 * 1. While loops have the condition at the top of the code block and it is tested before the block of code is run. As long
 * as the condition remains true, the code will be run. It is important to edit the variable being tested within the condition
 * because otherwise the loop will run forever, also known as an infinite loop. For loops do almost the same thing as a while loop,
 * but it contains three expressions: the first one is executed once before the code block, expression two defines the conditions
 * for executing the block of code, and the third expression is executed every time after the code block has been executed. The for
 * in loop is very similar to the others, but it is used to loop through the properties of a collections object or array. This is
 * a more simple method that does not require three expressions, rather, one inside of the parenthesis.
 * 2. To loop any number of times, forward counting up to some limit, or backward counting down to zero is done using a for loop.
 * The first expression contains a variable to be declared that will be the first value that is read. If counting up, then 0, and
 * if counting down, then the number chosen to count down from. The second expression contains the condition that allows the loop
 * to continue looping; the counting up requires the varianle value to be less than or equal to the limit and counting down requires
 * the value of the variable to be greater than or equal to zero. Thirdly, the last expression increments the value of the variable
 * by one for counting up, and decrements by one if counting down.
 * 3. To loop over an array forwards, any of the loops can work, but the quickest would be to use a for-in loop. The variable that
 * represents the index being read is declared, and the array is included in the condition. It automatically runs through the array
 * in a forward direction, and the block of code would log to the console every value of the array. To go backwards, a for loop would
 * be useful where the first expression has the variable value set to the length of the array - 1 to indicate index, not length, of
 * the array. The second expression would run as long as that value is greater than or equal to 0, and the last expression decrements
 * the variable's value. The code block would then contain the console.log() function on the arrayName[variable] and it would be printed
 * until the last value was printed.
 * 4. To loop over an object, using a for-in loop would be quickest. Just as done for the array, the key/value pairs can be printed
 * in an increasing order. To print the key, only the variable name would be required. To print the value, the objectName[property]
 * would be required to go deeper into the object's values.
 */

// 1. While, for, and for-in loops
//While loop example, counter needs to be initialized to be used in the while loop

var counter = 0;

while (counter < 2) {
    console.log(counter); //prints 0 1
    counter ++;             //Increments counter by 1     
}

//For-loop breakdown

for (let i = 0; i <= 2; i++) {
    console.log("weeeeee"); //Prints weeeeeeweeeeeeweeeeee
}
//let i = 0 is the start statement
//i <= 2 is the stop condition
//i++ is the update statement

// 2. Loop Forwards and Backwards
//Until is initialized, the first loop is forwards and the second loop is backwards

var until = 10;

for (var i = 0; i <= 10; i++) {
    console.log(i);                 //prints 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 
}

for (var i = until; i >= 0; i--) {
    console.log(i);                 //prints 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
}

// 3. Loop Over an Array Forwards and Backwards
//Initializing the array, then looping forwards then backwards

var loopingArray = [0, 1, 2];

for (var i in loopingArray) {
    console.log(i);             //prints 0, 1, 2
}

for (var i = loopingArray.length - 1; i >= 0; i--) {
    console.log(i);            //prints 2, 1, 0
}

// 4. Loop Over an Object
//Object is initialized, then for-in loop is used to loop over an object

var loopingObject = {
    key1: "key1 value",
    key2: 2
};

for (var key in loopingObject) {
    console.log(key);                     //prints key1, key2
    console.log(loopingObject[key]);    //prints "key1 value", 2
}