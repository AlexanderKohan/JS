/**
 * Created by Alexander on 8/27/2016.
 */
/*
 Задачка
 Напишите конструктор User для создания объектов:
 • С приватными свойствами имя firstName и фамилия surname.
 • С сеттерами для этих свойств.
 • С геттером getFullName(), который возвращает полное имя.
 function User() {
 /!* ваш код *!/
 }
 var user = new User();
 user.setFirstName("Петя");
 user.setSurname("Иванов");
 alert( user.getFullName() ); // Петя Иванов
 */

function User() {
    var firstName,
        surname;

    this.setFirstName = function (name) {
        firstName = name;
    }
    this.setSurname = function (name) {
        surname = name;
    }
    this.getFullName = function () {
        return firstName + ' ' + surname;
    }

}
var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");
console.log(user.getFullName());

