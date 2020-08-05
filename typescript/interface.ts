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