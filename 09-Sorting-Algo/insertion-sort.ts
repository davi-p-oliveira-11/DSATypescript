function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}

const unsortedArray: number[] = [5, 2, 4, 6, 1, 3];
const sortedArray: number[] = insertionSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6]
