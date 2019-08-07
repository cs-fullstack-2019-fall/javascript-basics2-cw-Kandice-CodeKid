// # JavaScript-Basics2-CW
//
// ### Question 1
// Create two variables. One should equal “My name is: “ and the other should equal your name. Print the two variables in one print message.
var Myname = prompt("My Name is")
alert("My name is: " + Myname);
//




//     ### Question 2
// Ask the user “What is your balance”. Make sure to save that answer in a variable balance. Subtract 10 from that balance. Print "You lost $10. Your new balance is: [THE BALANCE]".
var userBal = parseInt(prompt("What is your balance?"));
var lessTen = (userBal - 10);
alert("You loss $10. Your new balance is " + lessTen);



//     ### Question 3
// Create a variable. Ask the user to “Enter your number grade”. Ask the user “Enter your extra credit". Print the grade plus extra credit.
var userGrade = parseInt(prompt("Enter your number grade"));
var extrCredit =parseInt(prompt("Enter your extra credit"));
alert(" Your grade + extra credit is " + (userGrade + extrCredit));

//
// ### Question 4
// Create a variable called balance and save it after asking the user “What is your balance?”. Create a variable called deduction and save it when asking the user “How much do you want to deduct?” Print the remaining balance after subtracting the deduction.
var balance = parseInt(prompt("What is your balance?"));
var deduction = parseInt(prompt("How much do you want to deduct?"));
alert("Your New Balance is " + (balance - deduction))