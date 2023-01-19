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

  let list = {};

  for(let i = 0; i < array.length; i++) {
    list.value = array[i];
  }

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {


}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(value1, value2) {

  //Return true if same value or are objects with same properties
  //Compare properties with a recursive call to the function
  //Make sure null is not considered when analyzing the object
  //If the object is an array, don't use the recursive function
  //Should return true as the last statement, the if/else are tests to return false

  if (!(value1 === value2)) {
    //If they're not the same value
    return false;
    //Returns false

  } else if (typeof(value1, value2) === "object") {
    //If they are both object types:

    if (Array.isArray(value1) === true) {
      //If they are arrays:
      if (!Arrays.equal(value1, value2)) {
        //If the two arrays are not the same, return false
        return false;
      }
    }

    
    //Now if they're object collections:
    if (!(Object.keys(value1).length == Object.keys(value2).length)) {
        return false;

    } else {
      for (key in value1) {
        if(!Object.keys(value2).includes(key) || !deepEqual(value1[key], value2[key])) {
          return false;
        }
      }

    }

    
  }

  return true;

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
