/**
 * Created by Alexander on 30.06.2016.
 */

var login = prompt ('Enter your login');

if (login == 'admin' ) {
    var password = prompt('Enter your password');
    if (password == 'passw0rd') {
        alert('Welcome home!');
    } else if (password == null) {
        alert('cancelled');
    } else {
        alert('Access denied');
    }
} else {
    alert('Access denied');
}
