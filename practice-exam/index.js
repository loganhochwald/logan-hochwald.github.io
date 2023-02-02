// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function (greeting, location, time) {
    //Concatting the string variables with spaces in between
    console.log(greeting.concat(" ", location, " ", time));
    return;
}



// 2.
var contestants = function (array) {
    //Returning the length of the array
    return array.length;
}



// 3.
var filterSpecies = dogs.filter(dog => dog.species === "dog");
//Naming each array index as dog and only returning the dog if the species is storing "dog"
 


// 4. 
var dogContestants = [...filterSpecies];
//Spread operator copied the entire contents of the filterSpecies array


// 5. 
var dogsWithClasses = dogContestants.map(dog => {
    //Mapping this code block to every array index's object and calling each one dog
    
    if (dog.weight >= 0 && dog.weight <= 10) {
        //If the dog's weight is 0 - 10
        return {class: "red",
    ...dog}
    //Returning the new key class with value red as well as the rest of the object
    }
    if (dog.weight >= 11 && dog.weight <= 20) {
        //If the dog's weight is 11 - 20
        return {class: "yellow",
        ...dog}
        //Returning the new key class with value yellow as well as the rest of the object
    }
    if (dog.weight >= 21) {
        //If the dog's weight is 21 and over
        return {class: "green",
        ...dog}
        //Returning the new key class with value green as well as the rest of the object
    }
    
})
    


// 6.
var firstInClass = function (topDogs, newObj = {}) {
    //base
    if (topDogs.length === 0) {
        //If there's no more array indexes to iterate through
        return newObj;
        //Return the object that has been filled
    }
    
    //recursion
    //Have to iterate through each index, and at each index push the properties keys into object
    Object.assign(newObj, topDogs[0]);
    //Assigning the object properties in the 0 index of topDogs array into the newObj
    return firstInClass(topDogs.slice(1), newObj);
    //Returning the function again but slicing the 0 index off of the array and the now modified newObj
}



// 7.
var votes = dogs.reduce((accumulator, animal) => {
    accumulator += animal.votes;
    //Adding the votes number to the accumulator
    return accumulator;
    //Returning the accumulator value to be added to for the next iteration
}, 0)
//Starting the seed as 0 for the accumulator