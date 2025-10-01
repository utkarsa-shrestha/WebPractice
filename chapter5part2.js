let num = [1, 2, 3, 4]

let num_square = num.map((value) =>{ //it creates a new array from the existing array after performing 
                                     //some operations
    return value * value
})

// console.log(num_square)

num_square = num.forEach((value, index, array) =>{
    console.log(value, index, array)
    return value *2 
})

const add = (a, b) =>{
    return a + b;
}
let add_array = num.reduce(add)
console.log(add_array)