/**
 * Created by Alexander on 8/17/2016.
 */

function f() {
    console.log(this.name);
}

f = f.bind({name: 'Вася'}).bind({name: 'Петя'});

f();
