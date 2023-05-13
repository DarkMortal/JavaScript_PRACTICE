/* A Buffer is temporary storage spot for a chunk of data that is being transferred from one memory location to another. It passes small chunks of data at a time*/

const fs = require("fs");

var data = fs.ReadStream(__dirname + "/Text.txt", 'utf-8');  //For Reading data from file
var write = fs.WriteStream(__dirname + "/New Data.txt");  //For Writing data into file
var write2 = fs.WriteStream(__dirname + "/New Data2.txt");  //Another writestream

data.on("data", arg => {         //He does exactly what I do
    console.log(arg + "\n");
    write.write(arg);
});

data.pipe(write2);  //But better

var arr = ["Vegeta", "Broly", "Goku", "Gohan", "Rycon", "Jayden"];
arr.forEach(name => { console.log("Warrior :", name); });   //A callback function is passed as an argument to the ForEach method

//'this' keyword in Javascript refers to the object that's executing the current function