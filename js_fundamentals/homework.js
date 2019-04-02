//
// # JS Fundamentals Exercises
//
// ## Exercise 1
//
// What do the following expressions return? Try to guesstimate the answer before trying it in node. -->
//
//
// <!-- 1.1
// ```js
console.log(7 + 3);
// ```
//
// 1.2
// ```js
console.log(9 % 2);
// ```
//
// 1.3
// ```js
console.log(typeof(42));
// ```
//
// 1.4
// ```js
console.log(typeof(2) === typeof(9.24));
// ```
//
// 1.5
// ```js
console.log(42 / 0);
// ```
//
// 1.6
// ```js
console.log(9 / "player1");
// ```
//
// 1.7
// ```js
console.log(NaN === NaN);
// ```
//
// 1.8
// ```js
console.log(typeof(NaN));
// ```
//
// 1.9
// ```js
console.log(typeof parseInt("42"));
// ```
//
// 1.10
// ```js
console.log("Brendan" + " Eich");
// ```
//
// 1.11
// ```js
var firstName = "Brendan";
var lastName = "Eich";
console.log(firstName + " " + lastName);
// ```
//
// 1.12
// ```js
var phoneNumber = "08798976";
console.log(phoneNumber.length);
// ```
//
// 1.13
// ```js
console.log("Brendan" === "Brendan");
// ```
//
// 1.14 Will the following code log anything out?
// ```js
var fName;

if(fName) console.log(`First name is ${fName}`); //no because fname is undefined
// ```
//
// 1.15 Will the following code log anything out?
// ```js
var name = "";

if(name) console.log(`First name is ${name}`); // no because variable is empty
// ```
//
// ## Exercise 2
//
// Write a program to determine what award a student should get on a test.
//
// If their score is 10, they get a "Distinction"
// If their score is 9, they get a "Merit"
// If their score is 8, they get a "Pass"
// If their score is less than 8 they get a "Fail"
//
// **Directions:** Given a value for "score"....

var score = 10; //pass on different scores and see what happens:)

if (score == 10) {
  message = 'Distinction';
} else if (score == 9) {
  message = 'Merit';
} else if (score == 8) {
  message = 'Pass';
}else {
  message = 'Fail';
}
console.log('Your score:', message);
//
// ```js
// var score = 10;
// ```
//
// ...log out the award the student should receive.
//
// *TIP:* Use a switch statement
//
//
// ## Exercise 3
//
// Here's an array of objects representing different types of coffee:
//
// ```js
var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
];


// console.log(coffees);

for (var i = 0; i < coffees.length; i++) {
  var coffeType = coffees[i].type;
  var coffeePrice = coffees[i].price;
  console.log(coffeType + 's' + ' cost £' + coffeePrice + ' each');
}

// ```
//
// **Directions:** Loop over the array and print out the following coffee summaries using console.log.
//
// ```
// Lattes cost £2.65 each
// Cappuccinos cost £2.75 each
// Flat whites cost £2.95 each
// Super-dooper Mocha Deluxes cost £3.79 each
// ```
//
// ## Exercise 4
//
// In the game of naughts and crosses, each cell has a value of 'x', 'o' or null. We can represent the grid as a "2 dimensional" array. That means arrays inside an array. The grid is an array with 3 arrays inside it. The first array represents the top row, the second array represents the middle row and the third array is the bottom row.
//
// **Directions:** Write a series of logical expressions that prints out who
// the winner is.
//
// For example if ...
//
// ```js
var currentPlayer = 'x';

//constructed grid with every scenario where currentPlayer wins (made easier visually to go through grid...)

var grid = [['x','x','x'],            //Game 1
            ['o', null, 'o'],
            [null, null, null],
//----------------------------------------------
            [null, null, null],        //Game 2
            ['o', null, 'o'],
            ['x', 'x', 'x'],
//----------------------------------------------
            ['o', null, 'o'],          //Game 3
            ['x', 'x', 'x'],
            [null, null, null],
//----------------------------------------------
            ['x', 'o', null],         //Game 4
            ['x', null, null],
            ['x', 'o', null],
//----------------------------------------------
            [null, 'x','o'],        //Game 5
            [null, 'x', null],
            [null, 'x', 'o'],
//----------------------------------------------
            [null, 'o','x'],        //Game 6
            [null, null, 'x'],
            [null, 'o', 'x'],
//----------------------------------------------
            ['x', null,'o'],        //Game 7
            [null, 'x', null],
            ['o', null, 'x'],
//----------------------------------------------
            ['o', null,'x'],        //Game 8
            [null, 'x', null],
            ['x', null, 'o'],

];


// now need to work on logic...

if (currentPlayer == grid[0][0]){
  message = currentPlayer + ' wins';
}
console.log(message);

if (currentPlayer == grid[0][1]){
  message = 'No winner';
}
console.log(message);

if (currentPlayer == grid[0][2]){
  message = 'No game';
}
console.log(message);


// console.log(grid[0][0]) // prints 'x'
// ```
// ...then print "x wins" to the console. If there is no winner, print "No winner".
//
// Only the currentPlayer can be the winner.
//
// *TIP:* Break down the task. What do you need to do first?
//
// *TIP:* Make sure to test your code with different values for the cells and
// currentPlayer so that every possible winning combination is covered. --> -->
