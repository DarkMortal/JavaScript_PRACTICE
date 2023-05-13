/* Modules have their own scope and scripts have the global scope*/
export { } //This piece of code will make the typscript compiler compile it as a module*/

const print = console.info;

function getData(name: string, value: number) {
    return [name, value];
}

// With returned tuples/enumerators
const vegeta: [string, number] = ["Vegeta", 9000];
const [name, value] = getData("Son Goku", 9000);

print(`${vegeta[0]}'s power-level is ${vegeta[1]}`);
print(`${name}'s power-level is ${value}`);

function area(a: number) {
    return a * a;
}

print(area(5));
print(area.call(this, 5));