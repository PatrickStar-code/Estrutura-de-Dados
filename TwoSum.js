/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  let Twosum = new Map();

  for (i in nums) {
    if (Twosum.has(target - nums[i])) {
      return [Twosum.get(target - nums[i]), i];
    } else {
      Twosum.set(nums[i], i);
    }
  }
  return -1;
};

console.log(twoSum([3, 2, 5, 1], 8));
