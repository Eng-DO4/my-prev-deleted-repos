// class Animal{}
// var myDog = Object.create(Animal);
// console.log(Animal);

/*************************************/

// class Animal{}
// var myCat = new Animal();
// console.log(Animal);

/*************************************/

// const bicycle = {
//     bell: function() {
//         return "Ring, ring! Watch out, please!"
//     }
// }

// const door = {
//     bell: function() {
//         return "Ring, ring! Come here, please!"
//     }
// }

// function ringTheBell(obj) {
//     console.log(obj.bell);
// }

// ringTheBell(bicycle);   // Ring, ring! Watch out, please!
// ringTheBell(door);      // Ring, ring! Come here, please!

/*************************************/

// class Bird {
//     useWings() {
//         console.log("Flying!")
//     }
// }

// class Eagle extends Bird {
//     useWings() {
//         super.useWings()
//         console.log("Barely flapping!")
//     }
// }

// class Penguin extends Bird {
//     useWings() {
//         console.log("Diving!")
//     }
// }

// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings();   // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"

/*************************************/

// // constructors
// var date = new Date();
// console.log(date);

// new Date();
// new Error();
// new Map();
// new Promise();
// new Set();
// new WeakSet();
// new WeakMap();

/*************************************/

// // custom constructor functions
// function Icecream(flavor) {
//     this.flavor = flavor;
//     this.meltIt = function() {
//         console.log(`The ${this.flavor} icecream has melted`);
//     }
// }

// let kiwiIcecream = new Icecream("kiwi");
// let appleIcecream = new Icecream("apple");
// console.log(kiwiIcecream);  // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
// console.log(appleIcecream); // --> Icecream {flavor: 'apple', meltIt: ƒ}

/*************************************/

// // classes and constructors
// class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus() {
//         console.log('Lights on?', this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     }
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
// }

// var trainy = new Train('red', false);
// trainy.getSelf();
// trainy.toggleLights();
// trainy.lightsStatus();
// trainy.getPrototype();

// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log('High speed status:', this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLights();
//         super.lightsStatus();
//         console.log("Lights are 100% operational.")
//     }
// }

// var high_spped_train = new HighSpeedTrain(300, true, "blue", true);
// high_spped_train.getSelf();
// high_spped_train.toggleHighSpeed();
// high_spped_train.toggleLights();

/*************************************/

// class StationaryBike {
//     constructor(position, gears) {
//         this.position = position
//         this.gears = gears
//     }
// }

// class Treadmill {
//     constructor(position, modes) {
//         this.position = position
//         this.modes = modes
//     }
// }

// class Gym {
//     constructor(openHrs, stationaryBikePos, treadmillPos) {
//         this.openHrs = openHrs
//         this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
//         this.treadmill = new Treadmill(treadmillPos, 5)
//     }
// }

// var boxingGym = new Gym("7-22", "right corner", "left corner");
// console.log(boxingGym.openHrs);
// console.log(boxingGym.stationaryBike);
// console.log(boxingGym.treadmill);

/*************************************/

// // default parameters
// class WithDefaultParams {
//     constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
//         this.num1 = num1;
//         this.num2 = num2;
//         this.num3 = num3;
//         this.string1 = string1;
//         this.bool1 = bool1;
//     }
//     calculate() {
//         if(this.bool1) {
//             console.log(this.string1, this.num1 + this.num2 + this.num3);
//             return;
//         }
//         return "The value of bool1 is incorrect"
//     }
// }

// var better = new WithDefaultParams();
// better.calculate();

/*************************************/

// design of an OO program
class Animal {
    constructor(color,energy=100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 10;
            console.log("Energy decreasing: ", this.energy);
        } else if(this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 10;
        console.log("Energy increasing: ", this.energy);
    }
    getColor() {
        console.log(this.color);
    }
}

class Cat extends Animal {
    constructor(color,energy,canJumpHigh=true,canClimbTrees=true,sound="purr") {
        super(color,energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(color,energy,canFly=true,sound="chirp") {
        super(color,energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(color,energy,canJumpHigh,canClimbTrees,houseCatSound="meow",sound) {
        super(color,energy,sound,canJumpHigh,canClimbTrees);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(energy,color="orange",canJumpHigh,canClimbTrees,tigerSound="roar",sound) {
        super(color,energy,sound,canJumpHigh,canClimbTrees);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(color,energy,canTalk=true,canFly,sound) {
        super(color,energy,sound,canFly);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if(option) {
            super.makeSound();
        }
        if(this.canTalk) {
            console.log("I'm a talking parrot");
        }
    }
}

var fiji = new Parrot('yellow',100,false);
var polly = new Parrot('red',100,true);
polly.makeSound(true);
fiji.makeSound(true);
polly.energy;
fiji.isActive();

var penguin = new Bird("black and white",200,false,"shriek");
console.log(penguin);
console.log(penguin.sound);
console.log(penguin.canFly);
console.log(penguin.color);
console.log(penguin.energy);
penguin.isActive();

var leo = new HouseCat("gray");
var cuddels = new Tiger();
leo.makeSound(true); // now lea is purring
leo.makeSound(false); // stoped purring but keep meowing
cuddels.makeSound(true); // now cuddle is purring
cuddels.makeSound(false); // stoped purring but keep roaring