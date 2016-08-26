/**
 * Created by Alexander on 8/26/2016.
 */

/*
 Имеется массив css классов со старницы.
 var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
 Необходимо из этого массива получить массив с уникальными именами классов (без повторений)
 отсортированный по частоте использования (наиболее часто используемые - впереди).
 Если классы используются одинаковое количество раз - между ними не важно какой будет первее.
 result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
 */

var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];

var newArr = [];

for (var i = 0; i < arr.length; i++) {
    if (newArr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i]);
        newArr.toString();
    }
}

console.log(newArr);
