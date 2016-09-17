/**
 * Created by Alexander on 9/17/2016.
 */
function Vehicle(name) {
    this.name = name;
}
// Vehicle.prototype = {
// sounds: “Beeep!”
//
// };

Vehicle.prototype.rolls = true;
Vehicle.prototype.sounds = 'Beeep!';

var mazda = new Vehicle('Mazda');
var toyota = new mazda.constructor('Toyota');


console.log(mazda.name); //=> Mazda
console.log(toyota.name); //=> Toyota
