// Understanding async programming

// Classic example of block scope and async code
// for(var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }

// for(let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }

function boil_milk_with_coffee() {
  setTimeout(() => {
    console.log("boil milk with coffee");
  }, 3000);
}

function make_coffee(cb) {
  setTimeout(() => {
    console.log("Get the milk");
    cb();
  }, 3000);
}

// make_coffee(boil_milk_with_coffee);


// Let's use async-await
function get_milk(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
        console.log(`get ${x} litres of milk`);
        resolve(x);
    }, 3000);
  });
}

async function make_coffee_async() {
    
    // Using promise
    get_milk(10).then((x) => {
        console.log(x);
    });

    // using async-await
    var x = await get_milk(10);
    console.log(x); // 10
}

make_coffee_async();
console.log("HI");