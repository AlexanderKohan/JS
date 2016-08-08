/**
 * Created by Alexander on 7/8/2016.
 */

/*Создайте функцию isEmpty(obj), которая
 возвращает true, если в объекте нет свойств
 и false — если хоть одно свойство есть.

 function isEmpty(obj) {
 /!* ваш код *!/
 }
 var todoList = {};
 console.log( isEmpty(todoList) ); // true
 todoList['homework'] = 'lesson_5';
 console.log( isEmpty(todoList) ); // false*/

function isEmpty(obj) {
    for (var key in obj) {
        return false;
    }
    return true;
}
var todoList = {};
console.log(isEmpty(todoList));
todoList['homework'] = 'lesson_5';
console.log(isEmpty(todoList));
