/**
 * Using decorator pattern in JS we can attach additional
 * logic/capability to an exisitng function
 * 
 */
let capitalize = (str) => {
    return str.toUpperCase();
}

// console.log(capitalize(" abcdef "));


// we want to augment our capitalize function and also add the 
// capability to trim the spaces around the string.

// So let's create trim_decorator for that purpose

const trim_decorator = (callback) => {
    return (str) => {
        const trimmed_arg = str.trim();
        return callback(trimmed_arg);
    }
}

// Let's get the trim decorated verion of capitalize
capitalize = trim_decorator(capitalize);

// console.log(capitalize("   xyz    "));



// Now let's add second decorator to remove all the number from the string

const digit_removal_decorator = (callback) => {
    return (str) => {
        const string_without_digits = str.replace(/\d/g, '')
        return callback(string_without_digits)
    }
}

// now let's add this second decorator to the capitalized method

capitalize = digit_removal_decorator(capitalize);

// console.log(capitalize('   121pqrsT34343   '));
