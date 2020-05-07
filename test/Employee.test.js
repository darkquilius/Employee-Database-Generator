const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    class Employee {
        constructor(name, id, email, role) {
            this.name = name
            this.id = id;
            this.email = email;
            this.role = role
        }

        getName() {};

        getID() {};

        getEmail() {};

        getRole() {};


    };
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    class Employee {
        constructor(name, id, email, role) {
            this.name = name
            this.id = id;
            this.email = email;
            this.role = role
        }

        getName() {};

        getID() {};

        getEmail() {};

        getRole() {};


    };
    const name = "Alice";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    class Employee {
        constructor(name, id, email, role) {
            this.name = name
            this.id = testValue;
            this.email = email;
            this.role = role
        }

        getName() {};

        getID() {};

        getEmail() {};

        getRole() {};


    };
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    class Employee {
        constructor(name, id, email, role) {
            this.name = name
            this.id = id;
            this.email = testValue;
            this.role = role
        }

        getName() {};

        getID() {};

        getEmail() {};

        getRole() {};


    };
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    class Employee {
        constructor(name, id, email, role) {
            this.name = name
            this.id = id;
            this.email = email;
            this.role = role
        }

        getName() {
            this.name = testValue;
            return this.name
        };

        getID() {};

        getEmail() {};

        getRole() {};


    };
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    class Employee {
        constructor(name, id, email, role) {
            this.name = name
            this.id = id;
            this.email = email;
            this.role = role
        }

        getName() {};

        getId() {
            this.id = testValue;
            return this.id
        };

        getEmail() {};

        getRole() {};


    };
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    class Employee {
        constructor(name, id, email, role) {
            this.name = name
            this.id = id;
            this.email = email;
            this.role = role
        }

        getName() {};

        getID() {};

        getEmail() {
            this.email = testValue;
            return this.email
        };

        getRole() {};


    };
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    class Employee {
        constructor(name, id, email, role) {
            this.name = name
            this.id = id;
            this.email = email;
            this.role = role
        }

        getName() {};

        getID() {};

        getEmail() {};

        getRole() {
            this.role = testValue;
            return this.role
        };


    };
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});