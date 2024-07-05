//types of function












3.immediatelty invoked function

a) var result=(function(a,b){
 return a+b;
})(3,5);
console.log(result);

b) let result=((a,b)=>{
    return a+b;
   })(3,5);
   console.log(result);

c) const result=((a,b)=>{
    return a+b;
   })(3,5);
   console.log(result);