/**
 * Created by Alexander on 7/9/2016.
 */

/*В объекте есть свойство className, которое содержит
 список «классов» – слов, разделенных пробелом.
 Создайте функцию addClass(obj, cls), которая добавляет в
 список класс cls, но только если его там еще нет.
 Ваша функция не должна добавлять лишних пробелов.
 var obj = {
 className: 'open menu'
 };
 addClass(obj, 'new'); // obj.className='open menu new'
 addClass(obj, 'open'); // без изменений
 addClass(obj, 'me'); // obj.className='open menu new me'
 console.log( obj.className ); // "open menu new me"*/

var obj = {
    className: 'open menu'
};
function addClass(obj, cls) {
    var classes = obj.className.split(' ');

    if (classes.indexOf(cls) == -1) {
        classes.push(cls);
    }

    obj.className = classes.join(' ');
}

addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
console.log(obj.className);
