"use strict";
exports.__esModule = true;
var print = console.info;
function getData(name, value) {
    return [name, value];
}
var vegeta = ["Vegeta", 9000];
var _a = getData("Son Goku", 9000), name = _a[0], value = _a[1];
print("".concat(vegeta[0], "'s power-level is ").concat(vegeta[1]));
print("".concat(name, "'s power-level is ").concat(value));
function area(a) {
    return a * a;
}
print(area(5));
print(area.call(this, 5));
//# sourceMappingURL=index.js.map