"use strict";
class Novel {
    constructor(title, author, pages, genre, sex) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.genre = genre;
        this.sex = sex;
    }
    read() {
        console.log("************************************");
        console.log(`reading the ${this.genre}novel${this.title} by ${this.author} it contains ${this.pages} number of pages.`);
    }
}
const myNovel = new Novel("the lord of the Rings", "J.R.R.Tolkien", 1178, "fantasy", "male");
myNovel.read();
let numberArray = [1, 2, 3, 4];
numberArray.push(5);
console.log(numberArray[0]);
console.log(numberArray[1]);
console.log(numberArray[2]);
console.log(numberArray[3]);
console.log(numberArray[4]);
const mixedArray = ["hello", 3.14, false];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
let personTuple = ["varshini", 10, true];
console.log(personTuple[0]);
console.log(personTuple[1]);
console.log(personTuple[2]);
let updateTuple = [...personTuple, "updated"];
console.log(updateTuple[0]);
console.log(updateTuple[1]);
console.log(updateTuple[2]);
console.log(updateTuple[3]);
function getUserData() {
    return ["janu", 25];
}
let [name1, age] = getUserData();
console.log(name1, age);
//# sourceMappingURL=operators.js.map