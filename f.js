const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function performCalculation(num1, operator, num2) {
  switch(operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    default: return "Invalid operator";
  }
}

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  while (true) {
    try {
      const num1 = parseFloat(await askQuestion("Enter first number (or 'quit' to exit): "));
      if (isNaN(num1)) {
        console.log("Goodbye!");
        rl.close();
        return;
      }
      const operator = await askQuestion("Enter operator (+, -, *, /): ");
      const num2 = parseFloat(await askQuestion("Enter second number: "));
      
      const result = performCalculation(num1, operator, num2);
      console.log(`Result: ${result}\n`);
    } catch (err) {
      console.log("Error, try again.\n");
    }
  }
}

main();
