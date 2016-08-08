/**
 * Created by Alexander on 03.07.2016.
 */
function sumTo1(n) { //recursion
    if (n != 1) {
        return n + sumTo1(n - 1)
    } else {
        return n;
    }
}
console.log(sumTo1(100));

function sumTo2(n) {//loop
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumTo2(100));

function sumTo3(n) { //arithmetical progression
    return n * (n + 1) / 2;
}
console.log(sumTo3(100));
