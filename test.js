let num =prompt("Enter no of terms ")
num = parseInt(num);

let array = []; //initialized an empty array
for(let i =0; i < num;i++){
    array.push(i+1); //used push to add elements in the array
}

array.forEach((Element) =>{
    console.log(Element*Element);
})