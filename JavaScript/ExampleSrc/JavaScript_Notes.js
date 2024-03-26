/*
   #========================================================================================================================================================#
   JavaScript is a high-level, interpreted programming language.
   It is designed to make web pages interactive and dynamic.
   JavaScript can be used for client-side scripting to create
   dynamic content, handle events, and interact with the user.

   #========================================================================================================================================================#
   There are 3 ways that Javascript can be added to an HTML file

   External JavaScript:
   >> JavaScript code is stored in a separate external file (ex: script.js) and linked to the HTML document.

   Internal JavaScript:
   >> JavaScript code is directly written within the <script> tags in the HTML document.

   Inline JavaScript:
   >> JavaScript code is added directly to HTML elements using the "onclick" attribute or other event attributes.
   #========================================================================================================================================================#
*/

/*The code below is used with the AdddingJavaScript.html file
*/
function showMessage2() {
   console.log("We use console.log() to show output in JavaScript");
   console.log("This is output from the external JavaScript.");
   console.log(message);
   console.log(x+y);
 }


/* PROGRAMMING CONCEPTS:
#========================================================================================================================================================#

      Code is read and executed from top --> bottom and left --> right
*/



/* Comments 
#========================================================================================================================================================#
*/

// This is a single line comment

/*
   This 
         is
               a
                  multi-line
                              comment

*/



/*DATA TYPES
#========================================================================================================================================================#
*/
/*LITERAL                                TYPE                */
true;                               //booleans (true/false)
false;
2;                                  // integers (whole numbers) --> are number types in js
2.0;                                //floats (fractional numbers) -->  part of number types in js
"a";                                //characters (symbols) --> are strings in js
"Hello";                            //strings (a group of characters)
["a","b","c","d"];                  //arrays (a group of values) --> are objects in js
// {"a" : 97,  "b" : 98, "c" : 99}; //dictionaries/hashmaps( a group of key:value pairs)  --> created using objects in js
console;                            // objects (custom data type) 



/* VARIABLES
a container for storing data values. 
In JavaScript, you can declare variables using keywords like 'var', 'let', or 'const'.
#========================================================================================================================================================#
*/
var myVariable = "My value varies";

let message = "Goodbye World";
let x = 6;
let y = 8; // In general it is better to use 'let'

const pi = 3.14; // const for constants



/* OPERATORS 
Symbols or keywords that perform operations on variables and values. 
#========================================================================================================================================================#
*/
let a = 10; 
let b = 2;

// Arithmetic Operators
a + b; // addition
a - b; // subtraction
a * b; // multiplication
a / b; // division
a % b; // remainder
a++;   // increment (add one)
a--;   // decrement (subtract one)

//Relational Operators
a == b; // Equal to >> false
a != b; // Not Equal to >> true
a > b ; // Greater Than >> true
a >= b; // Greater Than or Equal To >> true
a < b;  // Less Than >> false
a <= b; // Less Than or Equal To >> false

//Logical Operators
c = true;
d = false;
!c;     // NOT >> false
!d;     //     >> true
c && d; // AND >> false
c || d; // OR  >> true



/* CONTROL FLOW STATEMENTS: CONDITIONALS 
Statements that control the flow of program execution, such as conditionals and loops.

Conditionals:
   structures that allow you to make decisions in your code. 
   Common conditional statements include 'if', 'else if', and 'else'.
#========================================================================================================================================================#
*/
x = 1; y = 10;

if(x == y){
   message = "x and y are equal";
}
else if(x > y){
   message = "x is larger than y";
}
else{
   message = "y is larger than x";
}



/* CONTROL FLOW STATEMENTS: LOOPS 
   Statements that control the flow of program execution, such as conditionals and loops.

Loops:
   used for repetitive execution of a block of code. 
   Common loop types are 'while' and 'for'.
#========================================================================================================================================================#
*/

/*WHILE LOOPS +++++++++++++++++++++++++++++++++++++++++++++++++++++++
   repeats a block of code as long as a specified condition is true.
*/
let count = 1;

while(count <= 10){
   console.log(count);
   count++;
}

/*FOR LOOPS +++++++++++++++++++++++++++++++++++++++++++++++++++++++
   used for iterating(looping) over a range of values or elements.
*/
for(let i = 0; i < 5; i++){
   console.log("Looping" + i);
}



/*FUNCTIONS
   are reusable blocks of code that perform a specific task. 
   All functions are defined, and then called. They make code more reusable.
#========================================================================================================================================================#
*/

/*FUNCTION DEFINITION+++++++++++++++++++++++++++++++++++++++++++++++++++++++
   the process of creating a function by specifying its name, parameters, and the code to be executed.
*/
function hello(){
   console.log("The hello() function was called.");
}

/*FUNCTION CALL+++++++++++++++++++++++++++++++++++++++++++++++++++++++
   the act of instructing a function to execute. 
   It involves using the function's name followed by parentheses, which may contain arguments.
*/
hello();




/*CLASSES
   a blueprint for creating objects. 
   It defines properties and methods that the objects created from the class will have.
#========================================================================================================================================================#
 */

//Defining the Animal Class (creating a blueprint for Animals)
class Animal {

   // Constructor Method to initialize object properties(builds objects)
   constructor(name, species) {
     this.name = name;
     this.species = species;
   }
 
   // Method to display information about the animal
   displayInfo() {
     console.log(`Name: ${this.name}, Species: ${this.species}`);
   }
 
   // Getter method to retrieve the sound of the animal
   get sound() {
     return "Some generic animal sound";
   }
 
   // Setter method to update the species of the animal
   set updateSpecies(newSpecies) {
     this.species = newSpecies;
   }

 }
 //End of Animal Definition=============================================================================================================================#
 

 /* OBJECTS
      are an instance of a class that stores data, and the methods that operate on that data
      
      Objects are instances of classes.
      in javascript --> a collection of key-value pairs (properties(data) and methods(functions)). 
#========================================================================================================================================================#
 */

/*CONSTRUCTING OBJECTS+++++++++++++++++++++++++++++++++++++++++++++++++++++++
   the act of building a new object with the class constructor method
   It involves creating a new object --> variable = new Constructor()
*/

const tiger = new Animal("Tony", "Tiger");// Constructing an instance of the Animal class (an object)
// variable = new Constructor()
//Here the tiger variable stores an animal object. 
//new Animal("Tony", "Tiger") creates a new Animal object with the properties of "Tony", and "Tiger"


/*ACESSING PROPERTIES+++++++++++++++++++++++++++++++++++++++++++++++++++++++
   the act of looking up the value of an objects property
   It involves dot syntax --> object.variable
 */
tiger.name; // Tony
 //Here tiger refers to the object and we are accessing the name property of the object
 
console.log( tiger.name ); // Output: Tony
//console also refers to an object, but not an Animal object. .log() is a method being called on the console object. 


/*Calling methods +++++++++++++++++++++++++++++++++++++++++++++++++++++++
   the act of instructing a method to execute on an object.
   It involves dot syntax --> object.method()
*/

tiger.displayInfo(); // Output: Name: Tony, Species: Tiger
//Here tiger refers to the object and displayInfo() is being called on the object

tiger.sound();       // Output: Some generic animal sound
tiger.updateSpecies("Panthera tigris"); // tiger.species = Panthera tigris



 






 