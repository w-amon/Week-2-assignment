/*Write a JavaScript program that illustrates explicit type conversion to a boolean. 
Complete the following steps:
1. Declare a variable `truthyValue` and assign it a truthy value, e.g., `"Hello"`.
2. Declare a variable `falsyValue` and assign it a falsy value, e.g., `0`.
3. Use explicit type conversion to convert `truthyValue` to a boolean using the `Boolean()` function.
4. Use explicit type conversion to convert `falsyValue` to a boolean using the `Boolean()` function.
5. Display the converted boolean values in the console.*/

var truthyValue = "Hello"; //Declare a variable and assign it a truthy value


var falsyValue = 0; //Declare a variable and assign it a falsy value

var convertedTruthyValue = Boolean(truthyValue); //Use explicit type conversion to convert 'truthyValue' to a boolean using 'Boolean()' function

var convertedFalsyValue = Boolean(falsyValue); //Use explicit type conversion to convert 'falsyValue' to a boolean using 'Boolean()' function

//Display the converted boolean values in the console
console.log("Converted Truthy Value:", convertedTruthyValue);
console.log("Converted Falsy Value:", convertedFalsyValue);
