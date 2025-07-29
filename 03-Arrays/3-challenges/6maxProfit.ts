const maxProfit = (prices: number[]) => {
   let minPrice: number = prices[0];
   let maxProfit: number = 0;

   for (let i = 1; i < prices.length; i++) {
      const currentPrice: number = prices[i];

    // Updtae minimum price of the lower price is found
    minPrice = Math.min(minPrice, currentPrice);
    // console.log(minPrice);

    const potentialProfit = currentPrice - minPrice;

    maxProfit = Math.max(maxProfit, potentialProfit);
    console.log(maxProfit);

   }

   return maxProfit;
};

const prices: number[] = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log("Maximum profit: ", profit)