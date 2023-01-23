// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("underbar");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./logan-hochwald.github.io/projects/let-s-get-functional
 *
 */


//This project is a lot like underpants and you'll be using the functions that you were working with in underpants

//No index file to preview if you're right or wrong, so run line 19 to see if you're passing. Make sure you do this:

//To back up a directory, type cd ..

//Make sure you're backed up until you hit the gitpod /workspace $

//Then copy code above and paste/press enter so that it runs through the tests

var maleCount = function(array) {

    let males = _.filter(array, function (customer){
    
        return customer.gender === "male";
        //Returning the gender of the customer as male if the analyzed customer parameter is male into males variable
    });

    return males.length;
    //Returning the length of the males variable
};

var femaleCount = function(array) {

let females = _.reduce(array, function(accumulator, current, index){
    //accumulator = 0 | current = {gender: ??? }

    //determine if current customer is female
    if (current.gender === "female") {
        accumulator += 1; //accumulator = accumulator + 1
    }
    return accumulator;
}, 0);

    return females;

};

/*
//Invoke reduce
    //If seed value is given to us, result is assigned to the seed
    //For-loop:
        //0
            //result = func{currentResult, currentItem, currentIndex}

//Returned is the result value


*/

var oldestCustomer = function(array) {

let nameOfOldest = "";
//Initializing variable to be filled with the name of the oldest customer

_.reduce(array, function(accumulator, current) {
    //Calling reduce function

    if (current.age > accumulator) {
        //If the current array's age is greater than the value of accumulator
        accumulator = current.age;
        //Accumulator becomes the age that is the oldest, is written over if the oldest age changes
        nameOfOldest = current.name;
        //The name of the person with the age in accumulator is stored here but written over if accumulator changes
    }
    return accumulator;
    //Reduce returns the value of the oldest age

}, 0);
    return nameOfOldest;
    //The main function returns the name of the oldest person

}; 

var youngestCustomer = function(array) {
    let storeYoungestName = "";
    //Empty variable to store the name of the youngest person

_.reduce(array, function(accumulator, current) {

   if(current.age <= accumulator) {
    //If the current age is less than or equal to the accumulator's current stored age (previous age)
    storeYoungestName = current.name;
    //The name of the current person is stored into this variable
   }

   return current.age;
   //To be used in the accumulator to compare next time

}, array[0]["age"]);
//Value of accumulator starts at the zero index, not defaulted first
    
    return storeYoungestName;
    //Returns the variable that is storing the string of the youngest name

}; 

var averageBalance = function (array) {
    let average = 0;
     let balanceArray = _.pluck(array, "balance");
  
    balanceArray = _.map(balanceArray, function (item) {
      item = item.replace(",", "");
      item = item.slice(1);
      item = Number(item);
      return item;
    })
  
    for (let i = 0; i < balanceArray.length; i++) {
      average += balanceArray[i];
    }
    
    return average = average / balanceArray.length;
  
    
  };

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
