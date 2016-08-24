/**
 * Created by Alexander on 8/23/2016.
 */

 function someFunction() {
 console.log('Working on 0');
 return 0;
 }

 function someFunction1() {
 console.log('Working on 1');
 return 1;
 }

 function decorator(func) {
 console.log('Starting');

 return function () {
 var result = func.apply(this, arguments);

 return result;
 }
 }

 var newSomeFunction = decorator(someFunction());

 var newSomeFunction1 = decorator(someFunction1());

 console.log(newSomeFunction);
 console.log(newSomeFunction1);
