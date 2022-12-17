const util = require('./util1.js');
const {concat, cut2} = require('./util2.js');

arr1 = [1,2,3,4];
arr2 = ['cat', 'dog', 'duck', 'bug'];

console.log(util.len(arr2));
console.log(util.lelem(arr2));
console.log(concat(arr1,arr2));
console.log(cut2(arr2));
