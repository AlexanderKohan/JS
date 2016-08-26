/**
 * Created by Alexander on 8/26/2016.
 */

/*Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив
 состоящий только из чисел или строк. Написать метод extractNumber или extractString,
 который будет возвращать массив.
 var obj = {
 person1Age: 20,
 person1Name: 'Ivanov',
 person2Age: 30,
 person2Name: 'Petrov',
 person3Age: 40,
 person3Name: 'Sidorov'
 };
 var ages = [20,30,40];
 var names = ['Ivanov', 'Petrov', 'Sidorov'];*/

var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};
var ages = [20, 30, 40];
var names = ['Ivanov', 'Petrov', 'Sidorov'];

function extractNumber(obj) {
    var arr = [];
    for (key in obj) {
        if (!isNaN(+obj[key]))
            arr.push(obj[key]);
    }
    return arr;
}

function extractString(obj) {
    var arr = [];
    for (key in obj) {
        if (isNaN(+obj[key]))
            arr.push(obj[key]);
    }
    return arr;
}

console.log(extractNumber(obj));
console.log(extractString(obj));

