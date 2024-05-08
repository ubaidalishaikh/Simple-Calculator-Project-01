#! /usr/bin/env node
                    //This is called "SHABANG"

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition","substraction","multiplication","division"]
    }
]);


//conditional statments
if(answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);

} else if(answer.operator === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
    
}else if(answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondNumber);
    
}else if(answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber);
    
}else{
    console.log("please select valid operator");
    
};

