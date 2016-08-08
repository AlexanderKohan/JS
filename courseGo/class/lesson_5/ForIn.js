/**
 * Created by Alexander on 7/8/2016.
 */
var obj = {
    menu: 'text1',
    size: 200,
    height: 300,
    id: 'A-2345'
};

for (var iten in obj){
    console.log(iten);
}
console.log();

for (var result in obj){
    console.log(obj[result]);
}
