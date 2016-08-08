/**
 * Created by Alexander on 7/8/2016.
 */

/*Создайте пустой объект user.
• Добавьте свойство name со значением Sergey.
• Добавьте свойство surname со значением Petrov.
• Поменяйте значение name на Andrey.
• Добавьте свойство age со значением 30.
• Удалите свойство name из объекта.
• Выведите объект в консоль.*/

var user = {
    name: 'Sergey',
    surname: 'Petrov',
    name: 'Andrey',
    age: 30,
};
delete user.name;
console.log(user);
