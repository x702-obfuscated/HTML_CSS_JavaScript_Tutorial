/*
   JavaScript is a high-level, interpreted programming language.
   It is designed to make web pages interactive and dynamic.
   JavaScript can be used for client-side scripting to create
   dynamic content, handle events, and interact with the user.
*/


/*
   JavaScript Concepts:

   Data Types: 
      The classification of values. 
      Common types include integers, floats, strings, booleans, objects, and arrays.

   Variable:
      a container for storing data values. 
      In JavaScript, you can declare variables using keywords like 'var', 'let', or 'const'.
   
   Operators: 
      Symbols or keywords that perform operations on variables and values. 
      Examples include + (addition), - (subtraction), * (multiplication), and / (division).
   
   Control Flow Statements: 
      Statements that control the flow of program execution, such as conditionals and loops.

      Conditionals:
         structures that allow you to make decisions in your code. 
         Common conditional statements include 'if', 'else if', and 'else'.

      Loops:
      used for repetitive execution of a block of code. 
      Common loop types are 'while' and 'for'.

         While loop:
            repeats a block of code as long as a specified condition is true.

         For loop:
            used for iterating(looping) over a range of values or elements.

   Functions:
      are reusable blocks of code that perform a specific task. 
      All functions are defined, and then called. They make code more reusable.

      Function definition:
         the process of creating a function by specifying its name, parameters, and the code to be executed.

      Function call:
         the act of instructing a function to execute. 
         It involves using the function's name followed by parentheses, which may contain arguments.

   Class:
       a blueprint for creating objects. 
       It defines properties and methods that the objects created from the class will have.

   Object:
      a collection of key-value pairs (properties(data) and methods(functions)). 
      Objects are instances of classes.
*/


/* Variables */
var myVariable = "My value varies";
let message = "Goodbye World";
let x = 6;
let y = 8;
const pi = 3.14;

/* Conditionals */
if(x == y){
   message = "x and y are equal";
}
else if(x > y){
   message = "x is larger than y";
}
else{
   message = "y is larger than x";
}

/* Loops */
let count = 1;
//While loop
while(count <= 10){
   console.log(count);
}

//For Loop
for(let i = 0; i < 5; i++){
   console.log("Looping" + i);
}

/* Functions */
//Function Definition
function hello(){
   console.log("The hello() function was called.");
}

//Function call
hello();



function showMessage2() {
  console.log("We use console.log() to show output in JavaScript");
  console.log("This is output from the external JavaScript.");
  console.log(message);
  console.log(x+y);
}

//Classes
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

 }//End of Animal Definition
 

 //Objects

 // Constructing an instance of the Animal class (an object)
 const tiger = new Animal("Tony", "Tiger");
 //Here the tiger variable stores an animal object. 
 //new Animal("Tony", "Tiger") creates a new Animal object with the properties of "Tony", and "Tiger"

 //Accessing Properties
 console.log( tiger.sound ); // Output: Some generic animal sound
 //Here tiger refers to the object and we are accessing the sound property of the object
 //console also refers to an object, but not an Animal object. .log() is being called on the console object. 


 // Calling methods 
 tiger.displayInfo(); // Output: Name: Tony, Species: Tiger
 //Here tiger refers to the object and displayInfo() is being called on the object


 

 




 