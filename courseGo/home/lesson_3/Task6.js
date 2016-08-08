/**
 * Created by Alexander on 04.07.2016.
 */

function pow(x, n) {
    if (n!=1){
        return x*pow(x,n-1);
    }else {
        return x;
    }
}
console.log(pow(2,3))
