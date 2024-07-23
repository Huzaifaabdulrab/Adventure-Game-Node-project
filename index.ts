#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class playerDetail {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecreases() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease() {
        this.fuel = 100
    }
}

class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    fuelDecreases() {
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}
let programerName : string="HUZAIFA"
console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>${chalk.blue(programerName)}<<<<<<<<<<<<<<<<<<<<<<<<<<<<`)
let player = await inquirer.prompt({
    name: "player_Name",
    type: "input",
    message: "Please enter your name then start a game",
    default:"User"
});
let opponent = await inquirer.prompt([
    {
        name: "gamesList",
        type: "list",
        message: "Please choose a game",
        choices: ["Skeleton", "Assassin", "Zombie"],
    }
]);

const p1 = new playerDetail(player.player_Name)
const o1 = new Opponent(opponent.gamesList)

// console.log(`${chalk.bold.blueBright(p1.name)} VS ${chalk.bold.redBright(o1.name)}`);
do{//Skeleton
if (opponent.gamesList == "Skeleton") {
    let ask = await inquirer.prompt({
        name: "opt",
        type: "list",
        message: "Select your Opponent",
        choices: ["Attack", "Drink", "Run For Your Life..."]
    });
    if (ask.opt == "Attack") { }
    let num: number = Math.floor(Math.random() * 2);
    if (num > 0) {
        p1.fuelDecreases()
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        if (p1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
            process .exit()
        }
    }
    if (num <= 0) {
        o1.fuelDecreases()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        if (o1.fuel <= 0) {
            console.log(chalk.green.bold.italic("You Win"))
            process .exit()
        }
    }
    if (ask.opt == "Drink") {
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`Your Drink Health Portion Your Fuel is ${p1.fuel}`));
        
    }
    if (ask.opt == "Run For Your Life...") {
        console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
    }
}
//Assassin
if (opponent.gamesList == "Assassin") {
    let ask = await inquirer.prompt({
        name: "opt",
        type: "list",
        message: "Select your Opponent",
        choices: ["Attack", "Drink", "Run For Your Life..."]
    });
    if (ask.opt == "Attack") { }
    let num: number = Math.floor(Math.random() * 2);
    if (num > 0) {
        p1.fuelDecreases()
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        if (p1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
            process .exit()
        }
    }
    if (num <= 0) {
        o1.fuelDecreases()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        if (o1.fuel <= 0) {
            console.log(chalk.green.bold.italic("You Win"))
            process .exit()
        }
    }
    if (ask.opt == "Drink") {
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`Your Drink Health Portion Your Fuel is ${p1.fuel}`));
        
    }
    if (ask.opt == "Run For Your Life...") {
        console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
    }
}
//Zombie
if (opponent.gamesList == "Zombie") {
    let ask = await inquirer.prompt({
        name: "opt",
        type: "list",
        message: "Select your Opponent",
        choices: ["Attack", "Drink", "Run For Your Life..."]
    });
    if (ask.opt == "Attack") { }
    let num: number = Math.floor(Math.random() * 2);
    if (num > 0) {
        p1.fuelDecreases()
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`))
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`))
        if (p1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
            process .exit()
        }
    }
    if (num <= 0) {
        o1.fuelDecreases()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`))
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`))
        if (o1.fuel <= 0) {
            console.log(chalk.green.bold.italic("You Win"))
            process .exit()
        }
    }
    if (ask.opt == "Drink") {
        p1.fuelIncrease()
        console.log(chalk.bold.italic.green(`Your Drink Health Portion Your Fuel is ${p1.fuel}`));
        
    }
    if (ask.opt == "Run For Your Life...") {
        console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"))
    }
}
}
while(true)