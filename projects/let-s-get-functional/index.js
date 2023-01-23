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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var maleCount = function(array) {

    let males = _.filter(array, function (customer){
      //Filtering through the array argument, each index is called customer
    
        return customer.gender === "male";
        //Returning the gender of the customer as male if the analyzed customer parameter is "male" string into males variable
    });
    
    return males.length;
    //Returning the length of the males array to signify how many males there are
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var femaleCount = function(array) {

let females = _.reduce(array, function(accumulator, current){
    //accumulator = 0 | current = {gender: ??? }

    //determine if current customer is female
    if (current.gender === "female") {
        accumulator += 1; //accumulator = accumulator + 1
    }
    return accumulator;
    //Returns the potentially modified value of accumulator to be compared next iteration
}, 0);
  
    return females;
    //Return the number of females (the final value of accumulator)
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
//Value of accumulator starts at the zero index of age so we aren't comparing to the first index which would be an entire customer
    
    return storeYoungestName;
    //Returns the variable that is storing the string of the youngest name

}; 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var friendsCount = function(array,name) {
  let customerNames = [];
  //Initializing array to store the customer names that contain the name argument within their friends list

  for(let i = 0; i < array.length; i++) {
    //Iterating through the array argument
    for(let j = 0; j < array[i]["friends"].length; j++) {
      //Iterating through the length of the friends array in each object of the array
      if(array[i]["friends"][j]["name"] === name) {
        //If the friend name is equal to the name argument
      customerNames.push(array[i]["name"]);
      //Push the name of the customer into the customerNames array (not the friend name)
    }
    }
    
  }
  return customerNames;
  //Return the now modified customerNames array
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var topThreeTags = function (array) {

  let arrayOfTagsArray = _.pluck(array, "tags");
  //Filling array with the tags property

  let arrayCombinedTags = _.reduce(arrayOfTagsArray, function(accumulator, current) {
    return accumulator.concat(current);
    //Combines the array in the accumulator to the current array using .concat
  })
  //Creating one array so that it may be iterated through

  let objectOfThings = {};
  //Object that stores the name and frequency of array item as a key/value pair

  _.map(arrayCombinedTags, function(item) {
    if (!objectOfThings.hasOwnProperty(item)) {
      //If the object doesn't have the array item as a key name, then the key of that array name is created and value is set to 1
      return objectOfThings[item] = 1;
    }
    return objectOfThings[item]++;
    //If it does have the array value as a key in the object, add 1 to the value (should be 2 or more)
  })
  
  let mostCommonArray = [];
  //Array to store the most common tags

  for (var key in objectOfThings) {
    //Iterating through the object containing the name and frequency of each tag
    if (objectOfThings[key] > 2) {
      //If the value of the key is greater than 2
      mostCommonArray.push(key);
      //Push that key name to the array that stores the most common names
    }
  }
  return mostCommonArray;
  //Return the array containing the top three tags

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var genderCount = function (array) {

  let malesArray = [];
  let femalesArray = [];
  let nbsArray = [];
  //Declaring an array for each gender

  _.map(array, function(customer) {
    //Running through the entire array
    
    if (customer.gender === "male") {
      malesArray.push(customer.gender);
      //If the key value is male, push that value into malesArray
    } else if (customer.gender === "female") {
      femalesArray.push(customer.gender);
      //If the key value is female, push that value into femalesArray
    } else if (customer.gender === "non-binary") {
      nbsArray.push(customer.gender);
      //If the key value is nb, push that value into nbsArray
    }
    else return false;
    //Otherwise don't push anything

  });
  let objectOfData = {};
  //Declaring empty object to be written over

  objectOfData["male"] = malesArray.length;
  objectOfData["female"] = femalesArray.length;
  objectOfData["non-binary"] = nbsArray.length;
  //Setting key/value pairs as the gender: length of array

  return objectOfData;
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
