/**
 * Created by Alexander on 7/9/2016.
 */
var arr = [2, 67, 'колбаса', 12, 46, 'вода', 'сыр', 6, 9, 33];

arr.sort(function sort(a, b) {

    if (+a && +b) {
        return a - b;
    } else if (+b) {
        return -1;
    } else {
        return 1;
    }
});
console.log(arr);
