// Set Data Stuctures.

// Let's say you have to store only unique numbers, how would you do it.

const mySet = new Set();
mySet.add(1);
mySet.add(2);

if(!mySet.has(2)) {
    mySet.add(2); // Not added as duplicate
}


console.log(mySet.size) // 2



// Map Data structure
// Used to create key-value pairs for any data type.

const myMap = new Map();