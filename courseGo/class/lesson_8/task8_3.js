/**
 * Created by Alexander on 8/8/2016.
 */

var foo = {
    toString: function () {
        return 'foo';
    },
    valueOf: function () {
        return 2;
    }
};

console.log(foo);
console.log(foo + 1);
console.log(foo + '3');
