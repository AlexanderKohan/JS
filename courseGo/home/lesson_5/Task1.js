/**
 * Created by Alexander on 7/10/2016.
 */

/*Напиште код который выведет сотрудника который выполнил больше всех задач.
 Например:
 var tasksCompleted = {
 'Anna': 29,
 'Serg': 35,
 'Elena': 1,
 'Anton': 99
 };*/

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};
var max = 0;
nameMax = '';
for (var key in tasksCompleted) {
    if (max < tasksCompleted[key]) {
        max = tasksCompleted[key];
        nameMax = key;
    }
}
console.log(nameMax);
