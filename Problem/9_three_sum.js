/*
  https://leetcode.com/problems/3sum/
  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]
  Return all the triplets where sum === 0

  Sorting takes O(n log n), outer loop is O(n), and two-pointer scan is O(n)
*/

function threeSum(nums) {
    nums.sort((a, b) => a - b); // Sort array
    const result = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const total = nums[i] + nums[left] + nums[right];
            if (total === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                // Skip duplicates
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;
            } else if (total < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return result;
}

