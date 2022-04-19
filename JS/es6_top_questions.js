// Block scope

// {} represents a block in JS, let & const support block scope whereas var doesn't
{
    let a = 10;
    const b = 20;

    var c = 30; //
}
// console.log(a); //undefined
// console.log(b); //undefined
console.log(c); //30



// Arrow function syntax variations

// const multiply_by_10 = x => x * 10; 
// const multiply_by_10 = (x) => x * 10; 
// const multiply_by_10 = (x) => { return x * 10; } 



// In JS there are 3 ways to work with strings 1. double quotes(""), single quotes('') and back-quotes(``)

const name = 'ram';
const dept = "sales";
const str = `${name} works in ${dept}`; 

console.log(str);


// Property shorthand
const x = 1, y = 2;

// const obj = {
//     x: x,
//     y: y
// }

// const obj = {
//     x,
//     y
// }


// In JS there are 2 ways to access a property
const obj = {
    value1: 10,
    value2: 20,
} 

obj.value1 // 10
obj['value' + '1'] // 10