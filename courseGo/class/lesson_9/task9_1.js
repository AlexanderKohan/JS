/**
 * Created by Alexander on 8/17/2016.
 */

function f() {
    console.log(this);
}
var user = {
    g: f.bind('Hello')
};

user.g();
