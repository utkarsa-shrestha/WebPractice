//qn1

let age = prompt("Enter your age:")
age = parseInt(age)

const ageconfirmation = (a) =>{
if(age < 18){
    alert("You cannot drive")
}
else{
    alert("You can drive")
}
}

//qn3
if(age < 0){
    console.error("Invalid age")
}
else{
    ageconfirmation(age)
}


//qn2

let confirmation = confirm("Do you want to see the prompt again?")

if(confirmation == true){
    age = prompt("Enter your age:")
    ageconfirmation(age)
}

//qn4

let num = prompt('Enter a number')
num = parseInt(num)

if(num > 4){
    location.href = "https://www.google.com"
}

//qn5
let bgcolor = prompt("Enter the color")
document.body.style.background = "yellow"