// const obj = {
//     name: 'John Doe',
//     print: function() {
//         console.log(`My name is ${this.name}`)
//     }
// }

const obj = {
    name: 'John Doe',
    print: () => {
        console.log(`My name is ${this.name}`)
    }
}


this.name = "Harish";

obj.print();