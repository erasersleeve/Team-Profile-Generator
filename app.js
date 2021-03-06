const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const { type } = require("os");
const { dirname } = require("path");

const employees = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const initQuery = [
    {
        type:"input",
        message:"What is your manager's name?",
        name:"name"
    },
    {
        type:"input",
        message:"What is your manager's ID?",
        name:"id"
    },
    {
        type:"input",
        message:"What is your manager's email?",
        name:"email"
    },
    {
        type:"input",
        message:"What is your manager's office number?",
        name:"officeNumber"
    }
];
const typeQuery = [
    {
        type:"list",
        message:"What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "There are no more team members to add"],
        name:"member"
    }
];
const engQuery = [
    {
        type:"input",
        message:"What is this engineer's name?",
        name:"name"
    },
    {
        type:"input",
        message:"What is this engineer's ID?",
        name:"id"
    },
    {
        type:"input",
        message:"What is this engineer's email?",
        name:"email"
    },
    {
        type:"input",
        message:"What is this engineer's github username?",
        name:"github"
    }
];

const intQuery = [
    {
        type:"input",
        message:"What is this intern's name?",
        name:"name"
    },
    {
        type:"input",
        message:"What is this intern's ID?",
        name:"id"
    },
    {
        type:"input",
        message:"What is this intern's email?",
        name:"email"
    },
    {
        type:"input",
        message:"Where does this intern study?",
        name:"school"
    }
];


function init() {
    inquirer.prompt(initQuery).then(function (manager) {
        let newManager = new Manager (manager.name, manager.id, manager.email, manager.officeNumber);
        employees.push(newManager);
        addEmployees();
    })    
}
function addEmployees() {
    inquirer.prompt(typeQuery).then(function(type) {
        let etype = type.member;
        if (etype == "Engineer"){
            newEngineer();
        }
        if (etype == "Intern") {
            newIntern();
        }
        if (etype !== "Engineer" && etype !== "Intern") {
            console.log("Writing file to output directory");
            fs.writeFileSync(outputPath, render(employees), "utf8");
        } 
    })
}

function newEngineer() {
    inquirer.prompt(engQuery).then(function(engineer){
        let newEngineer = new Engineer (engineer.name, engineer.id, engineer.email, engineer.github);
        employees.push(newEngineer);
        addEmployees();
    })
}
function newIntern() {
    inquirer.prompt(intQuery).then(function(intern){
        let newIntern = new Intern (intern.name, intern.id, intern.email, intern.school);
        employees.push(newIntern);
        addEmployees();
    })
}

init();

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
// for the provided `render` function to work! ```
