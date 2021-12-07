const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let fullTeam = [];

function kickPrompt() {

    return inquirer.prompt ([
{ 
type:"list",
message: "Choose the employee work role",
name: "workrole",
choices: ["Manager", "Engineer", "Intern"]
}

    ]).then(response => {


        if(response.choices === "Manager") {

            kickManager();
    } else if (response.choices === "Engineer") {

        kickEngineer();

    } else if (response.choices ==="Engineer") {

      kickEngineer();


    } else 

        kickIntern();

});
}

function kickManager() {


    return inquirer.prompt([
 { 
     type: "input",
     message: "Manager Name:",
     name: "name"
         

},

{ 

    type: "input",
    message: "Manager ID:",
    name: "id"


},
{  
    type: "input",
    message: "Manager Email:",
    name: "email"
},
{

    type:"input",
    message: " Manager Office Number:",
    name: "officeNumber"

},

{
 
  type: "list",
  message: "Choose type of next employee",
  name: "workroleNew",
  choices: ["Manager", "Engineer", "Intern", "None"]

}

    ]).then(response => {

         fullTeam.push(new Manager(response.name, response.id, response.email, response.officeNumber))
         if(response.workroleNew === "Manager") {

            kickManager();

         } else if(response.workroleNew === "Engineer") {

            kickEngineer();
         } else if(response.workroleNew === "Intern") {

            kickIntern();
         } else {

            buildPage()
         }
    });

};

function kickEngineer () {


    return inquirer.prompt([
        {
            type: "input",
            message: "Engineer Name:",
            name: "name"
},
{
  type: "input",
  message: "Engineer ID:",
  name: "id"


},
{
 type: "input",
 message: "Engineer Email:",
 name: "email"


},
{
  type: "input"
  message:"Engineer Github Username:",
  name: "github"

},
{

    type: "list",
    message: "Choose employee type",
    name: "workroleNew",
    choices: ["Manager", "Engineer","Intern", "None"]
}

    ]).then(response => {

        fullTeam.push(new Engineer(response.name, response.id, response.email, response.github))
        if(response.workroleNew === "Manager") {

            kickManager();
        } else if(response.workroleNew === "Engineer") {
            kickEngineer();

    } else if(response)
