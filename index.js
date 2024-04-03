#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuesssedNumber",
        type: "number",
        message: "please guess a number between 1-6",
    },
]);
if (answer.userGuesssedNumber === randomNumber) {
    console.log("congratulations you guessed right number");
}
else {
    console.log("you guessed wrong number");
}
