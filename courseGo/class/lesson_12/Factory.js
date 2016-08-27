/**
 * Created by Alexander on 8/27/2016.
 */

function factory(color, size) {
    this.color = color || 'green';
    this.size = size || 600;
    this.temp = 25;
    this.vol = 0;
    this.fill = function (vol, temp) {
        this.vol = vol;
        this.temp = temp;
    }
//this.name = this.color + this.size;
//this.name = this.color + this.size;
}

var cup1 = new factory('blue', 1000);
//cup1.color = 'blue';
console.log(cup1);

cup1.fill(300, 90);

console.log(cup1);

var glass = {
    color: 'transparent'
};
cup1.fill.apply(glass, [200, 60]);
console.log(glass);
cup1.fill.call(glass, 300, 60);
console.log(glass);
