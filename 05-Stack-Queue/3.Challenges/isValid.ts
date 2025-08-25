const isValidParenthesis = (str: string): boolean => {
  // Use a stack to store opening brackets
  const stack: string[] = [];

  // Map opening brackets to their closing counterparts
  const brackets: Record<string, string> = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  // Loop through each character in the string
  for (const char of str) {
    // If it's an opening bracket, push it to the stack
    if (brackets[char]) {
      stack.push(char);
    } else {
      // If it's a closing bracket, check if it matches the top of the stack
      const top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }

  // After iterating, check if the stack is empty (all brackets were matched)
  return stack.length === 0;
};

// Example usage
console.log(isValidParenthesis("(){}[]")); // true
console.log(isValidParenthesis("([)]"));   // false
console.log(isValidParenthesis("()"));     // true
console.log(isValidParenthesis("("));      // false
