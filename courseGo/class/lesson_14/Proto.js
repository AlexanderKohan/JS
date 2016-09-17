/**
 * Created by Alexander on 9/17/2016.
 */

var Vehicle = {
    canRoll: true
};
var Moto = {
    places: 2
};
Moto.__proto__ = Vehicle;
console.log(Moto.canRoll);
console.log(Moto.places);
