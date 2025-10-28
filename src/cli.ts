// Executes the CLI for validating pizza JSON input
import { validatePizza } from './validate.js';
import fs from 'fs';

const input = process.argv[2];

if (!input) {
    console.error("Please provide a JSON string representing a pizza.");
    process.exit(1);
}

try {
    const fileContent = fs.readFileSync(input, 'utf-8');
    const pizzaData = JSON.parse(fileContent);
    const result = validatePizza(pizzaData);

    if (result.isPizza) {
        console.log("Valid pizza:", result.pizza);
    } else {
        console.error("Invalid pizza:", result.errors);
    }
} catch (err) {
    console.error("Error reading file:", err);
    process.exit(1);
}