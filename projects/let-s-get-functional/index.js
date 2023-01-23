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
    var malesResult = males.length;
    return malesResult;
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
    var femalesResult = females;
    return femalesResult;

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
    //Initializing variable that stores the average of the balances

     let balanceArray = _.pluck(array, "balance");
     //Taking all of the properties that say "balance" and storing them into a new array
  
    balanceArray = _.map(balanceArray, function (item) {
      item = item.replace(",", "");
      //Replacing the commas with nothing so that they don't interfere with the number addition
      item = item.slice(1);
      //Removing the dollar sign in front of them
      item = Number(item);
      //Converting the string to a number

      return item;
      //Returning the now modified item which is being stored into a new string
    })
  
    for (let i = 0; i < balanceArray.length; i++) {
        //Iterating through the array containing the numbers as balances
      average += balanceArray[i];
      //Adding all of the numbers together
    }
    
    return average = average / balanceArray.length;
    //Returning the actual average
  
    
  };

var firstLetterCount = function (array, letter) {

    let nameArray = _.pluck(array, "name");
    //Creating new array containing only array data containing names

    nameArray = _.filter(nameArray, function(item) {
        //Filtering through the new array, if function returns truthy then it stores the array value into a new array
     
     if (item[0].toUpperCase() === letter.toUpperCase()) {
        //If the first letter that is capitalized is the same as the letter that is capitalized
       return true;
       //Return true
     }
     return false;
     //Returns false and does not store this array value
   } )
  
    return nameArray.length;
    //Returns the length of the nameArray, or how many names begin with that letter
    
  };

var friendFirstLetterCount = function (array, customer, letter) {

    let customerArray = _.filter(array, function(item) {
        //Filtering the array into a new array called customerArray

        if(item["name"] === customer) {
            //If the property "name" is the same as customer
          return true;
          //Return true and store it into the customerArray
        }
      return false;
      //Return false and doesn't store it into the array
    });
  
    let friendsDataArray = customerArray[0]["friends"];
    //The friends data is stored into this array by grabbing their info from the customer's object information at the friends property
  
    let friendsNames = _.pluck(friendsDataArray, "name");
    //Another array is made, this time taking the names under the name property
  
    friendsNames = _.filter(friendsNames, function(item) {
          //Filtering through the new array, if function returns truthy then it stores the array value into a new array
       
       if (item[0].toUpperCase() === letter.toUpperCase()) {
          //If the first letter that is capitalized is the same as the letter that is capitalized
         return true;
         //Return true
       }
       return false;
       //Returns false and does not store this array value
     } )
    
      return friendsNames.length;
      //Returning the length of the array, which is also counting how many names start with that letter
  
    
  };

var friendsCount;

var topThreeTags;

var genderCount = function (array) {

    let returnObject = {};
    //Returning an object telling the user what the gender count is
    returnObject.male = maleCount;
    //Property being made that stores the value of the function created earlier from maleCount
    returnObject.female = femaleCount;
    //Property being made that stores the value of the function created earlier from femaleCount
    var nbCount = function(array) {
      let nbs = _.filter(array, function (customer) {
        return customer.gender === "non-binary";
        //Creating an array that stores the gender when it's non-binary
      })
      var nbsResult = nbs.length;
      //That array length is stored in the variable
      return nbsResult;
      //The variable is returned
    }
    returnObject["non-binary"] = nbCount;
    //Property being made that stores the value of the function created earlier from nbCount
  
    return returnObject;
    //Returning the now modified object
  
    
  };

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
