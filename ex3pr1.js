const marks={
    harry : 50,
    utkarsa : 34,
    ram : 40
}
//for qn 1
for(let m in marks){
    console.log("The marks of " + m + " is " + marks[m])
}
 //for qn 2
for(i=0; i< Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
}