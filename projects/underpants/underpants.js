// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// const { indexOf } = require("lodash");

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function (value) {
    return value;
    //Returns the data within value argument

};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          *- "string"
*          *- "array"
*          - "object"
*          *- "undefined"
*          *- "number"
*          *- "boolean"
*          *- "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function (value) {
    if (Array.isArray(value) === true) {
        //If value is an array return "array"
        return "array";
    } else if (value === null) {
        //If there's no data in value return null
        return "null";
    } else if (typeof(value) === "number") {
        //If typeof value returns a string saying numner return "number"
        return "number";
    } else if (typeof(value) === "string") {
        //If typeof value returns a string saying string return "string"
        return "string";
    } else if (value instanceof Date === true) {
        //If the instanceof the value is a date and returns true, return "date"
        return "date";
    } else if (value === undefined) {
        //If the value has not been assigned a value, return "undefined"
        return "undefined";
    } else if (typeof(value) === "boolean") {
        //If typeof value returns a string of "boolean", return "boolean"
        return "boolean";
    } else if (typeof(value) === "object") {
        //If typeof value returns a string of "object", return "object"
        return "object";
    } else {
        //If none of those tests pass, then return "function"
        return "function";
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function (array, number) {

    if(number === undefined) {
        //If there's no value stored in number
        return array[0];
        //Return the first index of the array
    }

    if (!Array.isArray(array) || number < 0) {
        //If the type isn't an aray or the number is less than zero, return an empty array
        return [];
    } 
    if (typeof(number) !== "number") {
        //If the number is not a number type
        return array[array.length - 1];
        //Return the last value of the array
    }
       
    if (number > array.length) {
        //If the numner is greater than the length of the array
        return array;
        //Return the entire array
    }

    return array.slice(0, number);
    //Return the number of indexes of the array as number

}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function (array, number) {

    if(number === undefined) {
        //If there is no value stored in number
        return array[array.length - 1];
        //Return the last value of the array
    }

    if (!Array.isArray(array) || number < 0) {
        //If array isn't an array or number is negative
        return [];
        //Return an empty array
    } 
    if (typeof(number) !== "number") {
        //If number isn't a numnber
        return array[array.length - 1];
        //Return the last value of the array
    }
       
    if (number > array.length) {
        //If number is larger than the length of the array
        return array;
        //Return the array's value
    }

    return array.slice(number - 1);
    //Return the last number of items in the array, determined by inputted number, if none of the other conditions were met

}


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value) {

    for (var i = 0; i < array.length; i++) {
        //Iterating through the array
        if (array[i] === value) {
            //If the value of the array at the current index is the same as the inputted value
            return i;
            //Return the index at which they're equal
        }
    }
    return -1;
    //Return -1 if there's no match
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

/*Ternary operator:

condition ? expressionIfTruthy : expressionIfFalsey

*/

_.contains = function (array, value) {

    let isTrue = 0;
    //Variable that will count how many times the value is within the array

    for (var i = 0; i < array.length; i++) {
        //Iterating through the array
        if (array[i] === value) {
            //If the data within the current array index is equal to value
            isTrue += 1;
            //Add 1 to the value stored in isTrue
        }
    }
    if (isTrue > 0) {
        //If there are any values equivalent to the data in the array, isTrue will be greater than the initialized value of 0
        return true;
        //Return true then because there was at least one match
    }
    return false;
    //Returns false if true was not returned
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func) {

    if(Array.isArray(collection)) {
    //Using truthy/falsey to see if the collection is an array
        for (let i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
            //Call function on each element passing the element, its index, and the collection itself
        }
    } else {
        for (let key in collection) {
            func(collection[key], key, collection);
            //Invoke function on the current value, key, collection
        }

    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function (array) {

    let noDuplicatesArray = [array[0]];
    //Filling the array with the first index of the array argument so we can start comparing duplicates immediately

    for (var i = 0; i < array.length; i++) {
        //Iterating through entire array
        if (this.indexOf(noDuplicatesArray, array[i]) < 0) {
            //If the indexOf returns -1, then there is no duplicate, so the test is < 0
            noDuplicatesArray.push(array[i]);
            //Since there was no duplicate, you can push the data at the current array index into the new array
        }
    }
    return noDuplicatesArray;
    //Returns the now modified noDuplicatesArray
}


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, aFunction) {

    let newArray = [];
    //Declaring a new, empty array
    
    for (let i = 0; i < array.length; i++) {
        //Iterating through the array argument

        if (aFunction(array[i], i, array)) {
            //If this function returns truthy
            newArray.push(array[i]);
            //Push the value in the current array index into newArray
        }
    }

    return newArray;
    //Return the potentially modified array
}


/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, aFunction) {

    let newArray = [];
    //Declaring a new, empty array
    
    for (let i = 0; i < array.length; i++) {
        //Iterating through the array argument

        if (!aFunction(array[i], i, array)) {
            //If this function returns falsey
            newArray.push(array[i]);
            //Push the value in the current array index into newArray
        }
    }

    return newArray;
    //Return the potentially modified array
    
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function (array, aFunction) {

    let newArray = [];
    let truthyArray = [];
    let falseyArray = [];
    //Declaring a new, empty arrays
    
    for (let i = 0; i < array.length; i++) {
        //Iterating through the array argument

        if (aFunction(array[i], i, array)) {
            //If this function returns truthy
            truthyArray.push(array[i]);
            //Push the value in the current array index into truthyArray
        } else {
            //The function return falsey
            falseyArray.push(array[i]);
            //Push the value in the current array index into falseyArray
        }
    }
    newArray.push(truthyArray, falseyArray);
    //Pushing the two arrays into newArray

    return newArray;
    //Returning the potentially modified newArray
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (aCollection, aFunction) {

    let newArray = [];
    //Delcaring empty array

    if (Array.isArray(aCollection) || typeof(aCollection) === "object") {
        //If aCollection is an array
        for (let i in aCollection) {
            //Iterating through aCollection
            newArray.push(aFunction(aCollection[i], i, aCollection));
            //Push the function call into newArray with the element, the index, and aCollection
        }
 
    }

    return newArray;
    //Return the potentially modified array
    

}


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function (arrayOfObjects, property) {
    
    let returningArray = _.map(arrayOfObjects, function(item){
        //Declaring variable to equal map, which is analyzing the arrayOfObjects and it is being called item by the function
        return item[property];
        //The function returns the data inside of the item's specified property
    }) 
   
    return returningArray;
    //Returning the now modified array

}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

//Check if truthy/falsey, which means check if they're undefined, null, Nan, etc. 

_.every = function(collection, func) {

    //determine if collection is array
    if (Array.isArray(collection)) {
        //determine if no function passed in
        if (func === undefined) { //nothing passed in func parameter
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) { //determine if collection[i] is not truthy
                    return false;
                }
            }

        } else { //else function was passed in
            for (let i = 0; i < collection.length; i++) { //determine if result of invoking function is true/truthy
                if (!func(collection[i], i, collection)) { //see if it returns not truthy
                    return false;
                }
            }
        }

    } else { //else it's an object
        //determine if no function passed in

        //else function was passed in
    }

    return true;
    //Only hits if there's nothing false and every item is truthy and/or returns true
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function (aCollection, aFunction) {

    if (!aFunction) {
        //If a function was not passed
        for (let i in aCollection) {
            //Iterating through the collection
            if (aCollection[i] === true) {
                //If the value stored in the key or array index is true
                return true;
                //Returns true
            }
        }
    }


    if(this.typeOf(aFunction) === "function") {
        //If a function is passed
        if(Array.isArray(aCollection)) {
            //If the collection is an array
            for (let i in aCollection) {
                //Iterating through the collection
                if (aFunction(aCollection[i], i, aCollection)) {
                    //If the function returns true containing array element, index, and array
                    return true;
                    //Returns true
                }
            }
        } else if (typeof(aCollection) === "object") {
            //If aCollection is an object (but isn't an array)
            for (let i in aCollection) {
                //Iterate through aCollection keys
                if (aFunction(aCollection[i], i, aCollection)) {
                    //If the function returns true with arguments of object key's value, key, and object
                    return true;
                    //Return true
                }
            }
        }
    }

    return false;
    //If the return true are not passed, return false

}


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function (array, func, seed) {
    //determine if no seed

    let result;
    //Delaring result variable

    if (seed === undefined) {
        //If there is no seed/falsey
        result = seed = array[0];
        //Result is set as the seed value which is set as the value stored in the array 0 index
        
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i);
            //Every time we iterate, the function uses the current updated values
        }
    } else {
        //There's a seed argument
        result = seed;
        //Result is set as the seed argument
        for (let i = 0; i < array.length; i++) {
            //Iterating through array
            result = func(result, array[i], i);
            //Every time we iterate, this function uses the current updated values
            //After result is updated, the final value is returned
        }
    }
    return result;
    //Returning the value in result
}
//When reduce method is invoked, it checks for seed value. Seed value is to give the function a starting point.
//Seed value initializes the value that is eventually going to be returned
//result = func(result, currentVal, currentIndex, collection)
//let example = _.reduce(nums, function(accumulator, current, index, coll){ return accumulator + current;}, 0);
//Can also call accumulator previous that is common


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/


_.extend = function () {

    let allArguments = Array.from(arguments);
    //Contains an array of the arguments passed

    for(let i = 0; i < allArguments.length; i++) {
        //Iterating through allArguments array
        Object.assign(allArguments[0], allArguments[i]);
        //Assigns the data in the object at the current array index into the array's 0 index
    }

    return allArguments[0];
    //Returns the modified first object at the array's 0 index

}

/*

_.extend = function () {

    let allArguments = Array.from(arguments);
    //Contains an array of the arguments passed
    let fillingObject = {};
    //Empty object to be filled by the array index
    let returningObject = {};
    //Storing the data coped from fillingObject then returned


    for(let i = 0; i < allArguments.length; i++) {
        fillingObject = allArguments[i];
        Object.assign(returningObject, fillingObject);
    }
    console.log(returningObject);

    return returningObject;

}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
