/**
 * Created by Alexander on 8/26/2016.
 */

/*http://www.codewars.com/kata/reverseit-1
    You have to create a function named reverseIt.
    Write your function so that in the case a string or a number is passed in as the data ,
    you will return the data in reverse order. If the data is any other type, return it as it is.
    Examples of inputs and subsequent outputs:
    "Hello" -> "olleH"
"314159" -> "951413"
    [1,2,3] -> [1,2,3]*/

function reverseIt(data){
    var arrType = typeof data;

    if (arrType === 'string' || arrType === 'number'){
        return (arrType === 'string') ? data.split('').reverse().join(''):
            Number(data.toString().split('').reverse().join(''));
    }else {
        return data;
    }
}

console.log(reverseIt('Hello'));
