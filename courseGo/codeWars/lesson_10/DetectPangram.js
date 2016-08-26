/**
 * Created by Alexander on 8/26/2016.
 */

/*
http://www.codewars.com/kata/detect-pangram
    A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
    function isPangram(string){
    //...
}*/

/*
DO NOT WORKING !!!
function isPangram(str){
    var s = str.toLowerCase();
    var letters = 'aeiouybcdfghjklmnpqrstvwxz';

    for (var i = 0; letters.length;i++){
        if (s.indexOf(letters.charAt(i)) === -1){
            return false;
        }
    }

    return true;
}

var string1 = 'The quick brown fox jumps over the lazy dog';
var string2 = 'This is not a pangram.';

console.log(isPangram(string1));
console.log(isPangram(string2));*/
