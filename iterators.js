const print = console.info;
const warriors = ['Goku', 'Vegeta', 'Broly', 'Gohan', 'Piccolo', 'Bardock'];

// iterable as returned by a function (actual approach)
function iterator(iterable) {
    index = 0;
    return {
        next: function () {
            return (index >= iterable.length) ? {
                done: true
            } : {
                value: iterable[index++],
                done: false
            };
        }
    }
}
const warriorIterator = iterator(warriors);
var x = warriorIterator.next();

while (!x.done) {
    print(x.value);
    x = warriorIterator.next();
}
// to print a new empty line 
print();

// iterator as a class (not recommended as it makes a copy of the iterable)
function iteratorClass(iterable) {
    this.index = 0;
    this.iterable = iterable;
    this.next = function () {
        return (this.index >= this.iterable.length) ? {
            done: true
        } : {
            value: this.iterable[this.index++],
            done: false
        };
    }
}
const warriorIteratorObj = new iteratorClass(warriors);
var y = warriorIteratorObj.next();

while (!y.done) {
    print(y.value);
    y = warriorIteratorObj.next();
}
