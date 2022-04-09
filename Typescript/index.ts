/* Modules have their own scope and scripts have the global scope*/
export {} //This piece of code will make the typscript compiler compile it as a module*/

function getData(name:string,value:number) {
    return [name,value];
}

// With returned tuples/enumerators
const vegeta : [string,number] = ["Vegeta",9000];
const [name,value] = getData("Son Goku",9000);
console.log(vegeta);
console.log(name,value);

function area(a:number){
    return a*a;
}
console.log(area(5));
console.log(area.call(this,5));