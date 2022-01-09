const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const inquirer = require("inquirer")
 
// create question for manager engineer and intern 
const managerquestions  = [
    {
        type: "input",
        name: "name",
        message: " provide manager name"
    },
    {
        type: "input",
        name: "id",
        message: "provide manager id "
    },
    {
        type: "input",
        name: "email",
        message: "provide manager email "
    }, 
    {
        type: "input",
        name: "officenumber",
        message: "provide manager office number "
    }, 
]
const engineerquestions  = [
    {
        type: "input",
        name: "name",
        message: " provide engineer name"
    },
    {
        type: "input",
        name: "id",
        message: "provide Engineer id "
    },
    {
        type: "input",
        name: "email",
        message: "provide Engineer email "
    }, 
    {
        type: "input",
        name: "github",
        message: " provide engineer github link"
    }, 
]
const internquestions  = [
    {
        type: "input",
        name: "name",
        message: " provide intern name"
    },
    {
        type: "input",
        name: "id",
        message: "provide intern id "
    },
    {
        type: "input",
        name: "email",
        message: "provide intern email "
    }, 
    {
        type: "input",
        name: "school",
        message: "provide interns schools"
    }, 
]
 // team can only have one manager but must have a manager
 function managerProfile() {
    inquirer.prompt(managerquestions).then(response => {
        console.log(response)
    });
 }
 managerProfile()

 function engineerProfile() {
    inquirer.prompt(engineerquestions).then(response => {
        console.log(response)
    });
 }
 engineerProfile() 

 function internProfile() {
    inquirer.prompt(managerquestions).then(response => {
        console.log(response)
    });
 }
 internProfile()
 // team can have multiple engineer and interns 

 // collect input 
 //insert to HTML template 
 // generate html in Dist folder 
 