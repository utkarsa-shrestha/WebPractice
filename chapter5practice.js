//qn1
let num = [1, 2, 3, 4]

let n = prompt("Enter a number")
n = parseInt(n)

num.push(n)
// console.log(num)

//qn2
while(n != 0){
    n = prompt("Enter the number again")
    n = parseInt(n)

    num.push(n)
}
console.log(num)

//qn3
let arra1y = [20, 33, 40, 50, 63, 43]

const Filter = (value) =>{
    return value%10==0
}

let new_array = arra1y.filter(Filter)
console.log(new_array)

//qn4
let square = num.map((value)=>{
    return value*value;
})
console.log(square)

//qn5
let array = []

let user_input = prompt("Enter no of terms")
user_input = parseInt(user_input)

for(i=1;i<=user_input;i++){
    array.push(i)
}

const fact = (a, b) =>{
    return a * b
}

let factorial = array.reduce(fact)

console.log(factorial)