function get_the_milk() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Got the milk!');
            resolve(2);
        }, 3000);
    });
    
    return promise;
}


function boil_the_milk(milk_quantity) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Boiled ${milk_quantity} litres milk!`);
            // reject(" Overboiled the milk and made a mess");
            resolve();
        }, 3000);
    });
    
    return promise;
}

// get_the_milk()
//     .then((milk_quantity) => {
//         console.log(`Milk quantity is ${milk_quantity} Litres `);
//         return boil_the_milk(milk_quantity);
//     })
//     .then(() => {
//         console.log("Coffee is prepared!");
//     })
//     .catch((message) => {
//         console.log("Error:" + message);
//     })
//     .finally(() => {
//         console.log("Finally!!!")
//     })



// QUIZ 1

function func(num) {
    return new Promise((resolve, reject) => {
        if(num > 5)
            resolve(num * 10);
        else
            reject(num * 100);
    })
}


func(4)
    .then(num => num - 10)
    .then(
        (num) => {
            console.log(num);
        },
        (num) => {
            console.log(num);
        }
    )
    .catch((num) => {
        console.log("Caught " + num);
    })