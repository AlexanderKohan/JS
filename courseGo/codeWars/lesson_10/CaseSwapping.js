/**
 * Created by Alexander on 8/26/2016.
 */

/* http://www.codewars.com/kata/case-swapping/train/javascript

 Given a string, swap the case for each of the letters.
 e.g. CodEwArs --> cODeWaRS*/

function swap(str) {

    var arr = str.split('');
    var newArr = [];

    for (var i = 0; i < arr.length; i++) {
        var char = arr[i];

        if (char === char.toUpperCase()) {
            newArr.push(char.toLowerCase());
        } else {
            newArr.push(char.toUpperCase());
        }
    }
    return newArr.join('');
}

console.log(swap('CodEwArs'));
