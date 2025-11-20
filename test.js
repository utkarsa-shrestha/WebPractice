let n =4;
const jpt = (n) =>{
    let ans= new Array(0);
    // let count = 0;

    for(i=0;i<=n;i++){
        if(i==0){ans.push('0')}
        else{
        binary = i.toString(2);


        let count = 0;
        for(j=0;j<binary.length;j++){
            if(binary[j] == '1'){
                count++
            
            }
        }
        ans.push(count.toString());
    }
}

    return ans;
};
console.log(jpt(n));