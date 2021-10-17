// #1. Brute Force Solution - Loop in Loop - O(n^2)

// #2. Optimal Solution - Two Pointer Technique - O(n)
const maxArea = function (heights) {
  let p1 = 0;
  let p2 = heights.length - 1;
  let max = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;
    max = Math.max(max, area);

    if (heights[p1] <= heights[p2]) p1++;
    else p2--;
  }
  return max;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
