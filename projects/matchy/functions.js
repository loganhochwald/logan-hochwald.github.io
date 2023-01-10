/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(arr, str){

    for(i = 0; i < arr.length; i++){
    //For loop iterating through array until end
        if(arr[i]['name'] === str){
        //If the array's object at that index has a name that is the same as the inputted string
            return arr[i];
            //Return the animal object
        }
    } 
    return null;
    //Otherwise return null
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    for(let i in animals){
        //Iterating through the entire array
        if(animals[i]['name'] === name){
            //If the array's object at that index has the same name property as the string
            animals[i] = replacement;
            //Replace the object with the new inputted object
        }
    }
    return;
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(let i in animals){
        //Iterating through entire array
        if(animals[i]['name'] === name){
            //If the object at that array index has same name property as inputted string
            animals.splice(animals[i], 1);
            //Remove the name at that index and remove only one "thing"
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    for(let i in animals){
        //Iterating through entire array
        if(animals[i]['name'] !== animal.name){
            //If the object at that array index does not have the same name property as animal
            if(animal.name.length > 0 && animal.species.length > 0){
                //If animal isn't empty
                animals.push(animal);
                //Insert the animal into the animals array
            }
        } else {return;}
        //Otherwise return
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
