const userInput = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
1. You can say promises are sort of asynchronous programming with error handling properties
2. In case of successfull completion of the funciton operation, resolveFunction will be called with the given parameter
3. In case of any error, rejectFunction will be called with the ERROR passes as the paramter
*/

function Fun1(x){
    var log=(x)=>{
        var n=Math.log(10);
        return Math.log(x)/n;
    };
    return new Promise((resolveFunction,rejectFunction)=>{
       setTimeout(()=>{
           if(x==0) rejectFunction("Math error, parameter can't be 0");
           else resolveFunction(log(x));
       },3000)
    });
}

userInput.question("Enter the number:- ",num=>{
   console.log("The answer will be printed in 3 seconds");

   Fun1(num).then(answer=>{
        console.log("Answer:- "+answer);
    }).catch(damn_error=>{
        console.error(damn_error);
    });

    console.log("Statement after Function Fun1");
    userInput.close();  //Always remember to close the inputstream
});

