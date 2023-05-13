const print = console.info;

/* var is function scoped whereas let & const is block scoped */
//Example:-

var global1 = 3 + 2;  //Will give no error as it is var
//let global1 = 3;  Will definitely give an error

print(global1);
//This is the beginning of a block
{
    let block1 = 11;
    const block2 = 12;
    var global1 = 13;
    print(global1);
}

//print(block1);  Will definitely give an error
//print(block2);  Will definitely give an error
print(global1);