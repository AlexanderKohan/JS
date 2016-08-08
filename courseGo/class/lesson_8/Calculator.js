/**
 * Created by Alexander on 8/8/2016.
 */
/*Создайте объект calculator с тремя методами:​
 read() запрашивает prompt два значения и сохраняет их как свойства объекта​
 sum() возвращает сумму этих двух значений​
 mul() возвращает произведение этих двух значений​*/

var calculator = {
    sum: function () {
        return this.a + this.b;
    },
    mul: function () {
        return this.a * this.b;
    },
    read: function () {
        this.a = prompt('Please enter A');
        this.b = prompt('Please enter B');
    }
}

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
