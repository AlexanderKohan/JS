/**
 * Created by Alexander on 03.07.2016.
 */
var from = 0;
var to = 20;
next:
    for (var i = from; i < to; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j === 0) continue next;
        }
        console.log( i );
    }
