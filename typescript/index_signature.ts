// @errors: 2413
// @strictPropertyInitialization: false
interface Animal {
    name: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }
  
  // Error: indexing with a numeric index must be subtype of string index
  interface NotOkay {
    [x: number]: Animal;
    [x: string]: Dog;
  }
  
  interface Okay {
    [x: number]: Dog;
    [x: string]: Animal;
  }
  
  let n: Okay = {};
  n[1] = {name: 'a', breed: 'foo'};
  n['f'] = {name: 'b'};
  console.log(n);