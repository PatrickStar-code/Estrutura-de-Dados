/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  // Input: nums = [1,2,3,1], k = 3

  let right = 0;
  let map = new Map();

  while (right < nums.length) {
    if (map.has(nums[right]) && Math.abs(map.get(nums[right]) - right) <= k) {
      return true;
    } else {
      map.set(nums[right], right);
    }
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // returns true
