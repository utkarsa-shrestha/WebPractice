function getRandomInteger(min, max) { //to generate a random number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let no_of_guesses = 1

random_number = getRandomInteger(1, 100)
console.log(random_number)

user_input = prompt("What do you guess! (Number should be in between 1 and 100)")
user_input = parseInt(user_input)

while(user_input != random_number){
    if(random_number < user_input){
        alert("The number you entered is greater than the desired number")
    }
    else{
        alert("The number you entered is less than the desired number")
    }
    user_input = prompt("Enter your number again")
    user_input = parseInt(user_input)

    no_of_guesses++
}
if(no_of_guesses == 1){
    alert("Are you cheating?? you guessed it right!")
}
else{
alert("You finally guessed it right !")
}
alert("It took you " + no_of_guesses + " tries !")