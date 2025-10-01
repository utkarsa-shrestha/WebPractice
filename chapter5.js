
let fruits = ["apple", "banana", "mango", "grapes"];
for(let i=0; i<fruits.length;i++){
    console.log(fruits[i])
}

 let num = [1,2,3,4,5,6,7,8,9];
let b = num.toString();
console.log(b);
console.log(typeof b);//returns string

let c = num.join("-");
console.log(c);
console.log(typeof c);//returns string 

num.pop();
console.log(num);

let r = num.pop(); 
console.log(r);//returns popped element
console.log(num);//returns array after popping last element

let s = num.push(10);
console.log(s, num);//returns new length of array

console.log(num.shift());//returns shifted element
console.log(num);//returns array after shifting first element

console.log(num.unshift(1));//returns new length of array
console.log(num);//returns array after unshifting new element

let num_more = [10,11,12,13,14,15];

let new_array = num.concat(num_more);
console.log(new_array); //no changes to the previous arrays

num = num.concat(num_more);
console.log(num);

num.sort();
console.log(num);//sorts in ascending order alphabeticaly only


const compare = (a,b) => { //creating a compare function
    return a-b;
}
num.sort(compare);
console.log(num);



 num.splice(2,4,100,200,300);//(starting index, number of elements to be removed, elements to be addedS)
 console.log(num);


let new_array2 = num.slice(2);


console.log(new_array2);//(starting index, ending index(not included))

num.forEach((Element) =>{
    console.log(Element*Element);
})
for(i of num){
    console.log(i);//gives values of elements
}
for(i in num){
    console.log(i);//gives index of elements
}