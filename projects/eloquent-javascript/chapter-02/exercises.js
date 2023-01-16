
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

  var widthCount = 0;
  var heightCount = 0;
  var widthHashtag = "";
  var heightHashtag = "";

  while (widthCount < width) {
    widthHashtag += " " + "#";
    widthCount++;
  }

  while (heightHashtag < height) {
    heightHashtag += widthHashtag;
    console.log(heightHashtag);
    heightCount++;
  }



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
