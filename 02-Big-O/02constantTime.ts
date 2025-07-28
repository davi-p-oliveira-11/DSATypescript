const numbers: number[] = [1, 2, 3, 4, 5];

// O(1)
const getElement = (arr: number[], index: number): any => arr[index];
console.log(getElement(numbers, 1));
console.log(getElement(numbers, 4))