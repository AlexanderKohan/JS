/**
 * Created by Alexander on 8/8/2016.
 */
var currentCount = 1;
function makeCounter() {
    return function () {
        return currentCount++;
    };
}
var counter = makeCounter();
var counter2 = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter2());
console.log(counter2());
