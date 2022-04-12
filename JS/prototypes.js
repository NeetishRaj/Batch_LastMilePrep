/**
 * We use prototype for two things mainly in JS
 * 
 * 1. To study the prototype chain and find out the inheritiance hierarchy
 * 
 * 2. To create Extension Functions to exisitng classes
 * To extend existing classes using prototype property
 * 
 */


const str = "Hi how are you doing";

// console.log(str.toUpperCase())
// console.log(str.charAt(2));

// Using prototypes we can add new methods/properties to String class

String.prototype.count_of_vowels = function() {
    let  vowel_count = 0;
    let str = this.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
            vowel_count++;
    }

    return vowel_count;
}


const str1 = "aeiouAEIOUABCDEF";

console.log(str1.count_of_vowels());