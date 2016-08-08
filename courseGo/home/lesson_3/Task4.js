/**
 * Created by Alexander on 04.07.2016.
 */
for (var i = 1; i < 100; i++) {
    switch (true) {
        case i % 3 === 0 && i % 5 === 0:
            console.log('FizzBuzz');
            break;
        case i % 3 === 0:
            console.log('Fizz');
            break;
        case i % 5 === 0:
            console.log('Buzz');
            break;
    }
}

for (var i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
}
