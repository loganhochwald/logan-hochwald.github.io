//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

const { toUpper } = require("lodash");

function objectValues(object) {
    var array = [];
    for(i in object) {
        array.push(object[i]);
    }
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

    var string = "";
    //Declaring an empty string to be used for later

    for(i in object) {
    //For-loop running through the object keys
        string += i.toString() + " ";
        //Every iteration, add the key that is turned into a string to string, but also add a space at the end
    }
    
    string = string.slice(0, -1);
    //Removes the extra space at the end of the string
    
    return string;
    //Returns the string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {

    var string = "";
    //Declaring empty string to be used later

    for(i in object) {
    //For-loop iterating through the keys of the object
        if (typeof object[i] === "string") {
        //If the object's key contains a string
       string += object[i]+ " ";
       //Add the key then add a space after it for each iteration
        }
    }
    string = string.slice(0, -1);
    //Remove the last extra space that isn't needed
    
    return string;
    //Return the now modified string
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {

    if (Array.isArray(collection) === true) {
    //If it is an array
        return "array";
    } else if (typeof collection === "object") {
    //If it is an object (ignoring array because this would be skipped if it was)
        return "object";
    } else {
        //Otherwise just return
        return;
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    return string.substring(0, 1).toUpperCase() + string.substring(1);
    //First substring removes first letter, capitalizes it, and then adds it back to the rest of the string minus the first letter

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    var words = string.split(" ");
    //Splits the inputted string by their spaces and stores them into an array
    var returnString = "";
    //Creating empty string to be used later

    for(i of words){
    //For loop that iterates through the array of strings
        returnString += capitalizeWord(i) + " ";
        //Stores the array value that uses the previously created function to capitalize the first letter with a space after it
    }
    returnString = returnString.slice(0, -1);
    //Removes the last unneeded space

    return returnString;
    //Returns the now modified returnString
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    
    return "Welcome " + capitalizeWord(object.name) + "!";
    //Uses the previously created function to capitalize the data in the name property of the inputted object
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
    //capitalizeWord has been initialized earlier, simply recalling object properties by using dot notation
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

    if (object.noises !== undefined){
    //If the noises property exists in the object
        if (object.noises.length !== 0){
        //If there's data in the noises property
            let str = '';
            //Creating string variable in the function scope
            for (i in object.noises) {
            //Iterating through the object's noises property that contains an array
              str += object.noises[i] + ' ';
              //Adds the array at the indicated index and adds a space at the end
            }
            str = str.slice(0, -1);
            //Removes the last unnecessary space
            return str;
            //Returns the now filled/modified function scope string
        }
    }
    
    return 'there are no noises';
    //If the if/else statement doesn't use return and break out of the function, then this is returned instead

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

    var words = string.split(" ");
    //Function scoped words has an array of strings stored into it, which separated the string by the spaces

    for(i of words) {
    //For-loop iterates through the words array
        if(i === word) {
        //If the string at the current array is equal to the word argument
            return true;
            //Return true
        }
    }
    return false;
    //Returns false if the return statement in if was not reached to break out of the function
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    //Pushes the name argument into the object's friends array
    return object;
    //Returns the now modified object argument
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

for(i in object.friends) {
//Iterating through the array in the friends property of the object argument
    if(object.friends[i] === name) {
    //If the array's value at the specified index (using dot and bracket notation) is equal to the name argument
        return true;
        //Returns true if this condition is true
    }
}
    return false;
    //If the return in the if statement is not reached to break out of the function, this return statement is run instead

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

    let notFriends = [];        //list to return
    let allFriends = [];      //list of all possible friends
    let obj = {};                 //the object that were working with,
    for(i in array){
        if(array[i]['name'] === name){
            Object.assign(obj, array[i]);   //assign obj to our relevant object
        } else{
            allFriends.push(array[i]["name"]) //push other names into allFriends
    }}
    //for every element in allFriends
    for(i in allFriends){
        //if its not in obj.friends
        if(!(obj.friends.includes(allFriends[i]))){
            //push that element to notFriends
            notFriends.push(allFriends[i]);
    }}
    return notFriends;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

   object[key] = value;
   return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

    for(i of array) {
        delete object[i];
    }

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    
    let arr = []; 
    for(i in array){
        if(!arr.includes(array[i])){
            arr.push(array[i])
        }
    }
    return arr;

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}