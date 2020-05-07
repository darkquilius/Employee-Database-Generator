const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("Can set school via constructor", () => {
    class Intern extends Employee {

        constructor(school) {

            super();
            this.school = testValue
        }

        getRole() {
            this.role = "Intern";
            return this.role
        }

        getSchool() {
            this.school = testValue;
            return this.school
        }
    }
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    class Intern extends Employee {

        constructor(school) {

            super();
            this.school = testValue
        }

        getRole() {
            this.role = "Intern";
            return this.role
        }

        getSchool() {
            this.school = testValue;
            return this.school
        }
    }
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    class Intern extends Employee {

        constructor(school) {

            super();
            this.school = testValue
        }

        getRole() {
            this.role = "Intern";
            return this.role
        }

        getSchool() {
            this.school = testValue;
            return this.school
        }
    }
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});