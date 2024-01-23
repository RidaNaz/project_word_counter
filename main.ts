#!/usr/bin/env node

import inquirer from "inquirer";

const counter = (text: string) => text.replace(/\s/g, "").length

async function start(counter: (text: string) => number) {
    do {
        let userInput = await inquirer.prompt({
            type: "input",
            name: "text",
            message: "Write your paragraph here :"
        })
        console.log(counter(userInput.text))
    }
    while (true)
}

start(counter)
