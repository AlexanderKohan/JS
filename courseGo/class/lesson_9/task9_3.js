/**
 * Created by Alexander on 8/17/2016.
 */

function sayHi() {
    console.log(this.name);
}
sayHi.test = 5;
console.log(sayHi.test);//5

var bound = sayHi.bind({
    name: 'Вася'
});

console.log(bound.test);//undefined
