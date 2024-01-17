
// configure type script compiler-tsc --init
//Debugging typescript Applications
//Fundamentals The any type, Arrays, Tuples, Enums, Functions, Objects
//Built in types- any unknown never enum and tuple

let sales: number =123_456_789;  //you can remove annotation
let course: string = 'TypeScript';
let is_published: boolean = true;
let level; // this variable is type any
// level =1;
// level='a';

// function render(document){
//     console.log(document);
// }

// Arrays

// let car:string[] = [];
// car.push('a');
// console.log(car);


// let car:string[] = [];
// car.push(3);//Argument of type 'number' is not assignable to parameter of type 'string'
// console.log(car);

// let car=["Mango"];
// car.push('a');
// car.push(4); //Argument of type 'number' is not assignable to parameter of type 'string'.
// console.log(car);

//Tuples

// let student:[number,string];
// student=[20,"Vrana"]
// console.log(student);

// let student:[number,string]; 
// student=["Vrana",20]; //Type 'string' is not assignable to type 'number'.
// console.log(student);


// let student:[number,string]=[20,"Vrana"];
// console.log(student);

//destructuring

// let student:[x:number,y:number]=[20,22];
// console.log(student);

// let student:[number,number]=[20,22];
// let [x,y]=student;
// console.log(student);

//Objects
// let student:{sname:string,roll_no:number,section:string}={
//     sname:"Varsha MG",
//     roll_no:51,
//     section:'A'
//     };
//     console.log(student);

//Type Infernce

// let student:{sname:string,roll_no:number,section:string}={
//     sname:"Varsha MG",
//     roll_no:51,
//     section:'A'
//     };
//     student.sname="Varsha Gowda"
//     //student.roll_no="51" Type 'string' is not assignable to type 'number'.
//     console.log(student)


//optional property

// let student:{age:number,sname:string,roll_no:number,section:string}={//Property 'age' is missing in type '{ sname: string; roll_no: number; section: string; }
//     sname:"Varsha MG",
//     roll_no:51,
//     section:'A'
//     };
//     student.age=23;
//     console.log(student)

// let student:{age ?:number,sname:string,roll_no:number,section:string}={//Property 'age' is missing in type '{ sname: string; roll_no: number; section: string; }
//     sname:"Varsha MG",
//     roll_no:51,
//     section:'A'
//     };
//     student.age=23;
//     console.log(student)

//Index Signature

// let user:{[index:string]:string}={};
// user.Varsha='A'
// user.Spoorthi='B'
// user.Skandana='C'
// //user.Smitha="25" Type 'string' is not assignable to type 'number'
// console.log(user)


//TypeScript Enums
// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.

//by default starts with 0

// enum rank{
//     Varsha=1, set value to auto increnment
//     Spoorthi,
//     Skandana,
//     Srujan
// }

// let topper=rank;
// console.log(topper)

// enum rank{
//     Varsha=400, fully initailised
//     Spoorthi=200,
//     Skandana=468,
//     Srujan=420
// }

// let topper=rank;
// console.log(topper)

//String enum
// enum rank{
//     Varsha="Good",
//     Spoorthi="Good",
//     Skandana="Good",
//     Srujan="Good"
// }

// let topper=rank;
// console.log(topper)

// TypeScript Type Aliases and Interfaces
// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

// type Sname=string;
// type Sroll=number;
// type Sage=number;
// type Ssection=string;
// type Student={
//     name:Sname;
//     roll:Sroll;
//     age:Sage;
//     section:Ssection;

// }
// const stuname="Varsha";
// const sturoll=23;
// const stuage=23;
// const stusection='A';
// const Class={
//     name:stuname,
//     roll:sturoll,
//     age:stuage,
//     section:stusection
// }
// console.log(Class);

//Interfaces- unimplemented methods are declared , we use arrow or normal function, variables no logic  only declarartion

// interface Student{
//     sname:string,
//     sroll:number,
// };

// interface Teacher extends Student{
//     dept:string
// };

// const student:Teacher={
//     sname: "Mira",
//     sroll:23,
//     dept:"CS"
// }
// console.log(student);

//Union types
// Union types are used when a value can be more than a single type.

// function sample(roll_no: string|number){
//     console.log(`My Roll number is ${roll_no}`);
// }
// sample(51);
// sample('1');

//Functions

// function getTime(): number {
//     return new Date().getTime();
//   }
  
//   console.log(getTime());

// function printHello(): void {
//     console.log('Hello!');
//   }
//   printHello();


//Add two numbers

// function add(x: number, y: number){
//     return x + y
// }
// console.log(add(1, 2));

//Default parameter

// function add(x: number, y: number=10){
//     return x + y
// }
// console.log(add(1));

//Named parameter

// function div(divisor: number, divident: number=5){
//     return divisor/ divident
// }
// console.log(div(10));

//RestParameter
// function add(x: number, y: number,...rest:[number, number]){
//     return x + y+ rest[];
// }
// console.log(add(1,2,3,4));

//Negate Values
// type Negate = (value: number) => number;
// const negateFunction: Negate = (value) => value * -1;
// console.log(negateFunction(12));

//Casting with as and <>

// let car:unknown = "Omini";
// console.log(car as string);
// console.log((<string>car).length);


//Classes
// create a class with feilds/members/properties
// class Student{
//     name:string;
//     age:number;
    
//     constructor(){
//         this.name = " ";
//         this.age=0;
//     }
//     schoolMessage(){
//         console.log("Student name is :"+this.name+" " +"Student age is:"+this.age); 
//     } 
// }

// //create object for this class
// const student_class=new Student();
// student_class.name="Vinay";
// student_class.age=23;
// student_class.schoolMessage();
// //object of class
// const student_class_1=new Student();
// student_class_1.name="Vidya";
// student_class_1.age=22;
// student_class_1.schoolMessage();

// //Inheritence

// class calci{
//     num_1:number;
//     num_2:number;

//     constructor(){
//         this.num_1=0
//         this.num_2=0;
//     }

// }


// class add extends calci{

// operations(){
//  console.log("Sum of two number is " + (this.num_1+this.num_2));

// }
// }
// const calculation=new calci();
// const sum=new add(); //create object for child
// sum.num_1=4;
// sum.num_2=5;
// sum.operations();


// class fruit{
//     color:string;
//     name:string;

//     constructor(){
//         this.color=" ";
//         this.name=" ";
//     }

//     varities() {console.log("Seasonal fruits:" + this.name+" " +this.color);
// } 
    
// }

// const fruits=new fruit();
// fruits.color="Organe";
// fruits.name="Mango";
// fruits.varities();


//Constructor  Method

class a{
    constructor(x:number, y:number);
    constructor(x:any, y:any){
        console.log(x+y);
        
    }
}
const obj= new a(10,20);

