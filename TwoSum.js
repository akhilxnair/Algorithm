// #1. Brute Force Solution - Loop in Loop - O(n^2)

// #2. Optimal Solution - Hash Table - O(n)
const twoSum = function (nums, target) {
  const hashMap = {};
  for (let p = 0; p < nums.length; p++) {
    const numberToFind = target - nums[p];
    if (hashMap[numberToFind] !== undefined) {
      return [hashMap[numberToFind], p];
    } else hashMap[nums[p]] = p;
  }
  return null;
};

console.log(twoSum([2, 7, 11, 15], 9));
