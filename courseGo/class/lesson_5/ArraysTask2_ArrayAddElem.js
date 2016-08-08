/**
 * Created by Alexander on 7/8/2016.
 */

/*Написать функцию которая принимает на вход
 2 параметра: массив, и элемент (любого типа).
 Этот элемент нужно добавить в конец массива.
 Функция должна вернуть массив с добавленным
 новым элементом.*/

function addElement(array, element) {
    array.push(element);
    return array;
}
var array = [1, 2, 3, 4];

console.log(addElement(array, 2));
