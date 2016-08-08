/**
 * Created by Alexander on 7/10/2016.
 */

/*Во всех браузерах, кроме IE10-, поддерживается новый стандарт Ecma 402, который добавляет специальные методы для форматирования дат.
 Это делается вызовом date.toLocaleString(локаль, опции), в котором можно задать много настроек.
 Он позволяет указать, какие параметры даты нужно вывести, и ряд настроек вывода, после чего интерпретатор сам сформирует строку.
 Пример с почти всеми параметрами даты и русским, затем английским (США) форматированием*/

var date = new Date(2014, 11, 31, 12, 30, 0);

var options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

console.log(date.toLocaleString("ru", options));
console.log(date.toLocaleString("en-US", options));
