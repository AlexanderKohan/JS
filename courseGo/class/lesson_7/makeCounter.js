/**
 * Created by Alexander on 8/8/2016.
 */

function makeCounter() {
    function counter() {
        return counter.currentCount++;
    }

    counter.currentCount = 1;

    return counter;
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
