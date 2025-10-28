[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/x6X7wJcH)

# Pizza Validator

A TypeScript library and CLI tool for validating pizza objects.

## What It Does

This package validates pizza data to ensure:

- Valid size (number)
- Valid crust type ("stuffed" or "normal")
- Valid deep dish status (boolean, optional)
- Valid toppings (no broccoli, apple, banana, or kiwi allowed!)

## Installation

```bash
npm install cis-1962-validate-pizza
```

## Usage

### As a Library

```typescript
import { validatePizza } from "cis-1962-validate-pizza";

const pizza = {
  size: 12,
  crust: "normal",
  isDeepDish: false,
  toppings: ["cheese", "pepperoni"],
};

const result = validatePizza(pizza);

if (result.isPizza) {
  console.log("Valid pizza!", result.pizza);
} else {
  console.log("Invalid pizza:", result.errors);
}
```

### As a CLI Tool

```bash
pizza-validator path/to/pizza.json
```

## Development

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## License

MIT
