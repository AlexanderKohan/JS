/**
 * Created by Alexander on 7/9/2016.
 */

/*
 Напишите функцию toCamelCase(str), которая преобразует
 строки вида «my-short-string» в «myShortString».
 То есть, дефисы удаляются, а все слова после них получают
 заглавную букву.
 Например:
 toCamelCase('background-color'); // 'backgroundColor';
 toCamelCase('list-style-image'); // 'listStyleImage';
 toCamelCase('-webkit-transition'); // 'WebkitTransition';
 P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
 */

function toCamelCase(str) {
    var arr = str.split('-');

    for (var i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join('');
}

console.log(toCamelCase('background-color'));
console.log(toCamelCase('list-style-image'));
console.log(toCamelCase('-webkit-transition'));
