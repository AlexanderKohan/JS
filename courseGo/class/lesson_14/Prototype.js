/**
 * Created by Alexander on 9/17/2016.
 */

var Lexus = {
    isCool: 'Hell yeah!'
};

function ModelF(type) {
    this.type = type;
}

ModelF.prototype = Lexus;
var car = new ModelF('Sport coupe');

console.log(car.isCool);
