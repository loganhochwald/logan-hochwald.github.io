# bc_practice_test
Welcome to the 1st Annual Alien Dog Show!

Since this is our first event, we're hiring jr Developers like yourself to make sure things don't go wrong.
Let's get started!


1. Since this is an intergalatic event, many of our patrons speak different languages!
    Assign a function to our our `greeting` variable that takes 3 inputs: `greeting`, `location` and `time`. Concatanate these values together to form a viable sentence and log it to the console.
    Don't forget the spaces!

2. We have more contestants than anticipated. (We actually don't have a count!)
    Assign a function to our `contestants` variable that will return the number of entries in our dogs array. 


3. Oh no! Some of our contestants aren't even dogs!
    Using the native filter method with our `dogs` array, create an array called `filterSpecies` that will filter out all of the species that are not dogs! 

4. For safty purposes, let's create a copy of our array. Using the spread operator, assign a copy of our `filterSpecies` array to our `dogContestants` variable.

5. Now that we have our `dogContestants` array, we need to add a `class` property to each dog object.
    Using the native map method, add a key of `class` with the value:
        - "red" if the dog's weight is between 0 and 10.
        - "yellow" if the dog's weight is between 11 and 20.
        - "green" if the dog's weight is 21 or over.


6. The votes are in! We have an array of the top dogs in each class
    Using recursion, copy all of the properties into one object and return that object. If you'd like an idea of our data structure, look in the dogData.js file. Look at dogData.js for the array.


7. For statistical reasons, lets count all of the votes we recieved for our dog and non-dog contestants!
    Using reduce, find the sum of the votes casted.