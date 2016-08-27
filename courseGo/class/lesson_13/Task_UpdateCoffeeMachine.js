/**
 * Created by Alexander on 8/28/2016.
 */
/*Улучшите готовый код кофеварки, который дан ниже: добавьте в кофеварку публичный метод stop(),
 который будет останавливать кипячение (через clearTimeout).

 function CoffeeMachine(power) {
 this.waterAmount = 0;

 var WATER_HEAT_CAPACITY = 4200;

 var self = this;

 function getBoilTime() {
 return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
 }

 function onReady() {
 alert( 'Кофе готово!' );
 }

 this.run = function() {
 setTimeout(onReady, getBoilTime());
 };

 }
 Вот такой код должен ничего не выводить:

 var coffeeMachine = new CoffeeMachine(50000);
 coffeeMachine.waterAmount = 200;

 coffeeMachine.run();
 coffeeMachine.stop(); // кофе приготовлен не будет
 P.S. Текущую температуру воды вычислять и хранить не требуется.

 P.P.S. При решении вам, скорее всего, понадобится добавить приватное свойство timerId, которое будет хранить текущий таймер.*/

function CoffeeMachine(power) {
    this.waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    var self = this;

    var timerId;

    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    function onReady() {
        console.log('Кофе готово!');
    }

    this.run = function () {
        timerId = setTimeout(onReady, getBoilTime());
    };
    this.stop = function () {
        clearTimeout(timerId);
    }
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет
