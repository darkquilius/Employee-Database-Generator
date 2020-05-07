const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {

    class Manager extends Employee {

        constructor(officeNumber) {

            super();
            this.officeNumber = testValue
        }
    }
    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
    class Manager extends Employee {

        constructor(officeNumber, role) {

            super();
            this.officeNumber = 100;
        }

        getRole() {
            this.role = testValue;
            return this.role
        }
    }

    const testValue = "Manager";
    const e = new Manager("Foo", 1, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    class Manager extends Employee {

        constructor(officeNumber, role) {

            super();
        }

        getRole() {
            this.role = "Manager";
            return this.role
        }

        getOfficeNumber() {
            this.officeNumber = testValue;
            return this.officeNumber
        }
    }


    const testValue = 100;
    const e = new Manager("Foo", 1, "test@test.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});