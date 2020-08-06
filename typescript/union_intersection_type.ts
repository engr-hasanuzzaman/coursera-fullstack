// using union with type means we can pass any of the union type
// ex. variale foo can take eigher string, number or boolean as value

let foo: string | number | boolean;
foo = "str";
foo = 1;
foo = false;
// foo = {} // this will show error as {} is not either string | number | boolean

// If we use union with interface, that means only all the propperties from all the types will be accessable 
//  as we type could be any othe the unin type
interface Bird{
    fly: () => "fly";
    eat: () => "eat";
}

interface Fish {
    swim: () => "swim";
    eat();
}

// birdFish must have all the properties from both Bird & Fish ans we do not konw which method
// we are going to call on birdFish object
let birdFish: Bird | Fish;
birdFish.eat(); // no error as both Bird & Fish have eat method
// birdFish.fly(); // it is not sure wheather birdFish is bird or fish
// type guard
function isFish(pet: Bird | Fish): boolean {
    return (<Fish>pet).swim !== 'undefined';
}

// Intersection Types: create new type with all the properties will the types