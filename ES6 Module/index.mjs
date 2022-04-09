export function Binomial(n,c){
    if(c<=0) return 1;
    return (n/c)*Binomial(n-1,c-1);
}

export function LambertW(x,base,iterations=100){
    if(iterations==1) return Math.log(x);
    return Math.log(x)/Math.log(base)-Math.log(LambertW(x,base,iterations-1))/Math.log(base);
}