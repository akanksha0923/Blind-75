/*
  https://leetcode.com/problems/maximum-subarray/
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: The subarray [4,-1,2,1] has the largest sum 6.
*/

var maxSubArray = function (nums) {
    let currSum = 0;
    let maxSum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (currSum < 0) {
            currSum = 0
        }
        currSum = currSum + nums[i];
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum
};
