const user = {
    name: 'John',
    age: 30
};

//true
console.log(Object.hasOwn(user, 'name'));
//false
console.log(Object.hasOwn(user, 'address'));
console.log(user.age);