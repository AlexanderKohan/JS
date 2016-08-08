/**
 * Created by Alexander on 8/6/2016.
 */
/*Задание 6 (Уникальные элементы массива)
 Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).
 var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

 console.log( unique(strings) ); // кришна, харе, 8-()*/

function unique(arr) {
    var arrSecond = [], len;

    for (var i = 0; len = arr.length, i < len; i++) {

        if (arrSecond.indexOf(arr[i]) == -1) {

            arrSecond.unshift(arr[i]);

        }
    }

    return arrSecond;
    
}

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];

console.log(unique(strings)); // кришна, харе, 8-()*/
