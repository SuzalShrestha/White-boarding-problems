let logBetween = (start, end,memo={}) => {
    if(start===end){
        console.log(start);
        return start;
    }    
    if(end in memo){
        return memo[end];
    } 
    memo[end]=logBetween(start,end-1,memo);
    console.log(end);
    return memo[end];

}
let logBetweenStepper= (start,end,step,arr=[]) => {
    for(let i=start;i<=end;i+=step){
        arr.push(i);
    }
    return arr;
}

let printReverse=(start,end,arr=[])=>{
    for(let i=end-1;i>start;i--){
        arr.push(i);
    }
    return arr;
}
let fizzBuzz=(end,arr=[])=>{
    for(let i=0;i<=end;i++){
        if(!(i%3===0 && i%5===0)){
            if(i%3===0 || i%5===0){
                arr.push(i);
            }
        }
    }
    return arr;
}
let isPrime=(num)=>{
    if(num<2){
        return false;
    }
    for(let i=2;i<num;i++){
        if(num%i===0){
            return false;
        }
    }
    return true;
}
let maxValue=(arr)=>{
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
let myIndexOf=(arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
};
let factorArray=(arr,num)=>{
    return arr.filter((el)=>num%el===0);
}
let oddRange=(end)=>{
    let arr=[];
    for(let i=1;i<=end;i+=2){
        arr.push(i);
    }
    return arr;
}
let reverseHyphenString=(string)=>{
    return string.split('-').reverse().join('-');
}
let intersect=(arr1,arr2)=>{
    let arr=[];

    for(let item of arr1){
        if(arr2.includes(item)){
            arr.push(item);
        }
    }
    return arr;
}
let mirrorArray=(arr)=>{
    return arr.concat(JSON.parse(JSON.stringify(arr)).reverse());
}
let removeVowels=(string)=>{
    let vowels=['a','e','i','o','u'];
    let arr=string.split('');
    let result=[];
    for(let item of arr){
        if(!vowels.includes(item)){
            result.push(item);
        }
    }
    return result.join('');
}
let abbreviate=(string)=>{
    let arr=string.split(' ');
    let result=[];
    for(let item of arr){
        if(item.length>4){
            result.push(removeVowels(item));
        }else{
            result.push(item);
        }
    }
    return result.join(' ');
}
let adults=(people)=>{
    return people.filter((person)=>person.age>=18);
}
let countScores=(people)=>{
    let obj={};
    for(let person of people){
        if(obj[person.name]){
            obj[person.name]+=person.score;
        }else{
            obj[person.name]=person.score;
        }
    }
    return obj;
}
let firstNPrimes=(n)=>{
    if(n<1){
        return [];
    }
    let i=2;
    let arr=[];
    while(arr.length!=n){
        if(isPrime(i)){
            arr.push(i);
        }
        i++;
    }
    return arr;
}
let peakFinder=(arr)=>{
    for(let item of arr){

    }
}
let divisibleByThreePairSum=(arr)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if((arr[i]+arr[j])%3===0){
                result.push([arr[i],arr[j]]);
            }
        }
    }
    return result;
}
let zipArray=(arr1,arr2)=>{
    let result=[];
    for(let i=0;i<arr1.length;i++){
        result.push([arr1[i],arr2[i]]);
    }
    return result;
}
let twoDimensionalTotal=(arr)=>{
    let result=0;
    for(let item of arr){
        result+=item.reduce((a,b)=>a+b);
    }
    return result;
}
let countInnerElement=(arr)=>{
let all=[];
let obj={};
    for(let item of arr){
        all=all.concat(item);
    }
    for(let item of all){
        if(obj[item]){
            obj[item]++;
        }else{
            obj[item]=1;
        }
    }
    return obj;

}
