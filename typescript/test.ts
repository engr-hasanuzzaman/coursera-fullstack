const a = {
    a: 'a',
    b: 'b',
    c: 'c',
};

// let foo = keyof a;
// keyof work on type layter that take all the keys from the type and crate a literal union
// in here a is not type, so first we have used typeof a to get type of a
// then we have applied keyof to get all the keys of type 
type literal1 = keyof typeof a;
let a1: literal1 = 'a';
// a1 = 'd'

type A = {
    a: string;
    b: string;
    c: string;
}

// as A is already a type we can apply keyof directly on it
type literal2 = keyof A;
