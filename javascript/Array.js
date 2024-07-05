

let marks=[20,30,40,50,60]
console.log(marks);
console.log(marks.length);



let heroses=["ironman", "thor", "hulk", "shaktiman"]

for(let i=0; i<heroses.length; i++){
    console.log(heroses[i]);
}



let cities=["jaipur" , "pune", "mumbai"]

for(let city of cities){
    console.log(city.toUpperCase())
}

//program to find the average number of array

let mark=[40,70,90,67,89]
let sum=0;

for(let val of mark){
    sum=sum+val
}
let avg=sum/mark.length;
console.log(`avg marks of the class=${avg}`);

//
let items=[250,645,300,900,50];

for(let i=0; i<items.length; i++){
    let offer= items[i]/10;
    items[i]-=offer;
}
console.log(items)

let FoodItems=["apple","mango","tomato"]
FoodItems.push("bannana");
FoodItems.pop("apple");
console.log(FoodItems);

let grade=["30","60","25","45"]
console.log(grade);
console.log(grade.toString());