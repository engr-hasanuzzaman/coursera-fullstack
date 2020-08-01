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

