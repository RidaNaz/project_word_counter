#!/usr/bin/env node
import inquirer from "inquirer";
const counter = (text) => text.replace(/\s/g, "").length;
async function start(counter) {
    do {
        let userInput = await inquirer.prompt({
            type: "input",
            name: "text",
            message: "Write your paragraph here :"
        });
        console.log(counter(userInput.text));
    } while (true);
}
start(counter);
