/*
   * VARIABLES:
   * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
   * are named identifiers that can point to values of a particular type, like a Number, String,
   * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
   * can CHANGE the value (and type of value) to which they point.
   * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
   * variable.
   * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
   * 3. Hoisting is a process that the Javascript interpreter does where it hoists the declarations, assignment of variables,
   * and assignment of functions to the top of the scope before code execution. This means that the interpreter scans the code
   * and hoists variable and function declarations to the top of the code, and then the code is executed. Function declarations
   * and their definitions take precedence over var declarations. It is important to note that initializations are not hoisted, 
   * so if the value of a var variable is called before it had been declared, then it would resolve to an undefined error. Similarly,
   * the let and const variables can't be accessed until they're defined but a reference error is thrown because they are not 
   * initialized as undefined.
   * 4. Variable declarations have scopes depending on what keyword they use. The three options are var, let, and const. Var can
   * be reassgined and is in both the local and global scopes. Let can be reassigned but is only in the block scope, meaning if
   * it was delclared in a place not globally, it can't be accessed globally. Lastly, const can't be reassigned and is block scoped
   * just as let is.
   */

  // 1. declaration //
  var myName;

  /*
   * At the declaration phase, the variable myName is undefined because we have NOT initialized
   * it to anything
   */
  console.log(myName); // prints => undefined

  // 2. initialization or assignment //
  myName = 'john';
  console.log(myName); // prints => john

  // 3. re-assignment //
  myName = 'bob';
  console.log(myName); // prints => bob

  // NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
  var myVariable = 1;
  var myVariable = true;
  myVariable = "someString";

  // 3. hoisting //

  //Written Code:
  console.log(numberOfCows); //prints 8
  var numberOfCows = 8;
  var howManyCows = getCowNumber(numberOfCows);
  function getCowNumber(cow) {
   return "This many cows: " + cow; //Returns This many cows: 8
  }

  //Javascript interprets like this:
  function getCowNumber(cow) {
   return "This many cows: " + cow;
  }
  var numberOfCows;
  var howManyCows
  numberOfCows = 8;
  howManyCows = getCowNumber(numberOfCows);  //Returns This many cows: 8

  // 4. Different Declarations //
  //Var is globally accessed even if declared within a function
  function itBeLikeThat() {
   var yes = "It sure do";
  }
  console.log(yes); //Prints It sure do

  //Let and const are block scoped

  function letAndConst () {
   let letVariable = 24;
   const constVariable = 25;
  }

  console.log("You know what's funnier than " + letVariable + "?" + " It's " + constVariable); //ReferenceError