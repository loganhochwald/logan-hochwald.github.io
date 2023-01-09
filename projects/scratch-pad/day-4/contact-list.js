// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {

    var objContact = {
        id,
        nameFirst,
        nameLast
      };
    //Creating the empty object to be filled by the parameters inserted into the function

    objContact.id = id;
    //Assigning id parameter to id key
    objContact.nameFirst = nameFirst;
    //Assigning nameFirst parameter to nameFirst key
    objContact.nameLast = nameLast;
    //Assigning nameLast parameter to namelast key
    
    return objContact;
    //Returning the newly filled object

} 


function makeContactList(id, nameFirst, nameLast) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    //Empty array to store the contacts for the contact list
    
    return {
    //Return statement for function
    id: id,
    //Id key, stores what was put as the argument
    nameFirst: nameFirst,
    //First name key, stores what was put as the argument
    nameLast: nameLast,
    //Last name key, stores what was put as the argument
    
    length: function() 
    //Length function that returns the length of the contact array
    {
      return contacts.length;
    },
    
    addContact: function (contact)
    //Add contact function that takes a new contact and pushes it into the contacts array 
    {
       return contacts.push(contact);
    
    },
    findContact: function (fullName)
    //Find contact function that takes fullName as the argument and matches with contact list
    {
      for (var i = 0; i <= contacts.length - 1; i++) {
        //For loop runs through the contacts array until the entire length has been read
        if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"]) {
          //If the fullName argument matches the first name and last name of the contact, then it returns that contact name at the specific index observed
          return contacts[i];
        }
      }
    },
    removeContact: function (contact) 
    //Remove contact function that takes contact as the parameter
    {
      for (var i = 0; i <= contacts.length - 1; i++) {
        //For loop runs through the contacts array
        if (contacts[i] === contact) {
          //If the entered contact matches a contact within the contacts array, then it is spliced
          return contacts.splice(i, 1);
          //Splices the array at the defined index and 1, or the starting point
        }
      }
    },
    printAllContactNames: function ()
    //Prints all of the contact names function
    {
      var stringOfContacts = "";
      //Creating empty string to store the name of the contacts within it
      for (var i = 0; i < contacts.length; i++) {
        //Runs through entire contacts array
        if (i < contacts.length - 1) {
        //If the counter has a length less than the last index of the array, add the index information and \n to stringOfContacts string
        stringOfContacts += contacts[i] + "\n";
        //Adding to string
        } else {
          //Once we've reached the end, only add the array information and not the \n this time so that there is no newline character at the end of the return list
          stringOfContacts += contacts[i];
        }
      }
      return stringOfContacts;
      //Returns the now filled stringOfContacts
    }
      
      };

}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
