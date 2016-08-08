/**
 * Created by Alexander on 8/8/2016.
 */
/*
 Напишите функцию складывает числа из 2х
 вызовов
 addf(3)(4); //7*/

function addf(a) {
    return function (b) {
        return a + b;
    }
}

addf(3)(4);//7
