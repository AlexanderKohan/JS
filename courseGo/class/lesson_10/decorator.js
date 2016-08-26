/**
 * Created by Alexander on 8/23/2016.
 */

function someFunction(text) {
    console.log('Working on 0' + text);
    return 0;
}

function someFunction1(text) {
    console.log('Working on 1' + text);
    return 1;
}

function decorator(func) {
    return function () {
        console.log('Starting');
        var result = func.apply(this, arguments);

        return result;
    }
}

var newSomeFunction = decorator(someFunction);

var newSomeFunction1 = decorator(someFunction1);


console.log(newSomeFunction(' Hello world'));

console.log('-----------');

console.log(newSomeFunction1(' Hi oll'));
