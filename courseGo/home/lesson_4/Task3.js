/**
 * Created by Alexander on 04.07.2016.
 */
function cutLongStr(str) {
    var strCut = str.substr(0, 20) + '...';
    return str.length <= 20 ? str : strCut;
}

console.log(cutLongStr('123456789012345678901234567890'));
console.log(cutLongStr('1234567890'));
