'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection.
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/**
 * identity: Designed to return the input value unchanged
 * 
 * @param { Any Value } value: Function takes in any value that is to be returned unchanged.
 * @return { Any value }: Function returns input value unchanged.
 */

function identity(value) {
    return value;
};

module.exports.identity = identity;


/**
 * typeOf: Designed to determine the input value type using if/else statements and returns the input value type as a string
 * 
 * @param { Any value } value: Function takes in any value to be tested in if/else statements.
 * @return { String }: Function returns a string defining the input value type.
 */

function typeOf (value) {
    if (Array.isArray(value) === true) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (typeof(value) === "number") {
        return "number";
    } else if (typeof(value) === "string") {
        return "string";
    } else if (value instanceof Date === true) {
        return "date";
    } else if (value === undefined) {
        return "undefined";
    } else if (typeof(value) === "boolean") {
        return "boolean";
    } else if (typeof(value) === "object") {
        return "object";
    } else {
        return "function";
    }
}

module.exports.typeOf = typeOf;


/**
 * first: Designed to take in an array and number; returns an array depending on the inputted values. If
 * array is not an array or number is negative, return an empty array. If number is either not given or 
 * not a number, return the first element of the array argument. If number is greater than arrau length, 
 * return the array. Otherwise, return the first number of items in the array. 
 * 
 * @param { Array } array: Function takes in an array to be modified by the number argument (if inputted).
 * @param { Number } number: Function takes in a number to be used to modify the array argument.
 * @return { Array }: Function returns an array depending on array and number arguments.
 */
function first (array, number) {

    if(number === undefined) {
        return array[0];
    }
    if (!Array.isArray(array) || number < 0) {
        return [];
    } 
    if (typeof(number) !== "number") {
        return array[array.length - 1];
    }
    if (number > array.length) {
        return array;
    }
    return array.slice(0, number);
}

module.exports.first = first;

/**
 * last: Designed to take in an array and number; returns an array depending on the inputted values. If
 * array is not an array or number is negative, return an empty array. If number is either not given or 
 * not a number, return the last element of the array argument. If number is greater than array length, 
 * return the array. Otherwise, return the first number of items in the array.
 * 
 * @param { Array } array: Function takes in an array to be modified by the number argument (if inputted).
 * @param { Number } number: Function takes in a number to be used to modify the array argument.
 * @return { Array }: Function returns an array depending on array and number arguments.
 */
function last (array, number) {

    if(number === undefined) {
        return array[array.length - 1];
    }
    if (!Array.isArray(array) || number < 0) {
        return [];
    } 
    if (typeof(number) !== "number") {
        return array[array.length - 1];
    }
    if (number > array.length) {
        return array;
    }
    return array.slice(number - 1);
}



module.exports.last = last;

/**
 * indexOf: Designed to iterate through the array argument and compare each element to the value argument.
 * If array contains the same value, then the function returns the index at which they are the same. If the
 * array does not contain the value, then -1 is returned.
 * 
 * @param { Array } array: Function takes in an array to be iterated through and compared to value.
 * @param { Value } value: Function takes in a value to compare to each array element.
 * @return { Number }: Function returns a number or strictly -1 depending on array and value arguments.
 */
function indexOf (array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}


module.exports.indexOf = indexOf;

/**
 * contains: Designed to iterate through the array argument and adds 1 to the value of a counter whenever value matches
 * the array element. If the counter is greater than 0, then there was at least one matching element to value and true
 * is returned. If there is no match, then false is returned. IndexOf() may not be used in this function.
 * 
 * @param { Array } array: Function takes in an array to be iterated through and compared to value.
 * @param { Value } value: Function takes in a value to compare to the array elements.
 * @return { Boolean }: Function returns true or false depending on array and value arguments.
 */
function contains (array, value) {
    let isTrue = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            isTrue += 1;
        }
    }
    if (isTrue > 0) {
        return true;
    }
    return false;
}


module.exports.contains = contains;

/**
 * unique: Designed to loop through the array argument and remove the duplicates. The array elements are 
 * pushed into a locally created array, but if the same value is located within the local array, then
 * the value is not pushed into it. The function returns the locally created array that contains the array
 * argument elements without the duplicates.
 * 
 * @param { Array } array: Function takes in an array to be iterated through and duplicates deleted.
 * @return { Array }: Function returns a locally created array that contains the array argument with no duplicates.
 */
function unique (array) {
    let noDuplicatesArray = [array[0]];
    for (var i = 0; i < array.length; i++) {
        if (this.indexOf(noDuplicatesArray, array[i]) < 0) {
            noDuplicatesArray.push(array[i]);
        }
    }
    return noDuplicatesArray;
}


module.exports.unique = unique;

/**
 * filter: Designed to take an array and function, iterate through the array, and for every array index call the
 * element, index, and array in the function argument. If this call returns truthy, then the element in that array 
 * index is pushed into a locally created array. That local array is returned.
 * 
 * @param { Array } array: The array that is iterated through and passed through the function.
 * @param { Function } aFunction: Has array values passed through it and returns boolean values.
 * @return { Array }: Function returns a locally created array containing array values that produce truthy from the 
 * function argument.
 */
function filter (array, aFunction) {
    let newArray = [];    
    for (let i = 0; i < array.length; i++) {
        if (aFunction(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


module.exports.filter = filter;

/**
 * reject: Designed to take an array and function, iterate through the array, and for every array index call the
 * element, index, and array in the function argument. If this call returns falsey, then the element in that array 
 * index is pushed into a locally created array. That local array is returned.
 * 
 * @param { Array } array: The array that is iterated through and passed through the function.
 * @param { Function } aFunction: Has array values passed through it and returns boolean values.
 * @return { Array }: Function returns a locally created array containing array values that produce falsey from the 
 * function argument.
 */
function reject (array, aFunction) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!aFunction(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}


module.exports.reject = reject;

/**
 * partition: Designed to take an array and function, iterate through the array, and for every array index call the
 * element, index, and array in the function argument. If this call returns truthy, then the element in that array 
 * index is pushed into a locally created array that only stores the result of truthy. Another local array stores the
 * pushed array elements that result in falsey return from the function argument. A third local array then has the 
 * truthy and falsey arrays pushed into it and returned.
 * 
 * @param { Array } array: The array that is iterated through and passed through the function.
 * @param { Function } aFunction: Has array values passed through it and returns boolean values.
 * @return { Array }: Function returns a locally created nested array containing the local truthy array and falsey arrays.
 */
function partition (array, aFunction) {
    let newArray = [];
    let truthyArray = [];
    let falseyArray = [];
    for (let i = 0; i < array.length; i++) {
        if (aFunction(array[i], i, array)) {
            truthyArray.push(array[i]);
        } else {
            falseyArray.push(array[i]);
        }
    }
    newArray.push(truthyArray, falseyArray);
    return newArray;
}

module.exports.partition = partition;


/**
 * map: Designed to test a collection to see if it's an object or array then return an array 
 * containing the result of aFunction call with the collection's element, index, and collection
 * passed through it. The collection is iterated through and at each index the function is called, which
 * pushes the results into a locally created array. Once the collection has been completely iterated through,
 * the locally created array is returned.
 * 
 * @param { Function } aFunction: Function takes in different elements of the array argument.
 * @param { Array or Object } aCollection: The collection over which to iterate.
 * @return { Array }: Function returns a locally created array.
 */
function map (aCollection, aFunction) {
    let newArray = [];
    if (Array.isArray(aCollection)) {
        for (let i in aCollection) {
            newArray.push(aFunction(aCollection[i], i, aCollection));
        }
    } else if (typeof(aCollection) === "object") {
        for (let i in aCollection) {
            newArray.push(aFunction(aCollection[i], i, aCollection));
        }
    }
    return newArray;
}

module.exports.map = map;



/**
 * pluck: Designed to iterate through an array of objects and the values of the objects in the arrays are pushed
 * into a locally created array if they match the property. The local array is returned once the iteration is complete.
 * 
 * @param { Array } arrayOfObjects: An array containing objects for the elements, to be iterated through.
 * @param { String } property: The string is compared to the object properties in each array element.
 * @return { Array }: Function returns a locally created array containing the value of property in each element of array.
 */
function pluck (arrayOfObjects, property) {
    let newArray = [];
    for(let i = 0; i < arrayOfObjects.length; i++) {
        newArray.push(Object.values(arrayOfObjects[i])[0]);
    }
    return newArray;
}


module.exports.pluck = pluck;

/**
 * every: Designed to iterate through a collection and call a function on every element. If return value of every element is
 * true, the function returns true. Otherwise, it returns false. If collection is array, function calls with the element, index,
 * and array. If collection is object, function calls with the value, key, and object.
 * 
 * @param { Array or Object } collection: The collection over which to iterate.
 * @param { Function } func: Function takes in different elements of the collection and returns a boolean value.
 * @return { Boolean }: Function returns true or false.
 */
function every (collection, func) {
    if (Array.isArray(collection)) {
        if (func === undefined) {
            for (let i = 0; i < collection.length; i++) {
                if (!collection[i]) {
                    return false;
                }
            }
        } else { 
            for (let i = 0; i < collection.length; i++) { 
                if (!func(collection[i], i, collection)) { 
                    return false;
                }
            }
        }

    } else { 
    }
    return true;
}


module.exports.every = every;

/**
 * some: Calls the function on every parameter of the collection, if the return value is true for at least one element, return
 * true, otherwise return false. If a function is not provided, then the parameter is iterated through and if the value is truthy,
 * return true, otherwise return false.
 * 
 * @param { Array or Object } aCollection: A collection to be iterated through.
 * @param { Function } aFunction: Function that passes the parameters of the collection and returns a boolean value.
 * @return { Boolean }: The function returns true or false depending on the result of the function or collection values.
 */
function some (aCollection, aFunction) {

    if (!aFunction) {
        for (let i in aCollection) {
            if (aCollection[i] === true) {
                return true;
            }
        }
    }
    if(this.typeOf(aFunction) === "function") {
        if(Array.isArray(aCollection)) {
            for (let i in aCollection) {
                if (aFunction(aCollection[i], i, aCollection)) {
                    return true;
                }
            }
        } else if (typeof(aCollection) === "object") {
            for (let i in aCollection) {
                if (aFunction(aCollection[i], i, aCollection)) {
                    return true;
                }
            }
        }
    }
    return false;
}


module.exports.some = some;

/**
 * reduce: Calls the function through every element of the array by passing the previous result, element, and index.
 * The return value of the function is the result, and once the iteration is complete, the function returns the number
 * stored inside of that value. If seed is not given as an argument, then the element within the first index of the array is 
 * to be used for the inital value of seed and result.
 * 
 * @param { Array } array: Function takes in an array to be iterated through.
 * @param { Function } func: Passed using the result and current array index.
 * @param { Number } seed: The seed value, which is optional.
 * @return { Number }: The function returns the value stored in result.
 */
function reduce (array, func, seed) {
    let result;
    if (seed === undefined) {
        result = seed = array[0];        
        for (let i = 1; i < array.length; i++) {
            result = func(result, array[i], i);
        }
    } else {
        result = seed;
        for (let i = 0; i < array.length; i++) {
            result = func(result, array[i], i);
        }
    }
    return result;
}


module.exports.reduce = reduce;

/**
 * extend: 
 * 
 * @return { Object }: 
 */
function extend () {
    let allArguments = Array.from(arguments);
    for(let i = 0; i < allArguments.length; i++) {
        Object.assign(allArguments[0], allArguments[i]);
    }
    return allArguments[0];

}


module.exports.extend = extend;