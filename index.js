let inquirer = require("inquirer");
let readMe = require("./assets/js/readeMe.js");
let fs = require("fs");

let questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a brief description of your project",
  },
  {
    type: "input",
    name: "installationResources",
    message:
      "What steps are required to install your project? Please provide step by step instructions to get the environment ready",
  },
  {
    type: "input",
    name: "instructions",
    message:
      "Please provide instructions for use, and what this project would be helpful for.",
  },
  {
    type: "input",
    name: "credits",
    message:
      "List any resources or tutorials that you used, as well as collaborators",
  },
  {
    type: "list",
    name: "licensing",
    message: "What license does this project use?",
    choices: ["GNU GPLv3", "MIT", "Unlicensed"],
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "contributions",
    message:
      "Would you like contributions to this app? If yes, please explain how the contributors could help",
  },
  {
    type: "input",
    name: "testing",
    message: "Are there any tests for your application?",
  },
];

function init() {
  inquirer.prompt(questions).then((data) => {
    fs.writeFile("./Generated_File/README.md", readMe(data), (err) =>
      err
        ? console.error(err)
        : console.log(
            "Your file is being generated! It will be in the folder named: Generated_File"
          )
    );
  });
}
init();
