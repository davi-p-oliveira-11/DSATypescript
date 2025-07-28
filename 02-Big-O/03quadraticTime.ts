// function findPairs(arr: number[]): void {
//    for (let i = 0; i < arr.length; i++) {
//       for (let j = i + 1; j < arr.length; j++) {
//           console.log(`Pair: ${arr[i]}, ${arr[j]}`);  
//       }
//    }   
// }

// const numbers = [1, 2, 3, 4, 5];
// findPairs(numbers);


function findPairs(arr: number[]): void {
   // o(n²2)
   for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          console.log(`Pair: ${arr[i]}, ${arr[j]}`);  
      }
   }   

   // O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log("-------------", q);
  }


}

const numbers2: number[] = [1, 2, 3, 4, 5];
findPairs(numbers2);


