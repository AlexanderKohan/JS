/**
 * Created by Alexander on 8/27/2016.
 */

function add(a, b, c) {
    return a + b + c;
}

function sub(a, b) {
    return a - b;
}

console.log(add(1, 2));
console.log(add(4, 2));

function decorator(f) {
    return function (a, b) {
        return 'Ответ: ' + f.apply(null, arguments);
    }
}

var add2 = decorator(add);
var sub2 = decorator(sub);

console.log(add2(4, 5, 3));
console.log(sub2(4, 5));
