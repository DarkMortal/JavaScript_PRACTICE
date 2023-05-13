/* There is a concept is JavaScript called hoisting. */
/* JavaScript Declarations are Hoisted

In JavaScript, a variable can be declared after it has been used.
In other words; a variable can be used before it has been declared. */

var User = "Jayden Uchiha";

const variable = {
    "Name": "Dragon Saiyan",
    "Func1": function (x) {
        if (this != global) console.log("This is not Global Scope");   //In node.js, we have the global scope instead of the Window scope
        else console.log("HELLO");
        this.Dragon = "Shenron";
        return x + 1;
    }
};
variable.Func2 = (name) => { console.log("Hello", name); }  //Hoisting doesn't work for methods & data members of Objects 
variable.Func2("Vegito Blue");
console.log(variable.NUN);  //It will show undefined
variable.NUN = 234;
console.log(variable.NUN);  //This will show 234


Hello("Madara Uchiha"); console.log(User);
//Since it's not called from any object (Like the previous one) It accesses the variable declared in the global scope and it by default calls the global.User instead of this.User until particularly mentioned

/* An Immediately Invoked Function Expression or IIFE is a JavaScript function that is executed immediately after it is defined/*/
(function (x) {
    for (var i = 1; i < x; i++) console.log(i * i);
})(5);

//This was an example of IIFE
//NOTE (Important):- You should ALWAYS terminate an expression preceeding an IIFE with a ';'. And by expression, I don't mean any function

/*Note that this Function has been called before it's definition is written. But it still works. 
This is because global variables and functions are always hoisted at the top. But the same is not true for Object methods & data members*/

function Hello(name) {
    console.log(User);
    this.User = name;
    if (this.User == User) console.log(User);
    else console.log(this.User);
    if (this == global) console.log("This is Global scope");   //This condition will be true
}

/*During the compile phase of the code, JavaScript compiler will create a space for all of the defined variables and functions before executing. 
That's why we have access to all the global code and functions even if we define it after we use them*/

console.log(variable.Func1(3 + 1));
console.log(variable.Dragon);

((num) => {      //Another example of IIFE
    console.log("My Favourite number is", num);
})(45);


(function () {
    if (this == global) console.log("This is global scope"); //This condition will be true since this function is not being called from an object
    //It's called from the global namespace
})();