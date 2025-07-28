class MyArray<T> {
   length: number;
   data: {[key: number]: T};

   constructor () {
     this.length = 0;
     this.data = {};
   }

   push(item: T): number {
     this.data[this.length] = item;
     this.length++;
     return this.length;
   }

   get(index: number): T | undefined {
     return this.data[index];
   }

   pop(): T | undefined {
     const lastItem = this.data[this.length - 1];
     delete this.data[this.length - 1];
     this.length--;
     return lastItem;
   }

   shift(): T | undefined {
     const firstItem = this.data[0];
     
     for (let i = 0; i < this.length; i++) {
       this.data[i] = this.data[i + 1];
     }

     // Delete the last element (which now contains the original second element)
     delete this.data[this.length - 1];
     this.length--;

     // Return the first item that was removed from the array
     return firstItem;
   }

   unshift(item: T): number {
    // Shift all elements one position to the right to make room at index 0
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    // Place the new item at the beginning of the array
    this.data[0] = item;

    // Increase the length to account for the new element
    this.length++;

    // Return the new length
    return this.length;
   }


   delete(index) {
     // Store the item to be removed
     const item = this.data[index];

     // Shift elements after the target element (excluding the last one)
     for (let i = index; i < this.length - 1; i++) {
       this.data[i] = this.data[i + 1];
     }

     // Delete the last element (which now holds the element to be removed)
     delete this.data[this.length - 1];

     // Decrement length
     this.length--;

     // Return the removed item
     return item;
   }

   map<U>(callback: (item: T, index: number) => U): MyArray<U> {
    // Create a new instance to store transformed values
    const result = new MyArray<U>();

    // Iterate through all items
    for (let i = 0; i < this.length; i++) {
      // Apply the callback to transform the item, then push it to the new array
      result.push(callback(this.data[i], i));
    }

   // Return the new transformed array
    return result;
  }

  filter(callback: (item: T, index: number) => boolean): MyArray<T> {
    // Create a new instance to store filtered results
    const result = new MyArray<T>();

    // Iterate through all items
    for (let i = 0; i < this.length; i++) {
      // If the callback returns true, include the item in the new array
      if (callback(this.data[i], i)) {
        result.push(this.data[i]);
      }
    }

    // Return the filtered array
    return result;
  }

  includes(value: T): boolean {
    // Iterate through all items
    for (let i = 0; i < this.length; i++) {
      // If the current item matches the searched value, return true
       if (this.data[i] === value) {
        return true;
      }
    }

    // If the loop completes without finding the value, return false
    return false;
  }

  reverse(): void {
    // Find the middle index to limit the number of swaps
    const middle = Math.floor(this.length / 2);

    // Swap elements from both ends moving toward the middle
    for (let i = 0; i < middle; i++) {
      const temp = this.data[i];
      this.data[i] = this.data[this.length - 1 - i];
      this.data[this.length - 1 - i] = temp;
    }

    // No return needed; modifies the current array in place
  }

  reduce<U>(callback: (accumulator: U, current: T, index: number) => U, initialValue: U): U {
    // Initialize the accumulator with the provided initial value
    let accumulator = initialValue;

    // Iterate through all items and update the accumulator
    for (let i = 0; i < this.length; i++) {
      accumulator = callback(accumulator, this.data[i], i);
    }

    // Return the final accumulated result
    return accumulator;
}





}

const myNewArray = new MyArray();
myNewArray.push("one");
myNewArray.push("two");
myNewArray.push("three");
// myNewArray.pop();
// myNewArray.shift();
myNewArray.delete(1);
// console.log(myNewArray.get(0));
console.log(myNewArray);