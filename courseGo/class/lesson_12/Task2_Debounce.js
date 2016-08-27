/**
 * Created by Alexander on 8/27/2016.
 */

/*Напишите функцию debounce(f, ms), которая возвращает обёртку, которая передаёт вызов f не чаще, чем раз в ms миллисекунд.

 «Лишние» вызовы игнорируются. Все аргументы и контекст – передаются.

 Например:

 function f() { ... }

 var f = debounce(f, 1000);

 f(1); // выполнится сразу же
 f(2); // игнор

 setTimeout( function() { f(3) }, 100); // игнор (прошло только 100 мс)
 setTimeout( function() { f(4) }, 1100); // выполнится
 setTimeout( function() { f(5) }, 1500); // игнор
 Упрощённо можно сказать, что debounce возвращает вариант f, срабатывающий не чаще чем раз в ms миллисекунд.*/

function func(x) {
    console.log(x);
}

function debounce(f, time) {
    var state = true;

    return function () {

        if (!state) return;

        f.apply(this, arguments);

        state = false;

        setTimeout(function () {
            state = true;
        }, time);
    }
}

var func = debounce(func, 1000);

func(1); // выполнится сразу же
func(2); // игнор

setTimeout(function () {
    func(3)
}, 100); // игнор (прошло только 100 мс)
setTimeout(function () {
    func(4)
}, 1100); // выполнится
setTimeout(function () {
    func(5)
}, 1500); // игнор
