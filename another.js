let number = prompt("Enter the number"); 
number = parseInt(number); //converts the number into integer
let reverse = 0; //we created a variable reverse whose value is 0 to store the reverse number 
let orginal = number; //orginal variable created to compare the number with reverse

for(number; number > 0; number = Math.floor(number/10)){ /*
    math.floor function rounds of the value to the nearest integer
    Note: The value greater than .5 also rounds of to the lower integer, i.e. 0.9 rounds off to 0 not 1
    */
    reverse = reverse * 10 + number % 10; 
}


if(reverse == orginal){
    alert("The number is palindrome");
}
else{
    alert("The number is not palindrome")
}