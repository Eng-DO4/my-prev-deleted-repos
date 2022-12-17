// function doubleIt(num) {
//     return num * 2
// }

// doubleIt(5); // return as int
// doubleIt(5).toString(); // return as string

/******************************************/

// // recursion
// function example(counter){
//     console.log(counter);
//     counter--;
//     if (counter === 0) return;
//     example(counter);
// }

// example(4);

/******************************************/

// // first-class function
// function addTwoNums(a, b) {
//     console.log(a + b);
// }
// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() {
//     return 42
// }

// var useRandom = true;
// var getNumber;
// if(useRandom) {
//     getNumber = randomNum;
// }else {
//     getNumber = specificNum;
// }

// addTwoNums(getNumber(), getNumber());

// // This works because functions in JavaScript are truly first-class citizens
// //which can be assigned to variable names and passed around just like I would pass around a string, a number, an object, etc.

/******************************************/

// // higher-order function
// function addTwoNums(getNumber1, getNumber2) {
//     console.log(getNumber1() + getNumber2());
// }
// function randomNum() {
//     return Math.floor((Math.random() * 10) + 1);
// }
// function specificNum() {
//     return 42
// }

// addTwoNums(specificNum, specificNum);
// addTwoNums(specificNum, randomNum);

// // There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language.
// // The language itself allows me to pass a function to another function, or to return a function from another function.

/*************************************/

// "abc".concat("def");        // 'abcdef'
// ["abc"].concat(["def"]);    // ['abc', 'def']
// ["abc"] + ["def"];          // ["abcdef"]

/*************************************/