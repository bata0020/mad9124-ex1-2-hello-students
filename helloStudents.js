'use strict'

const students = require('./students.json');

students.forEach( student => {
    console.log(`Hello ${student.firstName} ${student.lastName}`)
});

let chars = students.filter( item => {
    return item.lastName[0] === "D";
})

console.log(`Count of last names starting with D is ${chars.length}`);

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1