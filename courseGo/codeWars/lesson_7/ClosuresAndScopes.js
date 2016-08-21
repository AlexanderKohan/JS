/**
 * Created by Alexander on 8/12/2016.
 */
/*
 http://www.codewars.com/kata/closures-and-scopes

 We want to create a function, which returns an array of functions, which return their index in the array.
 For better understanding, here an example:gv
 var callbacks = createFunctions(5); // create an array, containing 5 functions
 callbacks[0](); // must return 0
 callbacks[3](); // must return 3l
 We already implemented that function, but when we actually run the code, the result doesn't look like what we expected.
 Can you spot, what's wrong with it? A test fixture is also available
 ------------------------------
 function createFunctions(n) {
 var callbacks = [];

 for (var i=0; i<n; i++) {
 callbacks.push(function() {
 return i;
 });
 }

 return callbacks;
 }

 var callbacks = createFunctions(5); // create an array, containing 5 functions

 callbacks[0](); // must return 0
 callbacks[3](); // must return 3
 */

function createFunctions(n) {
    var callbacks = [];
    var i;

    for (var i = 0; i < n; i++) {
        (function (i) {

            callbacks.push(function () {
                return i;
            });
        })(i);
    }

    return callbacks;
}

var callbacks = createFunctions(5); // create an array, containing 5 functions

console.log(callbacks[0]()); // must return 0
console.log(callbacks[1]());
console.log(callbacks[2]());
console.log(callbacks[3]()); // must return 3
console.log(callbacks[4]());












