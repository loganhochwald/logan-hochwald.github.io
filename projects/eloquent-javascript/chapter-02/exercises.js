
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(rows) { //Should take in a parameter representing rows
  var count = 0;
  //Declared variable to be used as the count for the while loop
  var hashtag = "";
  //Variable of string type to be used as the output for the triangle

  while(count < rows) {
    //Loops until the count is equal to rows
    hashtag += "#";
    //Add another hashtag to the hashtag string
    console.log(hashtag);
    //Log the string data stored in hashtag after it has been modified
    count++;
    //Increment count so that the while loop eventually stops
  }

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {

  for (var i = 1; i <= 15; i++) {

    if(i % 3 === 0 && i % 5 === 0) {
      //If the remainder of i divided by 3 and 5 are both zero, log "fizzbuzz" to console
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      //If i is divisible by 3, log "fizz" to console
      console.log("fizz");
    } else if (i % 5 === 0) {
      //If i is divisible by 5, log "buzz" to the console
      console.log("buzz");
    } else {
      //Otherwise, log the value of i to the console
      console.log(i);
    }
  }
  
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(width, height) {

var board = "";
//Our board is being stored here

for (var i = 0; i < width; i++) {
  //For-loop for height, determines how many times width runs
  if (i % 2 === 0) {
    //If we're on an even row
  for (var x = 1; x <= width; x++) {
    //For-loop for width
    if (x % 2 === 0) {
      //If even
      board += "#";
      //Add a # to the board variable
    } else {
      //If odd
      board += " ";
      //Add a space to the board variable
    }
  }
  board += "\n";
  //Add a newline character after the width is done being made
  } else {
    //We're in an odd row
    for (var x = 1; x <= width; x++) {
      //For-loop for width
      if (!(x % 2 === 0)) {
        //If odd
        board += "#";
        //Add # to the board variable
      } else {
        //If even
        board += " ";
        //Add space to the board variable
      }
    }
    board += "\n";
    //After each iteration of height, add a newline character to start a new board line
  }

}
console.log(board);
//Logs the finished board to the console

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
