import { Binomial, LambertW, print } from "./index.mjs";

print(Binomial(5, 2));
var base = 8, a = LambertW(5, base);
print(a, a * Math.pow(base, a));  //a*(base^a)=5