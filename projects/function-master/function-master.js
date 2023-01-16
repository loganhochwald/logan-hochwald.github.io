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

    for(i in object) {
        string += i.toString() + " ";
    }
    string = string.slice(0, -1);
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var string = "";

    for(i in object) {
        if (typeof object[i] === "string") {
       string += object[i].toString() + " ";
        }
    }
    string = string.slice(0, -1);
    
    return string;
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {

    if (Array.isArray(collection) === true) {
        return "array";
    } else if (typeof collection === "object") {
        return "object";
    } else {
        return;
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    
    return string.substring(0, 1).toUpperCase() + string.substring(1);

}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    
    var words = string.split(" ");
    var returnString = "";

    for(i of words){
        returnString += capitalizeWord(i) + " ";
    }
    returnString = returnString.slice(0, -1);
    return returnString;
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    var objectName = object.name;
    return "Welcome " + capitalizeWord(objectName) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    var objectName = object.name;
    var objectSpecies = object.species;
    return capitalizeWord(objectName) + " is a " + capitalizeWord(objectSpecies);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
        if (object.noises !== undefined){
          if (object.noises.length !== 0){
            let str = '';
            for (i in object.noises) {
              str += object.noises[i] + ' '
            }
            str = str.slice(0, -1)
            return str;
          }
        }
        return 'there are no noises'

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

    var words = string.split(" ");
    for(i of words) {
        if(i === word) {
            return true;
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

for(i in object.friends) {
    if(object.friends[i] === name) {
        return true;
    }
}
    return false;

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