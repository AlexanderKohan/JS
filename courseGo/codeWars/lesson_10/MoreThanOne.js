/**
 * Created by Alexander on 8/26/2016.
 */

/*

 http://www.codewars.com/kata/547aadd5b84a1fd66800041e/solutions/javascript
 
 Write a single function that can be invoked by either
 sum(2,3); //5
 //or
 sum(2)(3); //5
 Both of these examples should return the sum of the 2 numbers.*/

function sum(a, b) {
    if (arguments[1] === undefined) {
        return function (b) {
            return a + b;
        }
    } else {
        return a + b;
    }
}

console.log(sum(2,3));
console.log(sum(2)(3)); //5)
