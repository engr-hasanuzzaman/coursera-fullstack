interface Person {
    name: string,
    age: number
}

function printPerson(person: Person) {
    console.log(`Name: ${person.name}, age: ${person.age}`);
}

printPerson({name: 'sumon', age: 24});

// Optional Properties. interface can have optional properties for passing options
// One good reason to add all the possible properties and kept optional if do not required is
//  typyscript will suggest for mistypeing

interface Button {
    color?: string,
    width?: number,
    height?: number,
    text: string,
    type?: string
}

// Button only require text

function createButton(buttonProps: Button) {
    let btn: Button = {color: 'black', width: 50, height: 50, type: '', text: ''};
    return {...btn, ...buttonProps};
}

let btn1 = createButton({ text: 'Submit', type: 'submit'} );
let btn2 = createButton({ text: 'Review', color: 'green' });
console.log(btn1, btn2);

// for variable: const, for properties: readonly
// reanonly properties are not editable after creation
// 
let normArr: number[] = [1, 2, 3];
let roa: ReadonlyArray<number> = [4,5,6];

// force to assing readonly array to normal array (otherwise give error)
normArr = roa as number[];
// N.B: not, normArr & roa points to the same obj so updating norArr will update roa also

// to pass extra properties (through Interface ) we have to create new object then otherwise
interface LabeledValue {
    label: string;
  }
  
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" }; // 
  // type check will not check extra properties as this is myObj type and only check req properties
  printLabel(myObj); 
//   printLabel({ size: 10, label: "Size 10 Object" }); // will give error that 
// Argument of type '{ size: number; label: string; }' is not assignable to parameter of type 'LabeledValue'.
//  or we can add index signature  to LabeledValue to reveive other properties
interface LabeledValueWinthIndexType {
    label: string;
    [index: string]: any
  }
// now type script know there are other properties

// nterfaces are capable of describing the wide range of shapes that JavaScript objects can take.
// To describe a function type with an interface, we give the interface a call signature.
// function declaration with only the parameter list and return type given.
interface SearchFunc {
    (source: string, subString: string): boolean;
  }

//   type returned from a numeric indexer must be a subtype of the type returned from the string indexer.
// N.B: need to try examples

let func: SearchFunc = (s: string, sub: string) => {
  return true;
}

// without params type
let func1: SearchFunc = (s, sub) => {
  return true;
}

// indexable type
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];
myArray[3] = "sumon"
console.log("updated indexable myArray ", myArray); // [ 'Bob', 'Fred', <1 empty item>, 'sumon' ]

// in interface & type declaration semi-colon, comma both are allowed to separate properties
// even you can skip semicolon or comma bo the following are valid 
interface A {
  name: string;
  age: number;
}

interface B {
  name: string,
  age: number,
}

interface C {
  name: string
  age: number
}

let a: A = {name: 'A', age: 30};
let b: B = {name: "B", age: 0};
let c: C = {name: "C", age: 2};
console.log(a, b, c);

// in js object, key type convert to string type (call toString implicitly for not string object)
// so, in the below CustomMap means it will return number for string key, again it will return string
//  for string that is contradict with previous one (this is for if there any string key explicitly)
// interface CustomMap {
//   [index: string]: number,
//   name: string,
// }

// following declaration is valid as explict string index return either string | number
interface CustomMap {
  [index: string]: number | string,
  name: string,
}
