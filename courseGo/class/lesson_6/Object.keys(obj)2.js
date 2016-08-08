/**
 * Created by Alexander on 7/9/2016.
 */

var user = {
    name: 'Sergey',
    age:30,
    age1: 2
}

var keys = Object.keys(user);
console.log(keys);
for (var i = 0; i < keys.length; i++){
    console.log('Field ' + keys[i] + 'Value ' + user[keys[i]]);
}
