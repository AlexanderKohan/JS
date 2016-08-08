/**
 * Created by Alexander on 7/9/2016.
 */

var arr = [2, 67, 12, 46, 6, 9, 33];
var arr2 = [432, 4367, 1232, 2462, 62, 91, 331];
arr.sort(function (a, b) {
    if (a > b) {
        return 1
    }
    ;
    if (a < b) {
        return -1
    }
    ;
    return 0;
});
/*or*/
arr2.sort(function (a, b) {
    return a - b
});
console.log(arr);
console.log(arr2);
