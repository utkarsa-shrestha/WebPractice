let correct_no = 12; //here we declared the correct number 

let users_guess = prompt("Guess the number")//input from the user
users_guess = parseInt(users_guess) //convert the input into integer

if(users_guess==correct_no ){//create a condition, where if the first guess is right, we display "It is correct"
    alert("Congratulations you have guessed the correct number, are you cheating?")
}
else{//if the number is not correct and the result is false
    alert("You have failed") //first inform that it is not correct
    alert("Try again!!")


    while (users_guess != correct_no){//created a while loop to continously ask for the number until it is correct
        users_guess = prompt("Guess the number again")
        users_guess = parseInt(users_guess)//done the same thing as in line 3 and 4
        
        if(users_guess!=correct_no){ //if the number is still not correct, inform it is wrong
            alert("You are guessing it wrong")
        }
        else{
            break;
            //if it is finally correct, break the condition, now the condition is false hence the while loop is broken
        }
    }
    
    alert("You finally guessed it!")
}
