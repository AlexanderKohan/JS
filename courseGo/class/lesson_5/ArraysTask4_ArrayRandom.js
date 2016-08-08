/**
 * Created by Alexander on 7/8/2016.
 */

/*Написать функцию которая принимает на вход массив и
 возвращает случайное значение из этого массива.
 var rand = min + Math.floor(Math.random() * (max + 1 - min));
 Код для генерации случайного числа в промежутке.*/

function getRandom(array) {
    var max = array.length - 1;
    var rand = Math.floor(Math.random() * (max + 1));
    return array[rand];
}
var array = [1, 2, 3];

console.log(getRandom(array));
