const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs")
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

let managerChosen = false;
const employees = []

async function generateEmployee() {
    const employeeQuestions = [{
            type: "input",
            message: "Employee name?",
            name: "name",
            validate: (name) => {
                let regexp = /[A-Z]/gi;
                let result = name.match(regexp) ? true : "   Please input proper value";
                return result
            }
        },
        {
            type: "input",
            message: "Employee ID?",
            name: "id",
            validate: (name) => {
                let regexp = /[0-9]/gi;
                let result = name.match(regexp) ? true : "   Please input proper value";
                return result
            },
        },
        {
            type: "input",
            message: "Employee email?",
            name: "email",
            validate: (name) => {
                let regexp = /([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})/gi;
                let result = name.match(regexp) ? true : "   Please input a proper value";
                return result
            }
        },
        managerChosen ? {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Engineer", "Intern"],
            name: "role"
        } : {
            type: "list",
            message: "What is the employee's role?",
            choices: ["Manager", "Engineer", "Intern"],
            name: "role"
        }
    ]

    const managerQuestions = [{
        type: "input",
        message: "Office number?",
        name: "office",
        validate: (name) => {
            let regexp = /[0-9]/gi;
            let result = name.match(regexp) ? true : "   Please input proper value";
            return result
        }
    }]

    const engineerQuestions = [{
        type: "input",
        message: "Github username?",
        name: "github",
        validate: (name) => {
            let regexp = /[A-Z]/gi;
            let result = name.match(regexp) ? true : "   Please input proper value";
            return result
        }
    }]

    const internQuestions = [{
        type: "input",
        message: "School name?",
        name: "school",
        validate: (name) => {
            let regexp = /[A-Z]/gi;
            let result = name.match(regexp) ? true : "   Please input proper value";
            return result
        }
    }]

    const info = await inquirer.prompt(employeeQuestions);

    if (info.role === "Manager") {
        let office = await inquirer
            .prompt(managerQuestions)

        let newEmployee = new Manager(
            info.name,
            info.id,
            info.email,
            info.role,
            office.office)

        managerChosen = true;

        employees.push(newEmployee)
        addEmployee()
    };
    if (info.role === "Engineer") {
        let github = await inquirer
            .prompt(engineerQuestions)

        let newEmployee = new Engineer(
            info.name,
            info.id,
            info.email,
            info.role,
            github.github)
        employees.push(newEmployee)

        addEmployee()
    };
    if (info.role === "Intern") {
        let school = await inquirer
            .prompt(internQuestions)

        let newEmployee = new Intern(
            info.name,
            info.id,
            info.email,
            info.role,
            school.school)
        employees.push(newEmployee)

        addEmployee()
    };
};

async function addEmployee() {

    let addEmployee = await inquirer.prompt([{
        type: 'confirm',
        message: 'Add another employee?',
        name: 'choice'
    }]);

    addEmployee.choice ? generateEmployee() : renderHTML()
}

async function renderHTML() {
    let HTML = render(employees);
    fs.writeFile(outputPath, HTML, 'utf8', function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}

generateEmployee()