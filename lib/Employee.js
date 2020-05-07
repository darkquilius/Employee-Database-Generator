class Employee {
    constructor(name, id, email, role) {
        this.name = name
        this.id = id;
        this.email = email;
        this.role = role
    }

    getName() {
        // this.name = testValue;
        return this.name
    };

    getId() {
        // this.id = testValue;
        return this.id
    };

    getEmail() {
        // this.email = testValue;
        return this.email
    };

    getRole() {
        // this.role = testValue;
        return this.role
    };
};

module.exports = Employee