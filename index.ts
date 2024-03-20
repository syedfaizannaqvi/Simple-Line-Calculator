import inquirer from "inquirer";
let answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operators to perform operation",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
//Conditional Statements
if(answer.Operator === "Addition"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if(answer.Operator === "Subtraction"){
  console.log(answer.firstNumber - answer.secondNumber);
}
else if(answer.Operator === "Multiplication"){
  console.log(answer.firstNumber * answer.secondNumber);
}
else if(answer.Operator === "Division"){
  console.log(answer.firstNumber / answer.secondNumber);
}
else{
  console.log("please select valid operator");
}