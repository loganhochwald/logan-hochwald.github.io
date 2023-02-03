/*
   * VARIABLES:
   *
   * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
   * are named identifiers that can point to values of a particular type, like a Number, String,
   * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
   * can CHANGE the value (and type of value) to which they point.
   *
   * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
   * variable.
   *
   * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
   * 
   * 3. Hoisting is a process that the Javascript interpreter does where it hoists the declarations, assignment of variables,
   * and assignment of functions to the top of the scope before code execution. This means that the interpreter scans the code
   * and hoists variable and function declarations to the top of the code, and then the code is executed. Function declarations
   * and their definitions take precedence over var declarations. It is important to note that initializations are not hoisted, 
   * so if the value of a var variable is called before it had been declared, then it would resolve to an undefined error. Similarly,
   * the let and const variables can't be accessed until they're defined but a reference error is thrown because they are not 
   * initialized as undefined.
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
  var numberOfCows = 8;
  var howManyCows = getCowNumber(numberOfCows);
  function getCowNumber(cow) {
   return "This many cows: " + cow;
  }

  //Javascript interprets like this:
  function getCowNumber(cow) {
   return "This many cows: " + cow;
  }
  var numberOfCows;
  var howManyCows
  numberOfCows = 8;
  howManyCows = getCowNumber(numberOfCows);
