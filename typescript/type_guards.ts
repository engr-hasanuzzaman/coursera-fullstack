type Fish = { swim: () => void };
type Bird = { fly: () => void };
declare function getSmallPet(): Fish | Bird;
// ---cut---
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
let f: Fish = {swim: () => "swim"};
let b: Bird = { fly: () => "fly"}
console.log(isFish(f));
console.log(isFish(b));

// isNotFish
function isNotFish(pet: Fish | Bird): pet is Exclude<typeof pet, Fish>    
{ 
    return <Fish>pet === undefined;
}

// Type guard is being used for narrowing type
// different types of type guards
// 1. User define type guards  (the above example is type predicate)
//  - type predicate (param in Type & using in (in type guard) ex. swim in pet)
// 2. typeof type guards
// 3. instanceof type guards
