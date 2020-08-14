// partial: take Interface type and make properties optionals
enum Gender {
    'male',
    'female',
    '3rd'
}
interface Human {
    gender: Gender,
    age: number,
    name: string,
    profession: string,
    address: string
}

// Partial take Interface as input and make all the properties optionals
// we want to pass only required fields to update. without partial we would need to pass all the req
// params of Human 
function updateHuman(human: Human, fieldToUpdates: Partial<Human>) {
    return {...human, ...fieldToUpdates};
}

const h1 = {
    gender: Gender.male,
    age: 30,
    name: "hasanuzzaman",
    profession: 'private service',
    address: 'dhakar'
};

console.log("after updating", h1, ", become: ", updateHuman(h1, { name: 'Hasan Uz Zaman' }));

// works like map/dictionality and here , have to use
interface PageInfo {
    title: string;
  }
  
  type Page = "home" | "about" | "contact";
  
  const nav: Record<Page, PageInfo> = {
    about: { title: "about" },
    contact: { title: "contact" },
    home: { title: "home" }
  };

//   Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys from Type.

// here we are picking only gender and age from Human type
type Animal =  Pick<Human, "gender" | "age">;
let cow: Animal = { gender: Gender.male, age: 3}

// Omit<Type, Keys>
// Constructs a type by picking all properties from Type and then removing Keys.
// This is opposite of pick

// same as Animal Type
type AnimalOmit = Omit<Human, 'address' | 'profession' | 'name'>;
const cow1: AnimalOmit = { gender: Gender.male, age: 1}
cow = cow1;

// Exclude<Type, ExcludedUnion>
// Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.

type T0 = Exclude<"a" | "b" | "c", "a">;
//    ^?
type T1 = Exclude<"a" | "b" | "c", "a" | "b">;
//    ^?
type T2 = Exclude<string | number | (() => void), Function>;
//    ^?

// diff btw Omit and exclude https://stackoverflow.com/questions/56916532/difference-b-w-only-exclude-and-omit-pick-exclude-typescript#:~:text=1%20Answer&text=The%20opposite%20of%20this%20is,specified%20properties%20from%20the%20type.&text=Exclude%20is%20a%20different%20beast,a%20constituent%20of%20that%20union.
// They operaate on diff type, omit take object type but Exclude take union type

// Extract<Type, Union>
// Constructs a type by extracting from Type all union members that are assignable to Union.
type T3 = Extract<"a" | "b" | "c", "a" | "f">;
//    ^?
type T4 = Extract<string | number | (() => void), Function>;
//    ^?
// extract is counter part of pick but for union type like Exclude & Omit

// NonNullable<Type>
// Constructs a type by excluding null and undefined from Type.
// NonNullable works only on union type

// Parameters<Type>
// Constructs a tuple type from the types used in the parameters of a function type Type.
type T8 = Parameters<(a: number, b: string, c: number | string) => void >;
// Parameters take function as parameter and make a tupe using function parameters

// ReturnType<Type> take function type as input. Type == Function type
// Constructs a type consisting of the return type of function Type.
declare function f1(): { a: number; b: string };
type T5 = ReturnType<typeof f1>;

// Required<Type>
// Constructs a type consisting of all properties of T set to required. The opposite of Partial.
interface Props {
    a?: number;
    b?: string;
  }
  
  const obj: Props = { a: 5 };
  
  const obj2: Required<Props> = { a: 5 }; 