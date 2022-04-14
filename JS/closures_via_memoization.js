

const memoize_decorator = (fn) => {
    const cache = {};

    return (num) => {
        if(num.toString() in cache) {
            console.log("From cache");
            return cache[num.toString()]
        } else {
            // Do fresh calculation and add it to the cache as well
            let result = fn(num);
    
            cache[num.toString()] = result;
            console.log("Fresh calculation");

            return result;
        }
    }
}

let add_to_10 = (num) =>{
    return num + 10;
}

add_to_10 = memoize_decorator(add_to_10);


console.log(add_to_10(5))
console.log(add_to_10(5))
console.log(add_to_10(5))
console.log(add_to_10(5))
console.log(add_to_10(9))
console.log(add_to_10(9))


// let mult_to_10 = (num) =>{
//     return num * 10;
// }

// mult_to_10 = memoize_decorator(mult_to_10);


// console.log(mult_to_10(5))
// console.log(mult_to_10(5))
// console.log(mult_to_10(5))
// console.log(mult_to_10(5))
// console.log(mult_to_10(9))
// console.log(mult_to_10(9))