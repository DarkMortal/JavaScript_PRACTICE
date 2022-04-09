const {Binomial,LambertW}=require("./index.js");

console.log(Binomial(5,2));
var base=8,a=LambertW(5,base);
console.log(a,a*Math.pow(base,a));  //a*(base^a)=5