/**
 * Created by Alexander on 7/10/2016.
 */
/*
 Создайте функцию find(arr, value), которая ищет в массиве
 arr значение value и возвращает его позицию, если найдено,
 или -1, если не найдено.*/

function find(array, value) {

    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
    }

    return -1;
}

var arr = [2,3,4,5,6,7,8];

console.log(find(arr, 5));
