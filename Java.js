// Assignment No 14

// Question No 1

// function displayDateTime() {
//     var datetime = new Date();
//     console.log(datetime.toLocaleString()); 
// }
// displayDateTime();

// Question No 2

// function GreetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     console.log("Hello, " + fullName + "! Welcome!");
// }
// GreetUser("Ahsan", "Hussain");

// Question No 3

// function AddTwoNumbers() {
//     var num1 = +prompt("Enter The First Number: ");
//     var num2 = +prompt("Enter The Second Number: ");

//     var sum = num1 + num2;
//     console.log("The Sum of Two Numbers Is: " + sum);
// }
// AddTwoNumbers();

// Question No 4

// function calculator() {
//     var num1 = +prompt("Enter The First Number:");
//     var num2 = +prompt("Enter The Second Number:");
//     var operator = prompt("Enter An Operator ( +, -, *, / ):");
    
//     var result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 === 0) {
//                 result = "Error!";
//             } else {
//                 result = num1 / num2;
//             }
//             break;
//         default:
//             result = "Invalid Operator";
//     }

//     console.log("Result: " + result);
// }
// calculator();

// Question No 5

// function square(number) {
//     return number * number;
// }
// console.log(square(5));  


// Question No 6

// function factorial() {
//     var factorial = +prompt("Enter A Number To Calculate Its Factorial:");

//     if (factorial < 0) {
//         alert("Factorial Is Not Defined For Negative Numbers");
//         return;
//     }

//     var result = 1;

//     for (var i = 1; i <= factorial; i++) {
//         result *= i;
//     }

//     alert("The Factorial Of " + factorial + " Is: " + result);
// }
// factorial();

// Question No 7

// function displayCounting(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// var start = prompt("Enter The Start Number:");
// var end = prompt("Enter The End Number:");
// displayCounting(start, end);

// Question No 8

        // function calculateHypotenuse(base, perpendicular) {
        //     function calculateSquare(num) {
        //         return num * num;
        //     }

        //     var hypotenuseSquared = calculateSquare(base) + calculateSquare(perpendicular);
        //     var hypotenuse = Math.sqrt(hypotenuseSquared);
        //     return hypotenuse;
        // }
        // var base = prompt("Enter The Base Of The Triangle:");
        // var perpendicular = prompt("Enter The Perpendicular Of The Triangle:");
        // var hypotenuse = calculateHypotenuse(base, perpendicular);

        // document.write("The Hypotenuse Is: " + hypotenuse);

// Question No 9       

        // function calculateArea(width, height) {
        //     return width * height;
        // }

        // // i. Passing arguments as values
        // var area1 = calculateArea(5, 10); 
        // document.write("Area When Passing Values: " + area1 + "<br>");

        // // ii. Passing arguments as variables
        // var width = 7;
        // var height = 12;
        // var area2 = calculateArea(width, height);
        // document.write("Area When Passing Variables: " + area2);

// Question No 10

// function isPalindrome(str) {
//     var lowerStr = str.toLowerCase();
//     var reversedStr = lowerStr.split('').reverse().join('');
//     return lowerStr === reversedStr;
// }
//         var inputStr = prompt("Enter A Word:");
//         if (isPalindrome(inputStr)) {
//             document.write(inputStr + " Is A Palindrome.");
//         } else {
//             document.write(inputStr + " Is Not A Palindrome.");
//         }


// Question No 11

        // function capitalizeFirstLetter(str) {
        //     var words = str.split(' ');
        //     for (var i = 0; i < words.length; i++) {
        //         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        //     }
        //     return words.join(' ');
        // }

        // var inputStr = prompt("Enter A Sentence:");
        // var result = capitalizeFirstLetter(inputStr);
        // document.write("Converted String: " + result);


// Question No 12

// function findLongestWord(str) {
//             var words = str.split(' ');
//             var longestWord = '';

//             for (var i = 0; i < words.length; i++) {
//                 if (words[i].length > longestWord.length) {
//                     longestWord = words[i]; 
//                 }
//             }

//             return longestWord; 
//         }

//         var inputStr = prompt("Enter A Sentence:");
//         var result = findLongestWord(inputStr);
//         document.write("The Longest Word Is: " + result);

// Question No 13

// function countLetter(inputString, inputLetter) {
//     var count = 0; 
//     for (var i = 0; i < inputString.length; i++) {
//         if (inputString[i] === inputLetter) {
//             count++; 
//         }
//     }
//     return count; 
// }

// var inputString = prompt("Enter A String:");
// var inputLetter = prompt("Enter A Letter To Count:");

// var occurrences = countLetter(inputString, inputLetter);

// alert("The Letter '" + inputLetter + "' Occurs " + occurrences + " Times.");

// Question No 14

// 1-Function to calculate the circumference of a circle
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius; 
//     console.log("The Circumference Is " + circumference.toFixed(2)); 
// }

// // 2-Function to calculate the area of a circle
// function calcArea(radius) {
//     var area = Math.PI * radius * radius; 
//     console.log("The Area Is " + area.toFixed(2)); 
// }

// var radius = +prompt("Enter The Radius Of The Circle:");

// calcCircumference(radius);
// calcArea(radius);

