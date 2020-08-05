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

