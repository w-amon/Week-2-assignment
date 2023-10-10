/*Write a JavaScript program that demonstrates how to convert JavaScript dates to numbers. Perform the following steps:

1. Declare a variable `currentDate` and assign it the current date and time using the `new Date()` constructor.
2. Use the `getTime()` method to convert `currentDate` to a number representing the number of milliseconds since January 1, 1970 (UNIX epoch time).
3. Display the converted number in the console.

Include comments to explain how you converted the JavaScript date to a number using the `getTime()` method.*/

var currentDate = new Date(); //Declare a variable and assign it the current date and time

var timestamp = currentDate.getTime(); //Use the 'getTime()' method to convert 'currentDate' to a number representing milliseconds since the UNIX epoch time

// Step 3: Display the converted number in the console
console.log("Timestamp:", timestamp);
