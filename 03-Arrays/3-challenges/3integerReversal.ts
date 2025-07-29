// 1. Convert number to string (toString method)
// 2. Convert String to array (split method)
// 3. Reverse the string (reverse method)
// 4. Convert array back to string (join method)
// 5. Convert string to number (parseInt method)
// 6. Return the number

const reverseInt = (n: number) => {
  const reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
};

console.log(reverseInt(123))
console.log(reverseInt(312))
console.log(reverseInt(154))
console.log(reverseInt(875))
console.log(reverseInt(5463))