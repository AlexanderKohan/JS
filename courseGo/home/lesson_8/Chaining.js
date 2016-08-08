/**
 * Created by Alexander on 8/8/2016.
 */
/*Есть объект ladder
 var ladder = {
 step: 0,
 up: function() { // вверх по лестнице
 this.step++;
 },
 down: function() { // вниз по лестнице
 this.step--;
 },
 showStep: function() { // вывести текущую ступеньку
 alert( this.step );
 }
 };
 Сейчас, для последовательного вызова нескольких методов объекта, нужно делать так сделать так:
 ladder.up();
 ladder.up();
 ladder.down();
 ladder.showStep(); // 1
 Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:
 ladder.up().up().down().up().down().showStep(); // 1
 Такой подход называется «чейнинг» (chaining)*/

var ladder = {
    step: 0,
    up: function () { // вверх по лестнице
        this.step++;
        return this;
    },
    down: function () { // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function () { // вывести текущую ступеньку
        console.log(this.step);
    }
};
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder.up().up().down().showStep();
