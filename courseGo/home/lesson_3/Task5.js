/**
 * Created by Alexander on 04.07.2016.
 */

function makeChessBoard(size) {

    for (var i = 0; i < size; i++) {
        var line = '';

        for (var j = 0; j < size; j++) {
            if (i % 2 === 0) {
                if (j % 2 === 0) {
                    line += '#';
                } else {
                    line += ' ';
                }
            } else {
                if (j % 2 === 0) {
                    line += ' ';
                } else {
                    line += '#';
                }
            }
        }
        console.log(line);
    }
}
makeChessBoard(8);
