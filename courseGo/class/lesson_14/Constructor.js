/**
 * Created by Alexander on 9/17/2016.
 */

function Vehicle(name) {
    this.name = name;
}
// Vehicle.prototype = {
// constructor: Vehicle
// }

var mazda = new Vehicle('Mazda');

var toyota = new mazda.constructor('Toyota');

console.log(mazda.name);
console.log(toyota.name);
