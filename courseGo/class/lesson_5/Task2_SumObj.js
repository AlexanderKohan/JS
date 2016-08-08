/**
 * Created by Alexander on 7/8/2016.
 */

/*Задачка 2
 Создайте функцию которая возвращает общий
 размер фонда зарплат (сумму) всего отдела
 var salaries = {
 'junior': 1000,
 'middle': 2500,
 'senior': 3500,
 'lead': 5000
 };*/

var salaries = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};
var salaries2 = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 50000
};

function sumSalary(obj) {
    var result = 0;

    for (var key in salaries) {
        result += obj[key];
    }
    return result;
}
console.log(sumSalary(salaries));
console.log(sumSalary(salaries2));
