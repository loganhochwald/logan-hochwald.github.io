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
    });

    return males.length;
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

var oldestCustomer; //reduce //use the reduce method with NO seed

var youngestCustomer; //reduce //use the reduce method with NO seed

var averageBalance;

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
