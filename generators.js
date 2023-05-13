const print = console.info;

// generators are functions that returns an iterator
// generators are very useful as it generates value on the fly as opposed to creating and stroing them in array

function* generator(n, func){
    let i = 0;
    while(i <= n) yield func(1+i++);
}

var gen = generator(5,(x) => 2*x-1);
var x = gen.next();

while(!x.done){
    print(x.value);
    x = gen.next();
}