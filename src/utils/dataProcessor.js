/**
 * Utility functions for processing input data
 */

// Convert number to string if not already
const numberToString = (num) => num.toString();

// Check if a string is a valid number
const isNumber = (str) => !isNaN(str) && !isNaN(parseFloat(str));

// Check if a character is an alphabet
const isAlphabet = (char) => /^[A-Za-z]$/.test(char);

// Check if a character is a special character
const isSpecialChar = (char) => !isNumber(char) && !isAlphabet(char);

/**
 * Process input data array and categorize elements
 * @param {Array} data - Input array of strings
 * @returns {Object} Processed data object
 */
const processData = (data) => {
  const result = {
    odd_numbers: [],
    even_numbers: [],
    alphabets: [],
    special_characters: [],
    sum: "0",
    concat_string: ""
  };

  // Handle empty or invalid input
  if (!Array.isArray(data)) {
    throw new Error("Invalid input: data must be an array");
  }

  let numericSum = 0;
  const alphabetsArray = [];

  // Process each element
  data.forEach(item => {
    const str = item.toString();

    if (isNumber(str)) {
      const num = parseInt(str);
      numericSum += num;
      
      if (num % 2 === 0) {
        result.even_numbers.push(numberToString(num));
      } else {
        result.odd_numbers.push(numberToString(num));
      }
    } else if (str.length > 0) {
      // Process each character in the string
      [...str].forEach(char => {
        if (isAlphabet(char)) {
          result.alphabets.push(char.toUpperCase());
          alphabetsArray.push(char);
        } else if (isSpecialChar(char)) {
          result.special_characters.push(char);
        }
      });
    }
  });

  // Set sum as string
  result.sum = numberToString(numericSum);

  // Create concatenated string with alternating caps
  result.concat_string = createAlternatingCapsString(alphabetsArray);

  return result;
};

/**
 * Create alternating caps string from alphabets array
 * @param {Array} alphabets - Array of alphabet characters
 * @returns {String} Alternating caps string
 */
const createAlternatingCapsString = (alphabets) => {
  if (alphabets.length === 0) return "";
  
  // Reverse the array and process pairs
  const reversed = [...alphabets].reverse();
  let result = "";
  let isUpperCase = false;

  reversed.forEach(char => {
    result += isUpperCase ? char.toUpperCase() : char.toLowerCase();
    isUpperCase = !isUpperCase;
  });

  return result;
};

module.exports = {
  processData,
  isNumber,
  isAlphabet,
  isSpecialChar
};
