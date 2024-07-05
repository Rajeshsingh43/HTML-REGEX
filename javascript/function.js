// // 1. program to write Number is prime or Not 

// // function PrimeNotprime(n){
// //     for(let i=2;i<n; i++){
// //         if(n%i==0){
// //             return 1;
// //         }
// //     }
// //     return 0;
        
// //         }
          

// //  ans =PrimeNotprime(7);
// //  if(ans==0){
// //     console.log("prime Number")
// //  }
// //  else{
// //     console.log("not prime Number")
// //  }

// //  2. function Output(){
// //     return 10,20,30;
// // }
// // let ans=Output()
// // console.log(ans)


// //Program to write 

// // function PrimeNotprime(n)
// // {
// //     for(let i=1;i<n;i++){
// //         let flag=0;
// //         for(let j=2;j<n;j++){
// //             if(i%j==0){
// //                 flag=1;
// //             }
// //         }
// //         if (flag==0){
// //             console.log(i);
// //         }
// //     }
// // }
// // PrimeNotprime(300);

// function ArmstrongNumber(n){
//     let temp=n;
//     let freq=0;
//     while(temp!=0){
//         temp=parseInt(temp/10);
//         freq++;
//     }
//     let sum=0;
//     while(n!=0){
//         let rem=n%10;
//         sum =sum +rem**freq;
//         n=parseInt(n/10);
//     }
// return Sum;

// }
// let ans = ArmsstrongNumber(1648);
// console.log(ans)


// let strong=(n)=> {
//     let sum=0;
//     while(n!=0){
//         let fact =1;
//         let rem=n%10;
//         for(let i=rem;i>=1;i--){

//         }
//         sum+=fact;
//         n=parseInt(n/10);
//     }
//     return sum;
// };

// let ans = strong(40586)
// console.log(ans);


// function myFunction(msg) {
//     // console.log("hello world")
//     console.log(msg)
// }

// myFunction("js")

// function sum(x,y){
//     console.log(x+y);
// }
// sum(90,9000)


// function sum(x,y){
//     s=x+y
//     return s;
// }
// let val=sum(3,5)
// console.log(val);

// ArrowFunctions in javascript

// let ArrowSum=(a,b)=>{
//     console.log(a+b);
// };
// ArrowSum(3,5)


// let Arrowmul=(a,b)=>{
//     console.log(a*b);
// };
// ArrowSum(3,5)

// let Arrowmulti=(a,b)=>{
//     return a * b;
// };
// Arrowmulti(5,8)


// const printhello=()=> console.log("js is easy")

// printhello()

//program to count the vowels in given string...

// function countvowels(str){
//     let count =0;
//     for(const char of str){
//         if(char==="a" || char==="i" ||char==="o"|| char==="e"|| char==="u"){
//                 count++;

//         }
//     }
//         console.log(count);
    
// }

// //using arrow function find given string vowels..

// countvowels("rajesh")

// const countvow=(str)=>{
//     let count =0;
//     for(const char of str){
//         if(char==="a" || char==="i" ||char==="o"|| char==="e"|| char==="u"){
//                 count++;

//         }
//     }
//         console.log(count);
    
// }

// countvow("akash singh")


//for Each Function
//  let arr=["pune","jaipur","Mumbai"];

//  arr.forEach((val,idx, arr)=>{
//     console.log(val.toUpperCase(),idx, arr);

//  });

//program to write square array of given number

// let nums=[35,65,79,91];
// nums.forEach((num) => {
//     console.log(num*num);
    
// });


//Map Function

// let nums=[65,78,90,89]
//  let newArr=nums.map((val)=>{
//    return val*val

//  });
//  console.log(newArr);

//  console.log(nums);

//filter Function

// let arr=[1,2,3,4,5,6]

// newarr=arr.filter((val)=>{
//     // return val%2!=0;
//     // return val>3
// })
// console.log(newarr);

//Reduce Function

// let arr=[1,2,3,4,5,6,7,8,500]

// const output=arr.reduce((prev ,curr)=>{
//     // return prev+curr;
//     // return prev<curr? prev: curr;
//     return prev>curr? prev: curr;
   
// })
// console.log(output);

// let marks=[95,78,90,67,48,77,34,56,]

// let toppers =marks.filter((val)=>{
//     return val>80
// })
// console.log(toppers);

let n=prompt("enter a number:");

let arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);




