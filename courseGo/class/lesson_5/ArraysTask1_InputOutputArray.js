/**
 * Created by Alexander on 7/8/2016.
 */

/*Написать функцию которая принимает на вход
 массив и возвращает последний элемент массива.*/

function getLastElement(array) {
    return array[array.length - 1];
}
var array = [1,2,3,4];
console.log(getLastElement(array));
