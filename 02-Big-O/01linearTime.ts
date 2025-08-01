// Linear Time
// const groceries: string[] = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

// const searchForItem = (item: string): void => {
//   for (let i = 0; i < groceries.length; i++) {
//      if (groceries[i] === item) {
//        console.log(`Found ${item}`)
//      }
//    }
//  };

// searchForItem("eggs");

 const groceries: string[] = ["milk", "bread", "eggs", "flour", "cheese", "sugar"];

 const searchForItem = (item: string): void => {
  for (let i = 0; i < groceries.length; i++) {
     if (groceries[i] === item) {
       console.log(`Found ${item}`);
     }
   }

   for (let j = 0; j < groceries.length; j++) {
     if (groceries[j] === item) {
       console.log(`Found ${item} 2`);
     } 
   }

   // n + n = 2n O(2n)
   // Drop the constant so it can be O(n)
 };

 searchForItem("eggs");