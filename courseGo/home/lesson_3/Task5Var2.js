/**
 * Created by Alexander on 04.07.2016.
 */

var number = 8;
var board = '';
for (var i = 0; i < number; i++) {
    for (var j = 0; j < number; j++) {
        if ((j + i) % 2 == 0)
            board += "#";
        else
            board += " ";
    }
    board += "\n";
}
console.log(board);
