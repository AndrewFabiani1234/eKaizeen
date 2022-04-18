/**
 * Using the provided random number generator function implementation,
 * along with the given seed,
 * you should:
 * - For each key, print it's associated value on the Map instance.
 * - For each number generated insert into the array of numbers
 * - Send an array of numbers to the checkRandomNumber function
 * - Create an object like the structure bellow:
 *    { name: 'yourName',
 *      "email": 'yourEmail',
 *      response: 'return from checkRandonumber',
 *      "numbers": ['All numbers generated']}
 * - OBS: First create the object and then insert the necessary returns
 * - Print Object on console as result
 * - Run this code in Node.js localy
 */

 import { random, seed, checkRandomNumber } from "./randomNumberGenerator.js";

 seed(192837465);
const numbers = [];
let object = {};

const map = new Map();

var i = 0;
for (i; i<9; i++) {
    map.set(i, random());

}


const keys = map.keys();

for (var d = 0; d<9; d++) {
    // console.log();
    numbers.push(map.get(keys.next().value))
    
}



object = { 
    name: `Andrew Luis Fabiani`,
    email: `andrewfabiani24@gmail.com`,
    response: checkRandomNumber(numbers),
    numbers: numbers
}

console.log(object);

 


 