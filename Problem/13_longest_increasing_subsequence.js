/*
https://leetcode.com/problems/longest-increasing-subsequence/description/
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

- at array[i] check how many items are smaller than array[i] from array[0] till array[i]
- keep max count of how many values are smaller than array[i] from array[0] till array[i]
*/

var lengthOfLIS = function(nums) {
     const n = nums.length;
    if (n === 0) return 0;

    const dp = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};
