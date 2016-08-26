/**
 * Created by Alexander on 8/26/2016.
 */

/*Write a function suffle(arr) to shuffle an array.*/

function suffle(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemOfIndex = arr[randomIndex];

        arr[randomIndex] = arr[i];
        arr[i] = itemOfIndex;
    }
    return arr;
}
var arrSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(suffle(arrSort));
