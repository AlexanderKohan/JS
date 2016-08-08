/**
 * Created by Alexander on 8/8/2016.
 */
/*
 Напишите функцию которая принимает аргумент и
 возвращает функцию которая возвращает этот
 аргумент.
 var idf = identityf(3);
 console.log(idf()); // 3*/

function identityf(a) {
    return function () {
        return a;
    }
}

var idf = identityf(3);

console.log(idf()); // 3
