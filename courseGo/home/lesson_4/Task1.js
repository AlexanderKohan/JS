/**
 * Created by Alexander on 04.07.2016.
 */

function fibRec(n) {
    return n <= 2 ? 1 : fibRec(n - 1) + fibRec(n - 2);
}
console.log(fibRec(7));
