/**
 * Created by Alexander on 7/16/2016.
 */

/*
 Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все числовые значения у свойств
 умножены на 2.
 // Before
 var image = {
 width: 100,
 height: 400,
 title: 'Cool image'
 };
 multiplyNumeric(image);
 // after
 image = {
 width: 200,
 height: 800,
 title: 'Cool image'
 };
 */

var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};l

var param = {};

function multiplyNumeric(param, arg) {
    for (var key in arg) {
        param[key] = arg[key];
        if (Number.isFinite(param[key]) === true) {
            param[key] *= 2;
        }
    }
}
multiplyNumeric(param, image);
console.log(param);
