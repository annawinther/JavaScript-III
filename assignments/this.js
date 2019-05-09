/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: Whenever a function is contained in the global scope, the value of 'this' inside of that function will be the window object.

* 2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is this.

* 3. New Binding: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.

* 4. Explicit Binding: Whenever JavaScript’s call or apply method is used, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// Basic Function
// --------------
function greetMe(name) {
    console.log('Hello ' + name);
    console.log(this);
}

greetMe('John');


// Principle 2

// code example for Implicit Binding
// Object Method
// -------------
var greetMe = {
    greeting: 'Hello ',
    speak: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
    }
}

greetMe.speak('John');

// Principle 3

// code example for New Binding
// Constructor Function
// --------------------
function GreetMe(name) {
    this.greeting = 'Hello ';
    this.name = name;
    this.speak = function() {
        console.log(this.greeting + this.name);
        console.log(this);
    }
};

var greetJohn = new GreetMe('John');
var greetJane = new GreetMe('Jane');

greetJohn.speak();
greetJane.speak();

// Principle 4

// code example for Explicit Binding
// Using call/apply
// ----------------
greetJohn.sayGoodbye.call(greetJane);
greetJane.sayGoodbye.apply(greetJohn);