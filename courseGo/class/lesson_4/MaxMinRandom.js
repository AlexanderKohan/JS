/**
 * Created by Alexander  on 03.07.2016.
 */
function randomInteger (min, max) {
    var random = min+Math.random()*(max-min)
    random = Math.round(random);
    return random;
}
console.log(randomInteger(1,8));
