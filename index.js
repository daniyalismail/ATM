#! /usr/bin/env node
import inquirer from "inquirer";
const balance = 25000; // We Are Taking A Examplary Balance
const pin = 1456; //We Are Taking A Examplary Pin
console.log("Welcome To Atm Program");
console.log("Your Current Balance In The Account Is = " + balance);
let user_answer = await inquirer.prompt({
    message: "Enter Your Pin Number = ",
    type: "number",
    name: "Pin_num",
});
if (user_answer.Pin_num === pin) {
    console.log("Your Pin Is Correct");
    let choice = await inquirer.prompt({
        message: "Choose What You Want To Do",
        type: "list",
        choices: ["Withdraw", "Check Balance"],
        name: "user_choice",
    });
    if (choice.user_choice === "Withdraw") {
        let Withdraw_amount = await inquirer.prompt({ message: "Enter Amount To Withdraw = ", name: "amount", type: "number" });
        let new_amount = balance - Withdraw_amount.amount;
        console.log("Your Remaining Balance Is = " + new_amount);
    }
    else {
        console.log("Your Current Balance Is = " + balance);
    }
}
else {
    console.log("You Have Entered A Incorrect Code ");
}
