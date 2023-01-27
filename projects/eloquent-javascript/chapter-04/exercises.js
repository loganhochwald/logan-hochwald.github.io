////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {

  let numberArray = [];
  //Array to be filled and returned
  

  if (!(start === end)) {
    //If start and end are not the same

    if (!(step === undefined) && step > 0) {
      //If there is a step value and it's positive

      for (var i = start; i <= end; i+= step) {
        //For-loop iterating, incremented by step
        numberArray.push(i);
        //Add the specified index to the array
      }

    } else if (!(step === undefined) && step < 0) {
      //If step exists and it's negative
      for (var i = start; i >= end; i-= step) {
        //For-loop iterating but decreasing by step value
        numberArray.push(i);
        //Adding the specified index to the array
      }

    } else {
      //If there is no step value
    for (var i = start; i <= end; i++) {
      //Simply add the array values from start to end
      numberArray.push(i);
      //Adding to array
    }
  }
    
  }

  return numberArray;
  //Returning the newly modified array
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {

  let sum = 0;
  //Sum to be filled with array values

  for (let i = 0; i < array.length; i++) {
    //For-loop iterating through array
      sum += array[i];
      //Add the value in the current array's index to sum
  }

  return sum;
  //Returns the now modified sum

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(oldArray) {

  let newArray = [];
  //Array to be filled
  
  if (!(oldArray === null)) {
    //The array isn't empty
  for (let i = oldArray.length - 1; i >= 0; i--){
    //Iterating through the array's length in a decreasing order
    newArray.push(oldArray[i]);
    //Pushing the array's value at the current index to the new array
  }
}

  return newArray;
  //Returning the now modified array
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {

  let storage = 0;
  //Number value

  for (var i = 0; i < array.length / 2; i++){
    //For-loop iterating through half the array's length because we only need to modify half of it
      storage = array[i];
      //Storage is holding the value in the array's current index
      array[i] = array[array.length - (i + 1)];
      //At the array's same index, it is taking in the value of the array's index located at the length minus the index plus one
      array[array.length - ( i + 1 )] = storage;
      //Then that is being placed into storage
  }
    return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {

  let list = null;
  //Defining list which has nothing in it at first

  for (let i = array.length - 1; i >= 0; i--) {
    //As we interate through the array decrementing until i is equal to 0
    list = {
      value: array[i], 
      rest: list}
    //List adds new values to it, the array's data in current index and the list values
  }

  return list;
  //Return the value in list

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(theList) {

  let array = [];
  //Declaring empty array

  for (let info = theList; info; info = info.rest) {
    //Iterating through theList
    array.push(info.value);
    //Push the value of info into the array
  }

  return array;
  //Returning the now modified array

}

/*
var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

*/

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  return {
    value, 
    rest: list};
  //Returning an object that has value as one key and the rest adding the list to it
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, element) {

  if ((!list)) {
  return undefined;
  //If there's no list, return undefined
  } else if (element == 0) {
    //If element has a zero value, don't need to add more
    return list.value; 
    //Returns the value in list
  } else {
    return nth(list.rest, element - 1);
    //Returns the function nth, which takes in list.rest and element - 1 to be run again through the function
  }
 

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {

  if (value1 === value2) {
    //If they're the same object
    return true;
    //Return true
  }

  if (value1 == null || value2 == null || typeof value1 != "object"
   || typeof value2 != "object") {
    //If one of the values are nonexistent or they aren't objects
    return false;
    //Return false
  }

  let value1Key = Object.keys(value1); 
  let value2Key = Object.keys(value2);
  //Assigning new variables to the keys of the objects

  if (value1Key.length != value2Key.length) {
    //If the length isn't the same, this means they don't have the exact same keys
  return false;
  //Return false
  }

  for (let key of value1Key) {
    //Iterating through the keys of value1 object
    if (!value2Key.includes(key) || !deepEqual(value1[key], value2[key])) {
      //If value2 key's don't include the key of value1 or the data in the key (comparing potential nested array/object access)
      return false;
      //Return false
    }
  }

  return true;
  //Return true if none of the falses are returned

  

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
