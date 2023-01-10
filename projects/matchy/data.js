/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
//Declaring empty animal object

animal.species = "Sea Lion";
//New key in object named species with data inserted
animal["name"] = "Carl";
//New key in object named name with data inserted
animal.noises = [];
//New key in object named noises which is an empty array
console.log(animal);
//Logging the animals object to the console

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
//Creating empty array called noises
noises[0] = 'bark';
//At first position in array put "bark"
noises.push('flop');
//Now in last position is "flop" in array
noises.unshift('arr');
//Adding "arr" to beginning of array
noises[noises.length] = 'sneeze';
//Adding sneeze to the end of the array
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
//Logging new data to console to confirm that it worked

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
//At the noises key in the animal object, inserting the previously created noises array
animal.noises.push('cough');
//Inserting "cough" to the end of the animal array
console.log(animal);
//Logging the animal array to the console

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *  Dot and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *  Dot and bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
//Declaring an empty array named animals

animals.push(animal);
//Adding the animal array to the end of the new animals array

console.log(animals);
//Logging the animals array to the console

var duck = {
  species: "Duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "whoosh"]
};
//Creating a new object named duck

animals.push(duck);
//Adding duck object to end of animals array

console.log(animals);
//Logging animals array to console

var elephant = {
  species: "Elephant",
  name: "Ellie",
  noises: ["pheeeew", "sneeze"]
};
//Elephant is a new object

var mockingBird = {
  species: "Mocking Bird",
  name: "Rock",
  noises: ["ahhhhhh", "burp"]
};
//Mockingbird is a new object

animals.push(elephant, mockingBird);
//Adding elephant and mockingbird object to end of the animals array

console.log(animals, animals.length);
//Logging animals array and the length to the console



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
//We want a list so chose array to store data

function getRandom (arr) {
  return Math.floor(Math.random() * arr.length);
  //Math.floor() is rounding the product of the length and Math.random() which returns a random number
}
friends.push(animals[getRandom(animals)].name);
//Adding a random animals name by using a random index to the empty friends array

console.log(friends)
//Logging the friends array to the console

animals[2].friends = friends;
//Friends list is being added as a property to the animal object at index 2 in the animals array
//The above sentence makes sense if you read it slowly, you got this.

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}