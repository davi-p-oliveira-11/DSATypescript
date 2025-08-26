function bubbleSort(arr: number[]): number[] {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const myArr: number[] = [4, 2, 6, 5, 1, 3];
const res: number[] = bubbleSort(myArr);
console.log(res); // [1, 2, 3, 4, 5, 6]
