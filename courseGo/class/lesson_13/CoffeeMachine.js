/**
 * Created by Alexander on 8/28/2016.
 */

function Machine(power) {
    this.__power = power;
    this.__enabled = false;
    this.enable = function () {
        this.__enabled = true;
    }
    this.disable = function () {
        this.__enabled = false;
    }
    this.color = 'grey';
}

function CoffeeMachine(power) {
    Machine.apply(this, arguments);

    this.getSettings = function () {
        console.log('Я кофе машина мощностью ' + this._power + ' Состояние: ' + this.__enabled);
    }
    this.color = 'blue';
}

function VintageCoffeeMachine() {
    CoffeeMachine.apply(this, arguments);

    this.color = 'brown';
    this.__pedal = 'up';

    this.setPedalStatus = function (direction) {
        if (direction === 'up' || direction === 'down') {
            this.__pedal = direction;
        }
    };

    this.getPedalStatus = function () {
        return 'Состояние педали: ' + this.__pedal;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    this.getSettings = function () {
        console.log('Я холодильник мощностью ' + this.__power + ' Состояние: ' + this.__enabled)
    }
}

//var coffeeMachine = new CoffeeMachine(1000);
//coffeeMachine.getSettings();

//var fridge = new Fridge(1000);
//fridge.getSettings();

var vintageCoffeeMachine = new VintageCoffeeMachine(2000);
vintageCoffeeMachine.getSettings();
console.log(vintageCoffeeMachine.getPedalStatus());
vintageCoffeeMachine.setPedalStatus('down');
console.log(vintageCoffeeMachine.getPedalStatus());
console.log(vintageCoffeeMachine.color);
