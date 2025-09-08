// const arr = [];

const arr = ["anmol","abhishek"];


// console.log(arr);

//push
arr.push("sawan");
console.log(arr);  //anmol,abhishek,sawan,

//pop
arr.pop();
console.log(arr); //anmol,abhishek

//shift
arr.shift();
console.log(arr); //abhishek

//unshift
arr.unshift("himanshu");
console.log(arr); //himanshu,abhishek

let numArr = [1,2,3,4,5];

//map
const arr2 = numArr.map((x) => x * 2 );
console.log(arr2);

//filter
const arr3 = numArr.filter((x) => x > 2);
console.log(arr3);


//reduce 
const arr4 = numArr.reduce((acc,cur,ind) => {
    return acc + cur
},0)

console.log(arr4);
