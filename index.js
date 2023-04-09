#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from "chalk";
import { sum, division, multiply, subtract } from "./operation.js";
console.log("testing");
const WELCOME = async () => {
    console.log(figlet.textSync("Calculator"));
    const input = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter First Number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number",
        },
        {
            type: "list",
            name: "operation",
            message: "Select Your Operation",
            choices: ["+", "/", "-", "*"],
        },
    ]);
    if (input.operation === "+") {
        const result = sum(input.num1, input.num2);
        console.log(chalk.bgGreen(`result: ${result}`));
    }
    else if (input.operation === "/") {
        const result = division(input.num1, input.num2);
        console.log(chalk.bgGreen(`result: ${result}`));
    }
    else if (input.operation === "-") {
        const result = subtract(input.num1, input.num2);
        console.log(chalk.bgGreen(`result: ${result}`));
    }
    else if (input.operation === "*") {
        const result = multiply(input.num1, input.num2);
        console.log(chalk.bgGreen(`result: ${result}`));
    }
    else {
        console.log("Invalid operation");
    }
};
(async () => {
    await WELCOME();
})();
