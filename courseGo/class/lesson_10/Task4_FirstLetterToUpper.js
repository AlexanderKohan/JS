/**
 * Created by Alexander on 8/26/2016.
 */

/*Write a JavaScript function that accepts a string as a parameter and converts the first
 letter of each word of the string in upper case. Go to the editor
 Example string: the quick brown fox
 Expected Output: The Quick Brown Fox*/

function firstLetterToUpper(str) {
    var words = str.split(' ');

    return words.map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(' ');
}

console.log(firstLetterToUpper('the quick brown fox'));
