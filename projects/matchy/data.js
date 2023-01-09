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

animal.species = "Sea Lion";
animal["name"] = "Carl";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'bark';
noises.push('flop');
noises.unshift('arr');
noises[noises.length] = 'sneeze';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;
animal.noises.push('couch');
console.log(animal);

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

animals.push(animal);

console.log(animals);

var duck = {
  species: "Duck",
  name: "Jerome",
  noises: ["quack", "honk", "sneeze", "whoosh"]
};

animals.push(duck);

console.log(animals);

var elephant = {
  species: "Elephant",
  name: "Ellie",
  noises: ["pheeeew", "sneeze"]
};

var mockingBird = {
  species: "Mocking Bird",
  name: "Rock",
  noises: ["ahhhhhh", "burp"]
};

animals.push(elephant, mockingBird);

console.log(animals, animals.length);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = [];
//We want a list so chose array to store data

function getRandom (array) {

  return Math.random() * array.length;

}

friends.push(animals[getRandom(animals)]);

console.log(getRandom(animals));
console.log(friends);

animals[elephant.friends] = friends;

console.log(elephant);

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