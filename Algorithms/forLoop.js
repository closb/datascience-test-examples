/**
 * 
 *  for loop is used to iterate over a block of code a number of times
 * 
 *  for (initialization; condition; increment) {
 *       code block to be executed
 *  }
 * 
 *  initialization: is executed (once) before the execution of the code block
 *  condition: defines the condition for executing the code block
 *  increment: is executed (every time) after the code block has been executed
 * 
 *  
 */
 
// JavaScript supports different kinds of loops:

    // for - loops through block of code a number of times
    // for/in - loops through the properties of an object
    // for/of - loops through the values of an iterable object
    // while - loops through block of code while specified condition is true
    // do/while - loops through block of code while specified condition is true
 
// The For Loop

    /**
     *  creates a loop with three optional expressions
     * 
     *  for { expression 1; expression 2; expression 3 } {
     *   code block to be executed
     *   }
     *  
     *  expression 1 is executed (once) before the execution of the code block
     *  expression 2 defines the condition for executing the code block
     *  expression 3 is executed (every time) after code block has been executed
     */

// Example

    for (let i = 0; i < 5; i++) {
      text += "The number is " + i + "<br>";
    }
