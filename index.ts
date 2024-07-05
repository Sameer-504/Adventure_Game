#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.yellowBright.bold("\n \t Wellcome to the code with Sameer Anis' - Adventure Game\n"));


//--------------------------Games Variable--------------------------------


let enemies = ["Skeleton","Zombie", "Warrior", "Assassin"]
let maxEnemyHealth = 75
let enemyAttackDamageToHero = 25


//--------------------------------Player Variable ---------------------------

let heroHealth = 100
let attackDamageToEnemy = 50
let numHealthPortion = 3
let healthPortionHealAmount = 30
let healthPortionDropChance = 50 


//--------------------------While Loop  Condition--------------------

let gameRunning  = true

console.log("Wellcome to DeadZone");

Game:
while (gameRunning){
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1)
    let enemyIndex = Math.floor(Math.random() * enemies.length)
    let enemy = enemies[enemyIndex]

    console.log(`# ${enemy} has appeared #\n`);

    while (enemyHealth > 0){
        
    }
}