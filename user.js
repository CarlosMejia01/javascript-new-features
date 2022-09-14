class User {
    name = ""
    age = 0
    #salt = "xyz"

    constructor(name) {
        this.name = name
        console.log(this.#encryptPassword());
    }

    #encryptPassword() {
        return this.name + this.#salt
    }
}

const user = new User('Joe');
console.log(user.name);