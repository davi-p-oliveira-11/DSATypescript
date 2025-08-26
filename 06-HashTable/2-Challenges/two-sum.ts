function twoSum(nums: number[], target: number): number[] {
  const numMap: Record<number, number> = {}; // key: number, value: index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }

  return [];
}

const nums: number[] = [2, 7, 11, 15];
const target: number = 9;
const result: number[] = twoSum(nums, target);
console.log(result); // [0, 1]
