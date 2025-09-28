let first = prompt("Enter the first number")
first = parseInt(first)
let second = prompt("Enter the second number")
second = parseInt(second)
let third = prompt("Enter the third number")
third = parseInt(third)
let fourth = prompt("Enter the fourth number")
fourth = parseInt(fourth)
let fifth = prompt("Enter the fifth number")
fifth = parseInt(fifth)

const mean =(f, s, t, fo, fi) =>{
    let meanofnums = (f+s+t+fo+fi)/5
    return meanofnums
}

alert("The mean of the given numbers is " +  mean(first, second, third, fourth, fifth))