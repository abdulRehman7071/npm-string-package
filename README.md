# String Utils

[![npm version](https://img.shields.io/npm/v/string-utils)](https://www.npmjs.com/package/string-utils)
[![Build Status](https://img.shields.io/github/actions/workflow/status/yourusername/string-utils/node.js.yml)](https://github.com/yourusername/string-utils/actions)
[![License](https://img.shields.io/npm/l/string-utils)](https://opensource.org/licenses/ISC)

A comprehensive string manipulation library for JavaScript, providing a variety of functions for common string operations such as capitalization, camel casing, snake casing, and more.

## Features

- **capitalize**: Capitalizes the first letter of a string.
- **camelCase**: Converts a string to camelCase.
- **snakeCase**: Converts a string to snake_case.
- **kebabCase**: Converts a string to kebab-case.
- **titleCase**: Converts a string to Title Case.
- **reverseString**: Reverses the characters in a string.

## Installation

Install the package via npm:

```bash
npm install @abdulrehman7007/string-utils-js
```
# npm-string-package Usage

```javascript
const {
  capitalize,
  camelCase,
  snakeCase,
  kebabCase,
  titleCase,
  reverseString,
} = require("@abdulrehman7007/string-utils-js");

// Example usage of string-utils functions
const capitalizedString = capitalize("hello world"); // 'Hello world'
const camelCasedString = camelCase("hello world"); // 'helloWorld'
const snakeCasedString = snakeCase("hello world"); // 'hello_world'
const kebabCasedString = kebabCase("hello world"); // 'hello-world'
const titleCasedString = titleCase("hello world"); // 'Hello World'
const reversedString = reverseString("hello world"); // 'dlrow olleh'
```
