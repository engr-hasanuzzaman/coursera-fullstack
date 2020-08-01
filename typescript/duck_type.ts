// typescript is duck typing means it does not look for actual type
// instead it looks for structure
// the following three declaretion are assignable to each other

type One = { foo: string };

interface Two {
    foo: string
};

class Three {
    foo = 'hello'
};

let one: One = { foo: 'this is foo' };
let two: Two = one;
let three: Three = two;
console.log(one, two, three);
