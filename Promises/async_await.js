const userInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function Fun2(value, ch) {
    console.log("The control is inside Fun2 function");
    var log = (x) => {
        var n = Math.log(10);
        return Math.log(x) / n;
    };
    var degree = (x) => {
        return (x * 180) / Math.PI;
    };
    //Whenever there is await, the code within the function doesn't proceed further until and unless the promise returns
    var result = await new Promise((resolveFunction, rejectFunction) => {
        setTimeout(function () {
            if (ch == "log") resolveFunction(log(value));
            else if (ch == "degree") resolveFunction(degree(value));
            else rejectFunction("Please Select a valid option");
        }, 2000);
    });
    //If the promise isn't resolved, the function throws an error (which is the argument in the rejectFunction)
    //If the promise is resolved, then the argument within the resolveFunction is passed to 'result' variable
    return Promise.resolve(result);
}

//If you want to input multiple inputs, then use nested readline methods
userInput.question("Enter the Number:- ", number => {
    userInput.question("Enter the command:-", command => {
        console.log("Before function Fun2");

        Fun2(number, command).then(result =>
            console.log(`The answer = ${result}`)
        ).catch(error => 
            console.error(error)
        );

        console.log("After the function");
        userInput.close();  //Always remember to close the inputstream
    })
});

/* Points to remember:-
1. await keyword can only be used within an async function
   async function always returns a promise that returns a value (if any) in the then part of the promise
   Otherwise the control goes to the catch part
2. If the promise after the await keyword doesn't resolve, then the function terminates 
   and the control goes to catch part which catches the parameter(s) passed by the rejectFunction
*/