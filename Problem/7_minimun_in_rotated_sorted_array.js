/*
  https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
  Input: nums = [3,4,5,1,2]
  Output: 1
  Explanation: The original array was [1,2,3,4,5] rotated 3 times.

  1. Identify the sorted first half and eliminate it.
  2. If nums[low] <= nums[mid] which means mid is the part of first sorted half
  */

var findMin = function (nums) {
    let lowIdx = 0;
    let highIdx = nums.length - 1;
    let ans = nums[0];
    while (lowIdx <= highIdx) {
        let midIdx = Math.floor((lowIdx + highIdx) / 2);
        if (nums[lowIdx] <= nums[midIdx]) {
            ans = Math.min(ans, nums[lowIdx]);
            lowIdx = midIdx + 1;
        }
        else {
            highIdx = midIdx - 1;
            ans = Math.min(ans, nums[midIdx])
        }
    }
    return ans;
};
