/**
 * Created by Alexander on 8/7/2016.
 */

var classNames = ['header', 'menu', 'menu_item', 'menu_item', 'link', 'link', 'link', 'footer',
    'tabs', 'tab_item', 'tab_item', 'tab_item', 'tab_item', 'tab_item'];

var classesObj = {};

classNames.forEach(function (elem) {
    if (!classesObj[elem]) {
        classesObj[elem] = 1;
    } else {
        classesObj[elem] += 1;
    }
});

var result = [];
for (var className in classesObj) {
    result.push(className);
}

result.sort(function (a, b) {
    return classesObj[b] - classesObj[a];
});

console.log(result);
