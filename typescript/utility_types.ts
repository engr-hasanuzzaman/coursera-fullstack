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
const cow: Animal = { gender: Gender.male, age: 3}
