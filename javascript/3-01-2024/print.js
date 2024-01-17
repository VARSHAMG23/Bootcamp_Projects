{/* <p id="icon">Banglore Days</p> */}
var arr=[10,20,30,40,50];
var arr1=arr; // it will effect original array
arr.splice(1,2,3);
console.log(arr1); // o/p: [ 10, 40, 50 ]
console.log(arr);
