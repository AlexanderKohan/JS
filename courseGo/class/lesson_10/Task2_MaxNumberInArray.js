/**
 * Created by Alexander on 8/26/2016.
 */

/*Необходимо написать функцию, которая будет принимать на вход массив
 чисел и возвращать самое большое.
 getMaxNumber([1,30,40,2,7]); // 40
 getMaxNumber([1,15,-20,2,-7]); // 15*/

//1е решение
function getMaxNumber(arr) {
    arr = arr.sort(function (a, b) {
        return b - a;
    })
    console.log(arr[0]);
}

//2е решение
function getMaxNumber1(arr) {
    return console.log(Math.max.apply(null, arr));
}

getMaxNumber([1, 30, 40, 2, 7]); // 40
getMaxNumber1([1, 15, -20, 2, -7]); // 15*/
