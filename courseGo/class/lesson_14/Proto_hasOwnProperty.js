/**
 * Created by Alexander on 9/17/2016.
 */

var Vehicle = {
    canRoll: true
};

var Moto = {
    __proto__: Vehicle,
    places: 2
};

for (var key in Moto) {
    console.log(key + ' = ' + Moto[key]); //=> true, 2
}

for (var key in Moto) {
    if (Moto.hasOwnProperty(key)) console.log(key + ' = ' +
        Moto[key]); //=> 2
}
