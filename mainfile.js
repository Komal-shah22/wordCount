#!/usr/bin/env node
import inquirer from "inquirer";
import wordCounter from "./app.js";
import result from "./index.js";
import countvowels from "./vowels.js";
let option = await inquirer.prompt([{
        name: "click",
        type: "list",
        message: "Please one of the following...",
        choices: ["wordCounter", "vowelsCount"]
    }]);
if (option.click === "wordCounter") {
    result(wordCounter);
}
else if (option.click === "vowelsCount") {
    result(countvowels);
}
