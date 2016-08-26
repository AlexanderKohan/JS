/**
 * Created by Alexander on 8/26/2016.
 */

/*http://www.codewars.com/kata/complete-the-pattern-number-10-parallelogram/train/javascript

 Task:

 You have to write a function pattern which returns the following Pattern(See Examples) upto n rows, where n is parameter.

 Rules/Note:

 If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
 The length of each line = (2n-1).
 Range of n is (-∞,100]
 Examples:

 pattern(5):

 12345
 12345
 12345
 12345
 12345
 pattern(10):

 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 pattern(15):

 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 pattern(20):

 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890
 12345678901234567890   */

function pattern(n) {
    var output = '',
        i;

    if (n > 0) {
        var results = [];
        var line = Array(n).join('-');
        //console.log(line);

        for (i = 1; i <= n; i++) {
            line += (i % 10);
        }
        //console.log(line);
        results.push(line);

        for (i = 1; i < n; i++) {
            results.push(results[i - 1].substring(1) + '-');
        }
        //console.log(results);
        output = results.join("\n");
    }
    return output;
}

console.log(pattern(20));
