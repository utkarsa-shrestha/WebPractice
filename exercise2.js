//Rock Paper Sissors
function getRandomInteger(min, max) { //to generate a random number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let index = getRandomInteger(0, 2)
let options = ["Rock", "Paper", "Scissors"]

let computer_generated = options[index]
console.log(computer_generated)

let user_input = prompt("Rock, Paper or Scissors?")

if(user_input == "Rock" && computer_generated == "Scissors"){
    alert("You win !!")
}
else if(user_input == "Paper" && computer_generated =="Rock"){
    alert("You win !!")
}
else if(user_input == "Scissors" && computer_generated == "Paper"){
    alert("You win !!")
}
else if(user_input == computer_generated){
    alert("Its a Draw")
}
else{
    alert("You lose")
}