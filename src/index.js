// src/index.js

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The capitalized string.
 */
function capitalize(str) {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} The camelCased string.
 */
function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

/**
 * Converts a string to snake_case.
 * @param {string} str - The string to convert.
 * @returns {string} The snake_cased string.
 */
function snakeCase(str) {
  return str
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");
}

/**
 * Converts a string to kebab-case.
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-cased string.
 */
function kebabCase(str) {
  return str
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("-");
}

/**
 * Converts a string to Title Case.
 * @param {string} str - The string to convert.
 * @returns {string} The title-cased string.
 */
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Add to exports
module.exports = {
  capitalize,
  camelCase,
  snakeCase,
  kebabCase,
  titleCase,
  reverseString,
};
