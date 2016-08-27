/**
 * Created by Alexander on 8/27/2016.
 */

/*Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.

    Например:

function f(x) {
    alert( x );
}

var f1000 = delay(f, 1000);
var f2000 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f2000("тест2"); // выведет "тест2" через 2000 миллисекунд
Упрощённо можно сказать, что delay возвращает "задержанный на ms" вариант f.

    В примере выше у функции только один аргумент, но delay должна быть универсальной:
    передавать любое количество аргументов и контекст this.*/

function delay(func, time) {

    return function () {
        var args = arguments;
        var ctx = this;

        setTimeout(function () {
            func.apply(ctx, args);
        }, time);
    }
}

function f(x) {
    console.log(x);
}

var f1000 = delay(f, 1000);
var f2000 = delay(f, 2000);

f1000('Hello: test');
f2000('Hello: test 2');
