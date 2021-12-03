// #1. Brute Force Solution - Loop in Loop - O(n^2)

// #2. Optimal Solution - Hash Table - O(n)
const trap = function (heights) {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p;
    let rightP = p;
    let leftMax = 0;
    let rightMax = 0;
  }
  return totalWater;
};

console.log(trap([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
