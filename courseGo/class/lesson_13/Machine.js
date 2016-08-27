/**
 * Created by Alexander on 8/27/2016.
 */

function Machine() {
    this.__enabled = false;

    this.enable = function () {
        this.__enabled = true;
    };
    this.disable = function () {
        this.__enabled = false;
    };
}

function CoffeeMachine(power) {
    Machine.call(this);// отнаследовать
    var waterAmount = 0;
    this.setWaterAmount = function (amount) {
        waterAmount = amount;
    };
    this.getEnabled = function () {
        return this.__enabled;
    }
}
var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.setWaterAmount(100);
coffeeMachine.disable();
console.log(coffeeMachine.getEnabled());
