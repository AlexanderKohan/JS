/**
 * Created by Alexander on 8/27/2016.
 */

function add(a, b) {
    return a + b;
}

function superFunc(f) {
    return function (a) {
        return function (b) {
            return f(a, b);
        }
    }
}

var result = superFunc(add)(1)(4);

console.log(result);
