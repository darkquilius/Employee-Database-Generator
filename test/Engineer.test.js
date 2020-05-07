const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Can set GitHUb account via constructor", () => {
    class Engineer extends Employee {

        constructor(github) {

            super();
            this.github = testValue
        }

        getRole() {
            this.role = "Engineer";
            return this.role
        }

        getGithub() {
            this.github = testValue;
            return this.github
        }
    }
    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {

    class Engineer extends Employee {

        constructor(github) {

            super();
        }

        getRole() {
            this.role = "Engineer";
            return this.role
        }

        getGithub() {
            this.github = testValue;
            return this.github
        }
    }

    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {

    class Engineer extends Employee {

        constructor(github) {

            super();
        }

        getRole() {
            this.role = "Engineer";
            return this.role
        }

        getGithub() {
            this.github = testValue;
            return this.github
        }
    }

    const testValue = "GitHubUser";
    const e = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});