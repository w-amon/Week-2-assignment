/*Question 1: Convert to Number Explicitly (15 points)*/
/*A JavaScript program that showcases explicit type conversion to a string.*/

var num = 20; //Declare a variable(num) and assign it a numerical value(20)

var convertedString = String(num); //explicit conversion of 'num' to string using the 'String()' function

console.log("Converted String:", convertedString); //Display the converted string in the console


/*Question 2: Convert to String Explicitly (15 points)*/

/* A JavaScript program that demonstrates explicit type conversion to a number.*/

var numberStr = "20"; //Declare a variable (numberStr) and assign it a string value

var convertedNumber = Number(numberStr); //Convert 'numberStr' to a number using the 'Number()' function

console.log("Converted Number:", convertedNumber); //Display the converted number in the console


/*Question 3: Convert to Boolean Explicitly (15 points)*/
/*Write a JavaScript program that illustrates explicit type conversion to a boolean.*/

var truthyValue = "Hello"; //Declare a variable and assign it a truthy value


var falsyValue = 0; //Declare a variable and assign it a falsy value

var convertedTruthyValue = Boolean(truthyValue); //Use explicit type conversion to convert 'truthyValue' to a boolean using 'Boolean()' function

var convertedFalsyValue = Boolean(falsyValue); //Use explicit type conversion to convert 'falsyValue' to a boolean using 'Boolean()' function

//Display the converted boolean values in the console
console.log("Converted Truthy Value:", convertedTruthyValue);
console.log("Converted Falsy Value:", convertedFalsyValue);
