const chunk = (array: number[], size: number) => {
   const chunked: number[] = [];
   let index: number = 0;

   while (index < array.length) {
      const chunk: any = array.slice(index, index + size);
      console.log("--------", chunk);
      chunked.push(chunk);
      index += size;
   }

   return chunked;
};

console.log(chunk([1,2,3,4,5,6,7,8], 3))