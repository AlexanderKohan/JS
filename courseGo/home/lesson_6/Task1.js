/**
 * Created by Alexander on 8/6/2016.
 */
/*
 У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:
 var obj = {
 className: 'open menu'
 };
 Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
 removeClass(obj, 'open'); // obj.className='menu'
 removeClass(obj, 'blabla'); // без изменений
 P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
 obj = {
 className: 'my menu menu'
 };

 removeClass(obj, 'menu');

 console.log( obj.className ); // 'my'
 Лишних пробелов после функции образовываться не должно*/

var obj = {
    className: 'open menu'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(' ');
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] == cls) {

            arr.splice(i, 1);
            i--;
        }
    }

    obj.className = arr.join(' ');

}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений

console.log(obj);

