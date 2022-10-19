//zadatak 1.

let niz=[1,2,3,4,5,6,7,8,9,10];
let suma=0;

for(let i=0; i <niz.length ; i++){
    suma += niz[i];

}
console.log("The sum of first 10 natural numbers is: "+ suma);

// zadatak 2.
let n=4;
let cube=1; //ne moze biti 0 jer je u pitanju mnozenje

for(let i=1; i<=n; i++){
    cube= i*i*i;
    
}
console.log("Cube of number " + n + " is: " +cube);

// zadatak 3.


let broj=5;
let faktorijal=1;  //ne moze biti 0 jer je u pitanju mnozenje

for(let i =1; i<=broj; i++){
    faktorijal= faktorijal*i;
}
console.log("Factorial of "+broj+ " is: "+ faktorijal);

//zadatak 4

let arrayA=[1,2,4,5,9,10];

for(let i=0; i<arrayA.length;i++){
    if(arrayA[i]%2 ==0){
        console.log("Even numbers od array are: " + arrayA[i] + ". ");
    }
}

//zadatak 5

let number=246;
let sum=0;
let digit=0;

while(number>0){
    digit = number%10;
    sum += digit;
    number=(number - digit) /10;
}
console.log("Sum of digits is: "+sum + ".");

//zadatak 6
let digits=0;
let letters=0;
let rec="Abg26opa9";
let newArray=rec.split('');

for(let i=0; i<newArray.length; i++){
    if(newArray[i]=='1' || newArray[i]=='2' || newArray[i]=='3' || newArray[i]=='4' || newArray[i]=='5' || newArray[i]=='6'
    || newArray[i]=='7' || newArray[i]=='8' || newArray[i]=='9' || newArray[i]=='0'){
        digits++
    
        letters=(newArray.length)-digits;

    }
}
console.log("The number of letters in the string- "+ rec+ "-is: "+letters);



   //zadatak 7

   let nizArray=[1, 3, 32, '$', 'g',' h', 't', 's', 'c', 66, 23, 'h2'];
   let index=0;

   for(let i=0; i<nizArray.length;i++){
    if(nizArray[i] == 'c'){
        index= i+1;   //zato što indeksiranje krece od 0
    
    } 
    }
    console.log("The letter 'c' is in the position " + index + " in array.");

   
















