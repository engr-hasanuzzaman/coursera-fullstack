type Combined = { a: number } & { b: string };
type Conflicting = { a: number } & { a: string };
// here in Conflicting.a is never as there is any value that is at a time number & string
// const a: Conflicting = {a: 1} # will show Type 'number' is not assignable to type 'never'

type Person = { name: string } & { phone: string } & { s_number: number };
// Person is like = {name: string, phone: string, s_number: number }
const sumon: Person = { name: "sumon", phone: "01723781598", s_number: 1 };
console.log(sumon);