class Animal {
    name: string;
    private uid: string;
    protected age: number;
  
    constructor(theName: string, uid: string, age: number) {
      this.name = theName;
      this.uid = uid;
      this.age = age;
    }
    move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
  }
  
  class Snake extends Animal {
    constructor(name: string, age: number, uid: string = 'snake') {
      super(name, uid, age);
    }
    move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
    }
  }
  
  class Horse extends Animal {
    constructor(name: string, age: number, uid: string = 'horse') {
      super(name, uid, age);
    }
    move(distanceInMeters = 45) {
      console.log("Galloping...");
      super.move(distanceInMeters);
    }
  }
  
  let sam = new Snake("Sammy the Python", 5);
  let tom: Animal = new Horse("Tommy the Palomino", 30);
  
//   sam.move();
//   tom.move();
console.log("name of the sam ", sam.name);
sam.name = "updated name";
console.log("name of the sam ", sam.name);
// sam.uid; // this is show error that private method 
// 
