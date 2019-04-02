// console.log("Hello World!");

var name = "Mickey";
// console.log(typeof name);
name = 78;
// console.log(typeof name);

// console.log("Name:", name, "Another thing");

var greeting = "Hello" + " World!";
/*
console.log(greeting);
console.log(greeting.toUpperCase());
*/
var num = "9";
// num = parseInt(num);

console.log(typeof num);

// console.log(num + 2);
// console.log(num - 2);
//
// console.log(typeof num);
//
// console.log(num / 2);
// console.log(Math.floor(num / 2));
// console.log(num * 2);
// console.log(num ** 2);
// console.log(num % 2);

var quote = "Now's the time";
var quote = 'Now is the time';

var theTime = "12:00";
var quote = `Now is the time ${theTime}`;
var quote = "Now is the time" + theTime;

// console.log(typeof String(5));
var response = null;
// console.log(typeof response);

var request;
// console.log(request);

// console.log(request + 1);

// console.log(true);
// console.log(false);

var message;

if( 1 > 0 ) {
  message = "1 is greater than 0";
} else if ( 1 == 0 ){
  message = "1 is equal to 0";
} else {
  message = "1 is not greater than 0";
}

// console.log(message);


// switch(error.code) {
//   case 'EACCES':
//     console.error("some error message" + error.code);
//     break;
//   case 'EADDRINUSE':
//     console.error("different error" + error.code);
//     break;
//   default:
//     console.log("OK");
// }

// Truthy and Falsey

// console.log("null", Boolean(null)); // falsey
// console.log("A string", Boolean("my string")); // truthy
// console.log("zero", Boolean(0)); // falsey
// console.log("Empty string", Boolean('')); // falsey
// console.log("A number", Boolean(8)); // truthy
// console.log("undefined", Boolean(undefined)); // falsey
// console.log("NaN", Boolean("string" + 5)); // falsey
//
//
// var name = "Matthew";
// var name = '';
// var name = 0;
// console.log("NAME TEST:", Boolean(name));

// var userName = "keith";
//
// if(!userName) {
//   console.log("Please enter a username");
// }
//
// console.log(3 + "hello");
// console.log("route " + 6 + 6);
// console.log(6 + 6 + " route");

// console.log(2 != 2); // false
// console.log(2 != "2"); // false
// console.log(2 !== "2"); // true

var name;
if( !name ){
  console.log("Inside the if");
}
