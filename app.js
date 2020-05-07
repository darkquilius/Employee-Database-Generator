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


const employeeQuestions = [{
        type: "input",
        message: "Employee name?",
        name: "name"
    },
    {
        type: "number",
        message: "Employee ID?",
        name: "id"
    },
    {
        type: "input",
        message: "Employee email?",
        name: "email"
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
    type: "number",
    message: "Office number?",
    name: "office"
}]

const engineerQuestions = [{
    type: "input",
    message: "Github username?",
    name: "github"
}]

const internQuestions = [{
    type: "input",
    message: "School name?",
    name: "school"
}]

async function generateEmployee() {

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

        employees.push(newEmployee)
        managerChosen = true;
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
    console.log(managerChosen)
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


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```