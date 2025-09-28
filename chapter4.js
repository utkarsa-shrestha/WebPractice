//Chapter four exercise 1
console.log("Hello\"".length)// This will print 6 instead of 7 as \ is a escape sequence character

//include funtion in js

let sentence = "Hello world"
let word = "world"
console.log(`The word ${word} ${sentence.includes(word) ? "is" : "is not"} in the sentence `)
//the include funtion returns true or false if the word/string is included or not included in the other  string

//startswith and endswith function
 let mynamename = "Utkarsa Shrestha"
 console.log(mynamename.startsWith("Utkarsa"))
 console.log(mynamename.endsWith("Shrestha"))

 //qn 3
let string = "UTKARSA"
console.log(string.toLowerCase(string))

//to extract something
let instruction = "The name of the client is Utkarsa"
console.log(instruction.slice("The name of the client is ".length))