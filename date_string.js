/*Create a JavaScript program that shows how to convert JavaScript dates to strings. Follow these instructions:

1. Declare a variable `eventDate` and assign it a specific future date and time using the `new Date()` constructor.
2. Use the `toLocaleString()` method to convert `eventDate` to a localized date and time string.
3. Display the converted string in the console.

Provide comments to explain how you converted the JavaScript date to a localized string using the `toLocaleString()` method.*/

var eventDate = new Date("2023-10-10T18:10:53"); //Declare a variable and assign it a specific future date and time

var localizedDateString = eventDate.toLocaleString(); //Use the 'toLocaleString()' method to convert 'eventDate' to a localized date and time string

console.log("Localized Date and Time:", localizedDateString); //Display the converted string in the console