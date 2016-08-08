/**
 * Created by Alexander on 8/6/2016.
 */
/*Задание 3 (Random sort)
 Необходимо отсортировать массив в случайном порядке используя метод sort.
 var arr = [1, 2, 3, 4, 5];

 arr.sort(ваша функция);

 console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]*/

var arr = [1, 2, 3, 4, 5];

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

arr.sort(compareRandom);

console.log(arr);
