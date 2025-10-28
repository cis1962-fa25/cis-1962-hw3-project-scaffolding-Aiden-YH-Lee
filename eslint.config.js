import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    ignores: ["dist/**", "node_modules/**"], // Ignore compiled files and dependencies
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node }, // Changed to node since this is a Node.js package
  },
  ...tseslint.configs.recommended,
  {
    // Custom rules configuration
    files: ["**/*.ts"],
    rules: {
      // Custom rules (at least 4 extra rules required)
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "warn",
        {
          allowExpressions: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "prefer-const": "error", // Core ESLint rule, not @typescript-eslint
      "no-console": ["warn", { allow: ["log", "warn", "error"] }], // Allow console.log for CLI output
      eqeqeq: ["error", "always"],
    },
  },
]);
