let n = 31052022;
// Write solution code here to find the lucky number

let sum = 0;
let sum2 = 0;
while(n!= 0){
    
    sum=sum + (n % 10);
   
        sum2 = sum2 + (sum % 10);
        sum = sum / 10;
    
    n = n /10;
  
    
}



console.log(`Your Lucky Number is ${sum}`);
console.log(`Your Lucky Number is ${sum2}`);
    