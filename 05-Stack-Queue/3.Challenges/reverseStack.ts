function reverseString(str: string): string {
  // Create an empty stack
  const stack: string[] = [];

  // Push each character of the string onto the stack
  for (const char of str) {
    stack.push(char);
  }

  // Initialize an empty string to store the reversed string
  let reversedStr = "";

  // Pop characters from the stack and build the reversed string
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  // Return the reversed string
  return reversedStr;
}

// Example usage
const originalString = "hello world";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: dlrow olleh
