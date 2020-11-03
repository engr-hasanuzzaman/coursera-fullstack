const f1 = "First value";
const f2 = 'Second value';
const input = `This is ${f1} and we also have the ${f2}`;

function randomTagedFunction(first, ...rest) {
    console.log("first arg ", first);
    console.log("rem args is ", rest);
}

randomTagedFunction `This is ${f1} and we also have the ${f2}`;
randomTagedFunction ``;