/**
 * Created by Alexander on 8/6/2016.
 */
/*
Задание 3 (Калькулятор)
Напишите код, который:
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
    Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
    Выводит сумму всех значений массива когда ввод прекращен.
*/

var arr = [];

while (true) {

    var number = prompt('');

    if (number === null || Number.isFinite(number) === true || number === '') break;

    arr.push(+number);

}

var sum = 0;

for (var key in arr) {
    sum += arr[key];
}

console.log(sum);
