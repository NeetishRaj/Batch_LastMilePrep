class Animal {
    constructor(legsCount) {
        this._name= "animal";
        this.legs = legsCount;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name (val) {
        if(val.length > 0)
            this._name = val;
    }

    static breathe() {
        console.log("I breathe air and need oxygen!")
    }

    print() {
        console.log("This is an animal")
    }
}
// Animal.breathe(); 


const a1 = new Animal(4);

console.log(a1.name) // animal
a1.name = "";
console.log(a1.name) // animal

// console.log(a1.legs) // 4
// a1.print(); // This is an animal
// a1.breathe();


class Dog extends Animal {
    constructor(legsCount){
        super(legsCount);
    }
    bark() {
        console.log("Bark! Bark!")
    }
}

const d1 = new Dog(4);

// console.log(d1.name); //  animal
// console.log(d1.legs); // 4
// d1.print(); // This is an animal
// d1.bark();  // Bark! Bark!