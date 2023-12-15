// 30/11/23 FUNCTIONS

//named function
function multiply(n1,n2){
    sum=n1*n2;
    console.log(sum);
}
multiply(5,9);

//Anonymous function
var sum=function(n1,n2){
    add=n1+n2;
    console.log(add);
}
sum(5,10);

//arrow function
var sub=(n1,n2)=>{
    res=n1-n2;
    console.log(res);
}
sub(15,11);
//IIFE function
( (n1,n2)=>{
    console.log(n1+n2);
})(2,3);

/* Array Methods */

var a=["hi",1,"hello",3.6] //array
console.log(a);
 
// length
console.log(a.length);

// push
a.push("Varsha");// adds new element at the end
console.log(a);

//pop
a.pop();// removes element at the end 
console.log(a);

//shift
a.shift();// removes starting element 
console.log(a);

//unshift
a.unshift("Varshamg");// adds new element at the beginning
console.log(a);

//splice
a.splice(0,1,'Meera');
//a.splice(1,1);
console.log(a);

//sort
a.sort()
console.log(a);
var b=[22,33,111]
console.log(b.sort()); //reads only frst char

var b=b.sort(function(a,b){
    return a-b;
})
console.log(b);//ascending order

var b=b.sort(function(a,b){
    return b-a;
})
console.log(b);//descending order

//reverse
console.log(a.reverse());

//find
var b=[22,33,111]
var less=(b)=>{
    if (b >12)
    return b;
}
console.log(b.find(less));
console.log(b.includes(22));
 let total =0
 var total_count=(b)=>{
     total=total+b;

 }
 b.forEach(total_count)
 console.log(total)




