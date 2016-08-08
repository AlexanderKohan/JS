/**
 * Created by Alexander on 7/10/2016.
 */
/*
 Создайте функцию getWeekDay(date), которая выводит
 текущий день недели в коротком формате 'пн', 'вт', … 'вс'.
 var date = new Date(2012,0,3); // 3 января 2012
 console.log( getWeekDay(date) ); // Должно вывести 'вт'*/

function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

    return days[date.getDay()];
}


var date = new Date(2016, 6, 16);
console.log(getWeekDay(date));
