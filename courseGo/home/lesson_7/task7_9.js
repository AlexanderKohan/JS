/**
 * Created by Alexander on 8/8/2016.
 */
/*
 Напишите функцию которая принимает бинарную
 функцию и вызывает её с ее аргументами.
 var addf2 = applyf(add);
 console.log(addf2(3)(4)); //7
 console.log(applyf(mul)(3)(4)); //12*/

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function applyF(biaryFunc) {
    return function (a) {
        return function (b) {
            return biaryFunc(a, b);
        }
    }
}

var addf2 = applyF(add);
console.log(addf2(3)(4)); //7
console.log(applyF(mul)(3)(4)); //12
