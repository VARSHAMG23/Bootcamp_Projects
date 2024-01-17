//Operators: Airthmetic ,Assignment,Logical

//Arithmetic Operators +,-,*,/,//,%
//Assigmnt Operators =,+=,*=,-=,/=,%=
//Comparison Operators ==,===,!=,!==,>,<,>=,<=,>=,
//logical Operators && || !

// var x=10;
// var y=10;

// //************Arithmetic Operator***************************/
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);
// console.log(x**y);
// x++;
// console.log(x);
//  //post increment
// // console.log(++x); //pre increment
// y--;
// console.log(y); //decrement

/* Assignment Operators */

// var x:number=100;
// var y:number=50;

// // x=x+y;
// console.log(x+=y);
// console.log(x-=y);
// console.log(x*=y);
// console.log(x/=y);
// console.log(x%=y);

interface Book
{
    //declaration 
    //by using interface we cant create any of the object 
    title:string;
    author:string;
    pages:number;
    read():void;
}

class Novel implements Book{
    //inside a class we are going to define the methods and initialize the variable 
    //by using class we can create object 
    title:string;
    author:string;
    pages:number;
    genre:string;
    
    sex:string;
    constructor(title:string,author:string,pages:number,genre:string,sex:string)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.genre=genre;
        this.sex=sex;
    }
    read()
    {
        console.log("************************************");
        console.log(`reading the ${this.genre}novel${this.title} by ${this.author} it contains ${this.pages} number of pages.`);
    }
}
const myNovel=new Novel("the lord of the Rings","J.R.R.Tolkien",1178,"fantasy","male");
myNovel.read();





//Array --> mutable in nature -> homogeneous and heterogeneous ->we can declared explicitly and implicitly also
let numberArray:number[]=[1,2,3,4];
numberArray.push(5);
// numberArray[2]=10;
console.log(numberArray[0]);
console.log(numberArray[1]);
console.log(numberArray[2]);
console.log(numberArray[3]);
console.log(numberArray[4]);

const mixedArray=["hello",3.14,false];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);

//tuple -->immutiple in nature -> heterogeneous 
let personTuple:[string,number,boolean]=["varshini",10,true];
console.log(personTuple[0]);
console.log(personTuple[1]);
console.log(personTuple[2]);
let updateTuple=[...personTuple,"updated"];


console.log(updateTuple[0]);
console.log(updateTuple[1]);
console.log(updateTuple[2]);
console.log(updateTuple[3]);
function getUserData():[string,number]{
    return ["janu",25];

}
let [name1,age]=getUserData();
console.log(name1,age);




