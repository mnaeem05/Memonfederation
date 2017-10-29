function calculate() {
     var a = +prompt("Please write any number.")
if (a < 0){
    alert("Sorry you've entered negative number.")
}
else (a > 0)
    document.write("<h2 id='box01'> Value of a: "+a+" </h2>");
++a
    document.write("<h2 id='box01'> Value of b: "+a+" </h2>");
}
    calculate();

function checkLeapyear(){
		//define variables
		var year = +prompt("Please enter any year.")
		//three conditions to find out the leap year
		if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
		{
        document.write("<h2 id='box01'> Yes "+year+" is a leap year. </h2>");  
		}
		else
		{
            document.write("<h2 id='box01'> No "+year+" is not a leap year. </h2>");		}
	}
checkLeapyear()


function triangeOne() {
var a = +prompt("Length of a ?")
var b = +prompt("Length of b ?")
var c = +prompt("Length of c ?")
// variables from user input then simple calculation
var s = (a + b + c) / 2 //6
var area =  Math.sqrt(s*(s - a)*(s - b)*(s - c))
// Math.sqrt is Square Root for Javascript Calculations
document.write("<h2 id='box01'> Area of triangle is "+area+" . </h2>");
}
triangeOne()

// Code by Muhammad Naeem