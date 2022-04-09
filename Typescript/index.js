"use strict";
exports.__esModule = true;
function getData(name, value) {
    return [name, value];
}
// With returned tuples/enumerators
var vegeta = ["Vegeta", 9000];
var _a = getData("Son Goku", 9000), name = _a[0], value = _a[1];
console.log(vegeta);
console.log(name, value);
function area(a) {
    return a * a;
}
console.log(area(5));
console.log(area.call(this, 5));
