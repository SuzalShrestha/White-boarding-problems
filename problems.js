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
let twoDiff=(arr)=>{
    let result=[];
    if(arr.length===0) return [];
    for(let item of arr){
        if(arr.includes(item+2)){  
            result.push([arr.indexOf(item),arr.indexOf(item+2)]);
        }
        if(arr.includes(item-2)){
            result.push([arr.indexOf(item),arr.indexOf(item-2)]);
        }
    }
    return result;
}
let arrayDiff=(arr1,arr2)=>{
    let result=[];
    for(let item of arr1){
        if(!arr2.includes(item)){
            result.push(item);
        }
    }
    console.log(result);
}
let valueCounter=(obj,val)=>{
    if(typeof obj!=='object'){
        return 0;
    }
    let count=0;
    for(let key in obj){
        if(obj[key]===val){
            count++;
        }
    }
    return count;
}
let elementCount=(arr)=>{
    let obj={};
    for(let item of arr){
        if(obj[item]){
            obj[item]++;
        }else{
            obj[item]=1;
        }
    }
    return obj;
}
let nextTwoPrimes=(num)=>{
    let arr=[];
    let i=num+1;
    while(arr.length<2){
        if(isPrime(i)){
            arr.push(i);
        }
        i++;
    }
    return arr;
}
let pairProduct=(arr,num)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]*arr[j]===num){
                result.push(i,j);
            }
        }
    }
    return result;
}
let twoDimensionalSize=(arr)=>{
    let length=0;
    for(let item of arr){
        length+=item.length;
    }
    return length;
}
let longWordCount=(string)=>{
    let arr=string.split(' ');
    let count=0;
    for(let item of arr){
        if(item.length>7){
            count++;
        }
    }
    return count;
}


let factorial=(num)=>{
    if(num===0) return 1;
    if(num===1) return 1;
    return num*factorial(num-1);
}
let lcm=(num1,num2)=>{
    let max=Math.max(num1,num2);
    let min=Math.min(num1,num2);
    for(let i=1;i<=min;i++){
        if(max*i%min===0){
            return max*i;
        }
    }
}
let hipsterfyWord=(string)=>{
    let arr=string.split('');
    let vowels="AEIOUaeiou";
    for(let i=arr.length-1;i>=0;i--){
        if(vowels.includes(arr[i])){
            arr.splice(i,1);
            return arr.join('');
        }
    }
    return arr.join('');
}
let hipsterfySentence=(string)=>{
    let arr=string.split(' ');
    let result=[];
    for(let item of arr){
        result.push(hipsterfyWord(item));
    }
    return result.join(' ');
}
let objectToString=(obj)=>{
    let result=[];
    for(let key in obj){
        for(let i=0;i<obj[key];i++){
            result.push(key);
        }
    }
    return result.join('');

}
let shortestWord=(sentence)=>{
    let arr=sentence.split(' ');
    let min=arr[0];
    for(let item of arr){
        if(item.length<min.length){
            min=item;
        }
    }
    return min;
}
let greatestCommonFactor=(num1,num2)=>{
    let max=Math.max(num1,num2);
    let min=Math.min(num1,num2);
    for(let i=min;i>=1;i--){
        if(max%i===0&&min%i===0){
            return i;
        }
    }
}
let isPassing=(assessments)=>{
    let total=0;
    for(let item of assessments){
        total+=item.score;
    }
    return total/assessments.length>=70;
}
let valueConcat=(array,obj)=>{
    let result=[];
    for(let item of array){
        if(obj[item]){
            result.push(item+obj[item]);
        }else{
            result.push(item);
        }
    }
    return result;
}
let threeInARow=(arr)=>{
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]===arr[i+1]&&arr[i]===arr[i+2]){
            return true;
        }
    }
    return false;
}
let variableNameify=(words)=>{
    let result=[];
    for(let item of words){
        result.push(item.toLowerCase());
    }
    for(let i=1;i<result.length;i++){
        result[i]=result[i].charAt(0).toUpperCase()+result[i].slice(1);
    }
    return result.join('');
}
let threeIncreasing=(arr)=>{
    for(let i=0;i<arr.length-2;i++){
        if(arr[i]+1===arr[i+1]&&arr[i]+2===arr[i+2]){
            return true;
        }
    }
    return false;
}
let reverse2D=(arr)=>{
    let result=[];
    for(let item of arr){
        result.unshift(item.reverse().join(''));
    }
    return result.join('');
}
let reverb=(string)=>{
    let vowels="AEIOUaeiou";
    for(let i=string.length-1;i>=0;i--){   
        if(vowels.includes(string[i])){
            return string+string.slice(i);
        }
    }
    return string;
}
let countRepeats=(string)=>{
    let arr=string.split('');
    let obj=countInnerElement(arr);
    let count=0;
    for(let key in obj){
        if(obj[key]>1){
            count++;
        }
    }
    return count;
}
let pairsToString=(arr)=>{
    let result=[];
    for(let item of arr){
        for(let i=0;i<item[1];i++){
            result.push(item[0]);
        }
    }
    return result.join('');
}
let countAdjacentSums=(arr,num)=>{
    let count=0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]+arr[i+1]===num){
            count++;
        }
    }
    return count;
}
let signFlipCount=(arr)=>{
    let count=0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]*arr[i+1]<0){
            count++;
        }
    }
    console.log(c) ;
}
let powerSequence=(base,length)=>{
    let result=[base];
    for(let i=0;i<length-1;i++){
        result.push(result[result.length-1]*base);
    }
    return result;
}
let collapseString=(string)=>{
    let result=[];
    for(let i=0;i<string.length;i++){
        if(string[i]===string[i+1]){
            continue;
        }
        result.push(string[i]);
    }
    return result.join('');
}
let oddWordsOut=(string)=>{
    let arr=string.split(' ');
    let result=[];
    for(let item of arr){
        if(item.length%2===0){
            result.push(item);
        }
    }
    return(result.join(' '));
}
let mindPsAndQs=(string)=>{
    let psAndQs='pPqQ';
    let longestStreak=0;
    let currentStreak=0;
    for(let item of string){
        if(psAndQs.includes(item)) currentStreak++;
        else currentStreak=0;
        if(currentStreak>longestStreak) longestStreak=currentStreak;
        
    }
    return longestStreak;
}
let commonFactors=(num1,num2)=>{
    let max=Math.max(num1,num2);
    let min=Math.min(num1,num2);
    let result=[];
    for(let i=1;i<=min;i++){
        if(max%i===0&&min%i===0){
            result.push(i);
        }
    }
    return result;
}
let commonPrimeFactors=(num1,num2)=>{
    let max=Math.max(num1,num2);
    let min=Math.min(num1,num2);
    let result=[];
    for(let i=2;i<=min;i++){
        if(isPrime(i)){
            if(max%i===0&&min%i===0){
                result.push(i);
            }
        }
       
    }
   return result;
}
let splitHalfArray=(arr)=>{
    let mid=Math.floor(arr.length/2);
    if(arr.length%2!==0){
        arr.splice(mid,1);
    }
    return [arr.slice(0,mid),arr.slice(mid)];
    
}
